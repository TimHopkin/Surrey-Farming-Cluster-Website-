import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getUserFarm, getAllFarms } from '../services/farmService';
import { Farm } from '../types/farm';
import { sampleFarms } from '../data/farms';

const Dashboard: React.FC = () => {
  const { currentUser, userProfile, loading: authLoading } = useAuth();
  const [farm, setFarm] = useState<Farm | null>(null);
  const [allFarms, setAllFarms] = useState<Farm[]>([]);
  const [farmLoading, setFarmLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUserData = async () => {
      if (!currentUser) {
        setFarmLoading(false);
        return;
      }
      
      try {
        const userFarm = await getUserFarm(currentUser.uid);
        setFarm(userFarm);
        setError(null);
      } catch (error) {
        console.error('Error loading user farm:', error);
        // Don't show error for missing farm - it's normal for new users
        setError(null);
      } finally {
        setFarmLoading(false);
      }
    };

    if (!authLoading) {
      loadUserData();
    }
  }, [currentUser, authLoading]);

  useEffect(() => {
    // Load all farms for admin view or community display
    const unsubscribe = getAllFarms((firebaseFarms) => {
      const combinedFarms = [...sampleFarms, ...firebaseFarms];
      setAllFarms(combinedFarms);
    });

    return () => unsubscribe();
  }, []);

  if (authLoading || farmLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading your dashboard...</div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to access your dashboard</h2>
          <Link to="/" className="text-cluster-blue hover:underline">Go to homepage</Link>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error loading dashboard</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-cluster-blue text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
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
                {isFarmer && farm && "Your farming dashboard - manage your profile and connect with the community."}
                {isFarmer && !farm && "Let's get your farm set up on the Surrey Farming Cluster!"}
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
              /* No Farm Profile - Prominent Onboarding */
              <div className="mb-8">
                <div className="bg-gradient-to-r from-cluster-green to-green-600 rounded-lg shadow-md p-8 text-white mb-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌱</div>
                    <h2 className="text-2xl font-bold mb-4">Set Up Your Farm Profile</h2>
                    <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                      Create your farm profile to showcase your business, connect with the Surrey farming community, 
                      and appear on our public farm directory.
                    </p>
                    <Link
                      to="/profile"
                      className="bg-white text-cluster-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center text-lg"
                    >
                      <span className="mr-2">🏗️</span>
                      Create My Farm Profile
                    </Link>
                  </div>
                </div>

                {/* What You Can Do Without Profile */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">While you're here, explore:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link to="/farms" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                      <span className="text-2xl mr-3">🏘️</span>
                      <div>
                        <div className="font-medium">Browse {allFarms.length} Farms</div>
                        <div className="text-sm text-gray-600">See what other farmers are doing</div>
                      </div>
                    </Link>
                    <Link to="/funding" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                      <span className="text-2xl mr-3">💰</span>
                      <div>
                        <div className="font-medium">Funding Opportunities</div>
                        <div className="text-sm text-gray-600">Find grants and support</div>
                      </div>
                    </Link>
                    <Link to="/news" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                      <span className="text-2xl mr-3">📰</span>
                      <div>
                        <div className="font-medium">Latest News</div>
                        <div className="text-sm text-gray-600">Stay updated on farming</div>
                      </div>
                    </Link>
                    <Link to="/map" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                      <span className="text-2xl mr-3">🗺️</span>
                      <div>
                        <div className="font-medium">Farm Locations</div>
                        <div className="text-sm text-gray-600">See farms on the map</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              /* Existing Farm Profile Dashboard */
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
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
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{farm.name}</h3>
                        <p className="text-gray-600 mb-2">{farm.type} • {farm.location.address}</p>
                        <p className="text-sm text-gray-500 line-clamp-2">{farm.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {farm.products.slice(0, 3).map((product, index) => (
                            <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                              {product}
                            </span>
                          ))}
                          {farm.products.length > 3 && (
                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              +{farm.products.length - 3} more
                            </span>
                          )}
                        </div>
                        <div className="mt-2">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            farm.isPublic ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {farm.isPublic ? '✅ Listed Publicly' : '🔒 Private'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Farm Actions */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Farm Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        to={`/farms/${farm.id}`}
                        className="flex items-center p-3 border border-green-200 rounded-lg hover:bg-green-50 text-center"
                      >
                        <div className="w-full">
                          <div className="text-2xl mb-1">👀</div>
                          <div className="text-sm font-medium">View Public Profile</div>
                        </div>
                      </Link>
                      <Link
                        to="/profile"
                        className="flex items-center p-3 border border-blue-200 rounded-lg hover:bg-blue-50 text-center"
                      >
                        <div className="w-full">
                          <div className="text-2xl mb-1">✏️</div>
                          <div className="text-sm font-medium">Edit Details</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Farm Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Products Listed</span>
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
                    <div className="flex justify-between">
                      <span className="text-gray-600">Contact Info</span>
                      <span className="font-medium">
                        {farm.contact?.email || farm.contact?.phone ? 'Added' : 'Missing'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Community Section - Always Show */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Link
                to="/farms"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🏘️</div>
                <h3 className="font-semibold text-gray-900 mb-1">Browse Farms</h3>
                <p className="text-sm text-gray-600">{allFarms.length} farms in Surrey</p>
              </Link>

              <Link
                to="/funding"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-3xl mb-2">💰</div>
                <h3 className="font-semibold text-gray-900 mb-1">Funding</h3>
                <p className="text-sm text-gray-600">Grants and opportunities</p>
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
                <p className="text-sm text-gray-600">Interactive map view</p>
              </Link>
            </div>
          </>
        )}

        {/* Admin Dashboard */}
        {isAdmin && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Farm Management</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Farms</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-medium">
                      {allFarms.length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Public Farms</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-medium">
                      {allFarms.filter(f => f.isPublic).length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sample Farms</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded font-medium">
                      {sampleFarms.length}
                    </span>
                  </div>
                </div>
                <Link 
                  to="/farms" 
                  className="block mt-4 text-cluster-blue hover:text-blue-700 font-medium"
                >
                  View All Farms →
                </Link>
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
                  <div className="text-gray-500 text-sm mt-2">
                    Content editing coming soon
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link to="/map" className="block text-cluster-blue hover:text-blue-700">
                    🗺️ View Farm Locations
                  </Link>
                  <Link to="/test" className="block text-cluster-blue hover:text-blue-700">
                    🔧 System Test Page
                  </Link>
                  <div className="text-gray-500 text-sm">
                    📊 Analytics (Coming Soon)
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Farms for Admin */}
            {allFarms.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Farm Activity</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {allFarms.slice(0, 6).map((farm) => (
                    <div key={farm.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={farm.image} 
                          alt={farm.name}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 truncate">{farm.name}</h4>
                          <p className="text-sm text-gray-600 truncate">{farm.type}</p>
                          <p className="text-xs text-gray-500">{farm.location.address}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Help Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">📞</div>
              <h4 className="font-medium text-gray-900 mb-2">Contact Support</h4>
              <p className="text-sm text-gray-600">Get help with your account or farm profile</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📚</div>
              <h4 className="font-medium text-gray-900 mb-2">Documentation</h4>
              <p className="text-sm text-gray-600">Learn how to use the platform effectively</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💬</div>
              <h4 className="font-medium text-gray-900 mb-2">Community</h4>
              <p className="text-sm text-gray-600">Connect with other Surrey farmers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;