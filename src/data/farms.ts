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
}

export const sampleFarms: Farm[] = [
  {
    id: '1',
    name: 'Greenfield Organic Farm',
    description: 'A family-run organic farm specializing in sustainable vegetable production and heritage breed livestock.',
    type: 'Organic Mixed',
    location: {
      address: 'Guildford, Surrey',
      lat: 51.2362,
      lng: -0.5704
    },
    products: ['Organic Vegetables', 'Free-range Eggs', 'Heritage Pork'],
    image: '/api/placeholder/400/300',
    contact: {
      email: 'info@greenfieldorganic.co.uk',
      website: 'www.greenfieldorganic.co.uk'
    },
    isPublic: true
  },
  {
    id: '2',
    name: 'Surrey Dairy Collective',
    description: 'Award-winning dairy farm producing high-quality milk and artisan cheeses using traditional methods.',
    type: 'Dairy',
    location: {
      address: 'Dorking, Surrey',
      lat: 51.2341,
      lng: -0.3347
    },
    products: ['Fresh Milk', 'Artisan Cheese', 'Butter', 'Yogurt'],
    image: '/api/placeholder/400/300',
    contact: {
      email: 'hello@surreydairy.com',
      phone: '01306 123456'
    },
    isPublic: true
  },
  {
    id: '3',
    name: 'Hillside Arable Farm',
    description: 'Modern arable operation focusing on sustainable grain production and innovative farming techniques.',
    type: 'Arable',
    location: {
      address: 'Farnham, Surrey',
      lat: 51.2146,
      lng: -0.7981
    },
    products: ['Wheat', 'Barley', 'Rapeseed', 'Field Beans'],
    image: '/api/placeholder/400/300',
    isPublic: true
  },
  {
    id: '4',
    name: 'Woodland Edge Market Garden',
    description: 'Small-scale market garden supplying local restaurants and farmers markets with seasonal produce.',
    type: 'Market Garden',
    location: {
      address: 'Reigate, Surrey',
      lat: 51.2379,
      lng: -0.2044
    },
    products: ['Seasonal Vegetables', 'Herbs', 'Cut Flowers', 'Salad Leaves'],
    image: '/api/placeholder/400/300',
    contact: {
      email: 'orders@woodlandedge.farm'
    },
    isPublic: true
  }
];