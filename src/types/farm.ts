export interface Farm {
  id: string;
  name: string;
  description: string;
  type: string;
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  products: string[];
  image: string;
  contact?: {
    email?: string;
    phone?: string;
    website?: string;
  };
  isPublic: boolean;
  ownerId: string;
  sbiNumber?: string;
  farmSize?: number;
  establishedYear?: number;
  certifications?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface FarmFormData {
  name: string;
  description: string;
  type: string;
  address: string;
  lat?: number;
  lng?: number;
  products: string[];
  email?: string;
  phone?: string;
  website?: string;
  sbiNumber?: string;
  farmSize?: number;
  establishedYear?: number;
  certifications?: string[];
  image?: File;
}