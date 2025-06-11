import React, { createContext, useContext, useEffect, useState } from 'react';

// Simplified auth context that doesn't block rendering
export interface User {
  uid: string;
  email: string;
  displayName?: string;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: 'farmer' | 'admin';
  createdAt: Date;
  farmId?: string;
}

interface AuthContextType {
  currentUser: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  error: string | null;
  signup: (email: string, password: string, displayName: string, role: 'farmer' | 'admin') => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Lazy load Firebase only when needed
  const getFirebaseAuth = async () => {
    const { auth } = await import('../firebase/config');
    return auth;
  };

  const getFirestore = async () => {
    const { db } = await import('../firebase/config');
    const { doc, setDoc, getDoc } = await import('firebase/firestore');
    return { db, doc, setDoc, getDoc };
  };

  const signup = async (email: string, password: string, displayName: string, role: 'farmer' | 'admin') => {
    try {
      setError(null);
      const { createUserWithEmailAndPassword, updateProfile } = await import('firebase/auth');
      const auth = await getFirebaseAuth();
      const { db, doc, setDoc } = await getFirestore();
      
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, { displayName });
      
      const profile: UserProfile = {
        uid: user.uid,
        email: user.email!,
        displayName,
        role,
        createdAt: new Date()
      };
      
      await setDoc(doc(db, 'users', user.uid), profile);
      setCurrentUser({ uid: user.uid, email: user.email!, displayName });
      setUserProfile(profile);
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setError(null);
      const { signInWithEmailAndPassword } = await import('firebase/auth');
      const auth = await getFirebaseAuth();
      
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser({ uid: user.uid, email: user.email!, displayName: user.displayName || undefined });
      
      // Load user profile
      const { db, doc, getDoc } = await getFirestore();
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const profileData = userDoc.data() as UserProfile;
        profileData.createdAt = profileData.createdAt instanceof Date 
          ? profileData.createdAt 
          : new Date(profileData.createdAt);
        setUserProfile(profileData);
      }
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const { signOut } = await import('firebase/auth');
      const auth = await getFirebaseAuth();
      
      await signOut(auth);
      setCurrentUser(null);
      setUserProfile(null);
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  };

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;
    
    const initializeAuth = async () => {
      try {
        const { onAuthStateChanged } = await import('firebase/auth');
        const auth = await getFirebaseAuth();
        const { db, doc, getDoc } = await getFirestore();
        
        unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            setCurrentUser({ uid: user.uid, email: user.email!, displayName: user.displayName || undefined });
            
            try {
              const userDoc = await getDoc(doc(db, 'users', user.uid));
              if (userDoc.exists()) {
                const profileData = userDoc.data() as UserProfile;
                profileData.createdAt = profileData.createdAt instanceof Date 
                  ? profileData.createdAt 
                  : new Date(profileData.createdAt);
                setUserProfile(profileData);
              }
            } catch (error) {
              console.error('Error loading user profile:', error);
            }
          } else {
            setCurrentUser(null);
            setUserProfile(null);
          }
          setLoading(false);
        });
      } catch (error) {
        console.error('Error initializing auth:', error);
        setError('Failed to initialize authentication');
        setLoading(false);
      }
    };

    initializeAuth();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const value: AuthContextType = {
    currentUser,
    userProfile,
    loading,
    error,
    signup,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};