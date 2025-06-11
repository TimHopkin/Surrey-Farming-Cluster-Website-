import { collection, addDoc, updateDoc, doc, getDocs, query, where, onSnapshot } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/config';
import { Farm, FarmFormData } from '../types/farm';

export const createFarm = async (farmData: FarmFormData, ownerId: string): Promise<string> => {
  try {
    let imageUrl = '';
    
    // Upload image if provided
    if (farmData.image) {
      const imageRef = ref(storage, `farm-images/${ownerId}/${Date.now()}-${farmData.image.name}`);
      const snapshot = await uploadBytes(imageRef, farmData.image);
      imageUrl = await getDownloadURL(snapshot.ref);
    }

    const farm: Omit<Farm, 'id'> = {
      name: farmData.name,
      description: farmData.description,
      type: farmData.type,
      location: {
        address: farmData.address,
        lat: farmData.lat || 51.2362,
        lng: farmData.lng || -0.5704
      },
      products: farmData.products,
      image: imageUrl || 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop&auto=format',
      contact: {
        email: farmData.email,
        phone: farmData.phone,
        website: farmData.website
      },
      isPublic: true,
      ownerId,
      sbiNumber: farmData.sbiNumber,
      farmSize: farmData.farmSize,
      establishedYear: farmData.establishedYear,
      certifications: farmData.certifications || [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const docRef = await addDoc(collection(db, 'farms'), farm);
    return docRef.id;
  } catch (error) {
    console.error('Error creating farm:', error);
    throw error;
  }
};

export const updateFarm = async (farmId: string, farmData: Partial<FarmFormData>, ownerId: string): Promise<void> => {
  try {
    let imageUrl;
    
    // Upload new image if provided
    if (farmData.image) {
      const imageRef = ref(storage, `farm-images/${ownerId}/${Date.now()}-${farmData.image.name}`);
      const snapshot = await uploadBytes(imageRef, farmData.image);
      imageUrl = await getDownloadURL(snapshot.ref);
    }

    const updateData: Partial<Farm> = {
      ...farmData,
      image: imageUrl || undefined,
      location: farmData.address ? {
        address: farmData.address,
        lat: farmData.lat || 51.2362,
        lng: farmData.lng || -0.5704
      } : undefined,
      contact: {
        email: farmData.email,
        phone: farmData.phone,
        website: farmData.website
      },
      updatedAt: new Date()
    };

    // Remove undefined values
    Object.keys(updateData).forEach(key => 
      updateData[key as keyof Farm] === undefined && delete updateData[key as keyof Farm]
    );

    await updateDoc(doc(db, 'farms', farmId), updateData);
  } catch (error) {
    console.error('Error updating farm:', error);
    throw error;
  }
};

export const getUserFarm = async (ownerId: string): Promise<Farm | null> => {
  try {
    const q = query(collection(db, 'farms'), where('ownerId', '==', ownerId));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...doc.data() } as Farm;
    }
    
    return null;
  } catch (error) {
    console.error('Error getting user farm:', error);
    throw error;
  }
};

export const getAllFarms = (callback: (farms: Farm[]) => void) => {
  const unsubscribe = onSnapshot(collection(db, 'farms'), (snapshot) => {
    const farms: Farm[] = [];
    snapshot.forEach((doc) => {
      farms.push({ id: doc.id, ...doc.data() } as Farm);
    });
    callback(farms.filter(farm => farm.isPublic));
  });
  
  return unsubscribe;
};