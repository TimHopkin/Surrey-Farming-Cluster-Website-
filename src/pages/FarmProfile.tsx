import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getUserFarm, createFarm, updateFarm } from '../services/farmService';
import { Farm, FarmFormData } from '../types/farm';

const farmTypes = [
  'Organic Mixed',
  'Dairy',
  'Arable',
  'Market Garden',
  'Livestock',
  'Poultry',
  'Fruit & Vegetables',
  'Sheep',
  'Beef Cattle',
  'Other'
];

const commonProducts = [
  'Organic Vegetables',
  'Free-range Eggs',
  'Heritage Pork',
  'Fresh Milk',
  'Artisan Cheese',
  'Butter',
  'Yogurt',
  'Wheat',
  'Barley',
  'Rapeseed',
  'Field Beans',
  'Seasonal Vegetables',
  'Herbs',
  'Cut Flowers',
  'Salad Leaves',
  'Beef',
  'Lamb',
  'Chicken',
  'Turkey',
  'Honey'
];

const FarmProfile: React.FC = () => {
  const { currentUser } = useAuth();
  const [farm, setFarm] = useState<Farm | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState<FarmFormData>({
    name: '',
    description: '',
    type: '',
    address: '',
    products: [],
    email: '',
    phone: '',
    website: '',
    sbiNumber: '',
    farmSize: undefined,
    establishedYear: undefined,
    certifications: []
  });

  useEffect(() => {
    const loadFarm = async () => {
      if (!currentUser) return;
      
      try {
        const userFarm = await getUserFarm(currentUser.uid);
        if (userFarm) {
          setFarm(userFarm);
          setFormData({
            name: userFarm.name,
            description: userFarm.description,
            type: userFarm.type,
            address: userFarm.location.address,
            products: userFarm.products,
            email: userFarm.contact?.email || '',
            phone: userFarm.contact?.phone || '',
            website: userFarm.contact?.website || '',
            sbiNumber: userFarm.sbiNumber || '',
            farmSize: userFarm.farmSize,
            establishedYear: userFarm.establishedYear,
            certifications: userFarm.certifications || []
          });
        }
      } catch (error) {
        setError('Failed to load farm profile');
      } finally {
        setLoading(false);
      }
    };

    loadFarm();
  }, [currentUser]);

  const handleInputChange = (field: keyof FarmFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleProductToggle = (product: string) => {
    setFormData(prev => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter(p => p !== product)
        : [...prev.products, product]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;

    setSaving(true);
    setError('');
    setSuccess('');

    try {
      if (farm) {
        await updateFarm(farm.id, formData, currentUser.uid);
        setSuccess('Farm profile updated successfully! Your changes are now live on the website.');
      } else {
        await createFarm(formData, currentUser.uid);
        setSuccess('Farm profile created successfully! Your farm is now visible on the website.');
        
        // Reload the farm data
        const newFarm = await getUserFarm(currentUser.uid);
        setFarm(newFarm);
      }
    } catch (error) {
      setError('Failed to save farm profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading your farm profile...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {farm ? 'Edit Farm Profile' : 'Create Your Farm Profile'}
            </h1>
            <p className="text-gray-600">
              {farm 
                ? 'Update your farm information. Changes will be reflected on the main website immediately.'
                : 'Set up your farm profile to appear on the Surrey Farming Cluster website and connect with other farmers.'
              }
            </p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Farm Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cluster-green"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Farm Type *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => handleInputChange('type', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cluster-green"
                  required
                >
                  <option value="">Select farm type</option>
                  {farmTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cluster-green"
                placeholder="Describe your farm, farming methods, and what makes you unique..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address *
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cluster-green"
                placeholder="e.g., Guildford, Surrey"
                required
              />
            </div>

            {/* Products & Services */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Products & Services *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {commonProducts.map(product => (
                  <label key={product} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.products.includes(product)}
                      onChange={() => handleProductToggle(product)}
                      className="text-cluster-green focus:ring-cluster-green"
                    />
                    <span className="text-sm text-gray-700">{product}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cluster-green"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cluster-green"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cluster-green"
                    placeholder="https://..."
                  />
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SBI Number
                  </label>
                  <input
                    type="text"
                    value={formData.sbiNumber}
                    onChange={(e) => handleInputChange('sbiNumber', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cluster-green"
                    placeholder="123456789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Farm Size (acres)
                  </label>
                  <input
                    type="number"
                    value={formData.farmSize || ''}
                    onChange={(e) => handleInputChange('farmSize', e.target.value ? parseInt(e.target.value) : undefined)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cluster-green"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Established Year
                  </label>
                  <input
                    type="number"
                    value={formData.establishedYear || ''}
                    onChange={(e) => handleInputChange('establishedYear', e.target.value ? parseInt(e.target.value) : undefined)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cluster-green"
                    min="1800"
                    max={new Date().getFullYear()}
                  />
                </div>
              </div>
            </div>

            {/* Farm Image */}
            <div className="border-t pt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Farm Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleInputChange('image', e.target.files?.[0])}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cluster-green"
              />
              <p className="text-sm text-gray-500 mt-1">
                Upload a photo of your farm (optional). Recommended size: 400x300px or larger.
              </p>
            </div>

            <div className="flex justify-end space-x-4 pt-6">
              <button
                type="submit"
                disabled={saving}
                className="bg-cluster-green text-white px-8 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50 font-medium"
              >
                {saving ? 'Saving...' : (farm ? 'Update Profile' : 'Create Profile')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FarmProfile;