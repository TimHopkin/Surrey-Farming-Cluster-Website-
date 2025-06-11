import { Farm } from '../types/farm';

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
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop&auto=format',
    contact: {
      email: 'info@greenfieldorganic.co.uk',
      website: 'www.greenfieldorganic.co.uk'
    },
    isPublic: true,
    ownerId: 'sample-1',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
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
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&auto=format',
    contact: {
      email: 'hello@surreydairy.com',
      phone: '01306 123456'
    },
    isPublic: true,
    ownerId: 'sample-2',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
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
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop&auto=format',
    isPublic: true,
    ownerId: 'sample-3',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
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
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format',
    contact: {
      email: 'orders@woodlandedge.farm'
    },
    isPublic: true,
    ownerId: 'sample-4',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
];