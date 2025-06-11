import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/HybridAuthContext';

// Static farm data for immediate display
const staticFarmData = {
  id: 'demo-farm',
  name: 'Green Valley Farm',
  type: 'Organic Mixed',
  location: { address: 'Guildford, Surrey' },
  products: ['Organic Vegetables', 'Free-range Eggs', 'Herbs'],
  image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop&auto=format',
  farmSize: 25,
  establishedYear: 2018,
  isPublic: true
};

const ReliableDashboard: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const [farmProfile, setFarmProfile] = useState(staticFarmData);
  const [showFarmForm, setShowFarmForm] = useState(false);

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-600 mb-6">Please log in to access your farmer dashboard</p>
          <Link to="/login" className="bg-cluster-green text-white px-6 py-3 rounded-lg hover:bg-green-700 font-medium">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const isAdmin = currentUser.role === 'admin';
  const isFarmer = currentUser.role === 'farmer';

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                Welcome back, {currentUser.displayName}! 👋
              </h1>
              <p className="text-gray-600">
                {isAdmin && "Manage the Surrey Farming Cluster"}
                {isFarmer && "Your farming dashboard - instant access guaranteed"}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                isAdmin ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
              }`}>
                {isAdmin ? '👨‍💼 Admin' : '🌾 Farmer'}
              </span>
              <button
                onClick={handleLogout}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                Logout
              </button>
            </div>
          </div>
          
          {/* Auth Method Indicator */}
          <div className="mt-3">
            <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
              currentUser.authMethod === 'localStorage' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              ⚡ {currentUser.authMethod === 'localStorage' ? 'Instant Local Auth' : 'Firebase Cloud Auth'}
            </span>
          </div>
        </div>

        {/* Farmer Dashboard */}
        {isFarmer && (
          <div className="space-y-6">
            
            {/* Farm Profile Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Your Farm Profile</h2>
                <button
                  onClick={() => setShowFarmForm(!showFarmForm)}
                  className="text-cluster-blue hover:text-blue-700 font-medium"
                >
                  {showFarmForm ? 'View Profile' : 'Edit Profile'}
                </button>
              </div>

              {!showFarmForm ? (
                /* Display Farm Profile */
                <div className="flex items-start space-x-4">
                  <img
                    src={farmProfile.image}
                    alt={farmProfile.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{farmProfile.name}</h3>
                    <p className="text-gray-600 mb-2">{farmProfile.type} • {farmProfile.location.address}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {farmProfile.products.map((product, index) => (
                        <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                          {product}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 space-x-4">
                      <span>🏞️ {farmProfile.farmSize} acres</span>
                      <span>📅 Est. {farmProfile.establishedYear}</span>
                      <span className="text-green-600">✅ Public</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Edit Farm Profile Form */
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Farm Name</label>
                      <input
                        type="text"
                        value={farmProfile.name}
                        onChange={(e) => setFarmProfile({...farmProfile, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cluster-green"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Farm Type</label>
                      <select
                        value={farmProfile.type}
                        onChange={(e) => setFarmProfile({...farmProfile, type: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cluster-green"
                      >
                        <option>Organic Mixed</option>
                        <option>Dairy</option>
                        <option>Arable</option>
                        <option>Market Garden</option>
                        <option>Livestock</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => {
                        setShowFarmForm(false);
                        // In a real app, this would save to localStorage/Firebase
                      }}
                      className="bg-cluster-green text-white px-4 py-2 rounded-lg hover:bg-green-700"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setShowFarmForm(false)}
                      className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <Link to="/farms" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-3xl mb-3">🏘️</div>
                <h3 className="font-semibold text-gray-900 mb-1">Browse Farms</h3>
                <p className="text-sm text-gray-600">Discover local farms</p>
              </Link>

              <Link to="/funding" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-semibold text-gray-900 mb-1">Funding</h3>
                <p className="text-sm text-gray-600">Find grants & support</p>
              </Link>

              <Link to="/news" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-3xl mb-3">📰</div>
                <h3 className="font-semibold text-gray-900 mb-1">News</h3>
                <p className="text-sm text-gray-600">Latest updates</p>
              </Link>

              <Link to="/map" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-3xl mb-3">🗺️</div>
                <h3 className="font-semibold text-gray-900 mb-1">Farm Map</h3>
                <p className="text-sm text-gray-600">Interactive locations</p>
              </Link>
            </div>

            {/* Farm Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Farm Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cluster-green">{farmProfile.products.length}</div>
                  <div className="text-sm text-gray-600">Products Listed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cluster-green">{farmProfile.farmSize}</div>
                  <div className="text-sm text-gray-600">Acres</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cluster-green">{new Date().getFullYear() - farmProfile.establishedYear}</div>
                  <div className="text-sm text-gray-600">Years Active</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">✓</div>
                  <div className="text-sm text-gray-600">Public Listing</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Admin Dashboard */}
        {isAdmin && (
          <div className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Cluster Overview</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Farms</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-medium">42</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active Members</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-medium">38</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Funding Distributed</span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded font-medium">£125k</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Link to="/farms" className="block text-cluster-blue hover:text-blue-700">🏘️ Manage Farms</Link>
                  <Link to="/funding" className="block text-cluster-blue hover:text-blue-700">💰 Add Funding</Link>
                  <Link to="/news" className="block text-cluster-blue hover:text-blue-700">📰 Post News</Link>
                  <Link to="/system-test" className="block text-cluster-blue hover:text-blue-700">🔧 System Test</Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>New farm registered</span>
                    <span className="text-gray-500">2 hrs ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Funding application submitted</span>
                    <span className="text-gray-500">5 hrs ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Profile updated</span>
                    <span className="text-gray-500">1 day ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/about" className="text-center p-4 border rounded-lg hover:bg-gray-50">
              <div className="text-2xl mb-2">📚</div>
              <div className="font-medium">About the Cluster</div>
            </Link>
            <Link to="/join" className="text-center p-4 border rounded-lg hover:bg-gray-50">
              <div className="text-2xl mb-2">💬</div>
              <div className="font-medium">Join Information</div>
            </Link>
            <a href="mailto:info@surreyfarmingcluster.org" className="text-center p-4 border rounded-lg hover:bg-gray-50">
              <div className="text-2xl mb-2">📞</div>
              <div className="font-medium">Contact Support</div>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReliableDashboard;