import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getUserFarm } from '../services/farmService';
import { Farm } from '../types/farm';

const Dashboard: React.FC = () => {
  const { currentUser, userProfile } = useAuth();
  const [farm, setFarm] = useState<Farm | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      if (!currentUser) return;
      
      try {
        const userFarm = await getUserFarm(currentUser.uid);
        setFarm(userFarm);
      } catch (error) {
        console.error('Error loading user farm:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, [currentUser]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading your dashboard...</div>
      </div>
    );
  }

  const isAdmin = userProfile?.role === 'admin';
  const isFarmer = userProfile?.role === 'farmer';

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {userProfile?.displayName || currentUser?.displayName}!
              </h1>
              <p className="text-gray-600">
                {isAdmin && "Manage the Surrey Farming Cluster and support our farming community."}
                {isFarmer && "Your farming dashboard - manage your profile and connect with the community."}
              </p>
            </div>
            <div className="text-right">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                isAdmin ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
              }`}>
                {isAdmin ? '👨‍💼 Administrator' : '🌾 Farmer'}
              </span>
            </div>
          </div>
        </div>

        {/* Farmer Dashboard */}
        {isFarmer && (
          <>
            {!farm ? (
              /* No Farm Profile - Onboarding */
              <div className="bg-gradient-to-r from-cluster-green to-green-600 rounded-lg shadow-md p-8 mb-8 text-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌱</div>
                  <h2 className="text-2xl font-bold mb-4">Let's Set Up Your Farm Profile!</h2>
                  <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                    Create your farm profile to showcase your business to the Surrey community, 
                    connect with other farmers, and appear on our public farm directory.
                  </p>
                  <Link
                    to="/profile"
                    className="bg-white text-cluster-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                  >
                    <span className="mr-2">🏗️</span>
                    Create My Farm Profile
                  </Link>
                </div>
              </div>
            ) : (
              /* Existing Farm Profile */
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold text-gray-900">Your Farm Profile</h2>
                      <Link
                        to="/profile"
                        className="text-cluster-blue hover:text-blue-700 font-medium"
                      >
                        Edit Profile →
                      </Link>
                    </div>
                    <div className="flex items-start space-x-4">
                      <img
                        src={farm.image}
                        alt={farm.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{farm.name}</h3>
                        <p className="text-gray-600 mb-2">{farm.type} • {farm.location.address}</p>
                        <p className="text-sm text-gray-500 line-clamp-2">{farm.description}</p>
                        <div className="mt-2">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            farm.isPublic ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {farm.isPublic ? '✅ Public' : '🔒 Private'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Products</span>
                      <span className="font-medium">{farm.products.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Farm Size</span>
                      <span className="font-medium">{farm.farmSize ? `${farm.farmSize} acres` : 'Not set'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Established</span>
                      <span className="font-medium">{farm.establishedYear || 'Not set'}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Link
                to="/farms"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🏘️</div>
                <h3 className="font-semibold text-gray-900 mb-1">Browse Farms</h3>
                <p className="text-sm text-gray-600">Explore other farms in Surrey</p>
              </Link>

              <Link
                to="/funding"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-3xl mb-2">💰</div>
                <h3 className="font-semibold text-gray-900 mb-1">Funding</h3>
                <p className="text-sm text-gray-600">Find grants and opportunities</p>
              </Link>

              <Link
                to="/news"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-3xl mb-2">📰</div>
                <h3 className="font-semibold text-gray-900 mb-1">News</h3>
                <p className="text-sm text-gray-600">Latest farming updates</p>
              </Link>

              <Link
                to="/map"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🗺️</div>
                <h3 className="font-semibold text-gray-900 mb-1">Farm Map</h3>
                <p className="text-sm text-gray-600">View farms on the map</p>
              </Link>
            </div>
          </>
        )}

        {/* Admin Dashboard */}
        {isAdmin && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Farmer Management</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Farmers</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                    Coming Soon
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pending Applications</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Management</h3>
              <div className="space-y-3">
                <Link to="/news" className="block text-cluster-blue hover:text-blue-700">
                  📰 Manage News Articles
                </Link>
                <Link to="/blog" className="block text-cluster-blue hover:text-blue-700">
                  📝 Manage Blog Posts
                </Link>
                <Link to="/funding" className="block text-cluster-blue hover:text-blue-700">
                  💰 Manage Funding Opportunities
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link to="/farms" className="block text-cluster-blue hover:text-blue-700">
                  🏘️ View All Farms
                </Link>
                <Link to="/map" className="block text-cluster-blue hover:text-blue-700">
                  🗺️ Farm Locations Map
                </Link>
                <button className="block w-full text-left text-gray-500">
                  📊 Analytics (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl mb-2">📞</div>
              <h4 className="font-medium text-gray-900">Contact Support</h4>
              <p className="text-sm text-gray-600">Get help with your account</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📚</div>
              <h4 className="font-medium text-gray-900">Documentation</h4>
              <p className="text-sm text-gray-600">Learn how to use the platform</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">💬</div>
              <h4 className="font-medium text-gray-900">Community</h4>
              <p className="text-sm text-gray-600">Connect with other farmers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;