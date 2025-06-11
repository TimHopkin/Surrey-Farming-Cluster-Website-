import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getUserFarm, getAllFarms } from '../services/farmService';
import { Farm } from '../types/farm';
import { sampleFarms } from '../data/farms';

const SimpleDashboard: React.FC = () => {
  const { currentUser, userProfile, loading: authLoading } = useAuth();
  const [farm, setFarm] = useState<Farm | null>(null);
  const [allFarms, setAllFarms] = useState<Farm[]>([]);
  const [farmLoading, setFarmLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (!currentUser) {
        setFarmLoading(false);
        return;
      }
      
      try {
        // Load user's farm
        const userFarm = await getUserFarm(currentUser.uid);
        setFarm(userFarm);
        
        // Load all farms for admin or community display
        const unsubscribe = getAllFarms((firebaseFarms) => {
          const combinedFarms = [...sampleFarms, ...firebaseFarms];
          setAllFarms(combinedFarms);
        });

        // Cleanup listener after component unmounts
        return () => unsubscribe();
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      } finally {
        setFarmLoading(false);
      }
    };

    if (!authLoading) {
      loadData();
    }
  }, [currentUser, authLoading]);

  if (authLoading || farmLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cluster-green mx-auto mb-4"></div>
          <div className="text-xl text-gray-600">Loading your dashboard...</div>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Surrey Farming Cluster</h2>
          <p className="text-gray-600 mb-6">Please log in to access your farmer dashboard</p>
          <Link 
            to="/login" 
            className="bg-cluster-green text-white px-6 py-3 rounded-lg hover:bg-green-700 font-medium"
          >
            Sign In / Join Now
          </Link>
        </div>
      </div>
    );
  }

  const isAdmin = userProfile?.role === 'admin';
  const isFarmer = userProfile?.role === 'farmer';

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome back, {userProfile?.displayName || currentUser.displayName}! 👋
              </h1>
              <p className="text-gray-600">
                {isAdmin && "Manage the Surrey Farming Cluster community"}
                {isFarmer && farm && "Your farming dashboard - manage your profile and connect with the community"}
                {isFarmer && !farm && "Let's get your farm profile set up!"}
              </p>
            </div>
            <div className="text-right">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                isAdmin ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
              }`}>
                {isAdmin ? '👨‍💼 Admin' : '🌾 Farmer'}
              </span>
            </div>
          </div>
        </div>

        {/* Farmer Flow */}
        {isFarmer && (
          <>
            {!farm ? (
              /* New Farmer Onboarding */
              <div className="mb-8">
                <div className="bg-gradient-to-r from-cluster-green to-green-600 rounded-lg shadow-md p-8 text-white text-center mb-6">
                  <div className="text-4xl mb-4">🏗️</div>
                  <h2 className="text-xl font-bold mb-4">Set Up Your Farm Profile</h2>
                  <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                    Create your farm profile to join the Surrey farming community and appear in our public directory.
                  </p>
                  <Link
                    to="/profile"
                    className="bg-white text-cluster-green px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                  >
                    Create My Farm Profile →
                  </Link>
                </div>

                {/* What's Available */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link to="/farms" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className="text-3xl mb-3">🏘️</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Browse {allFarms.length} Local Farms</h3>
                    <p className="text-sm text-gray-600">See what other farmers are doing in Surrey</p>
                  </Link>
                  
                  <Link to="/funding" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className="text-3xl mb-3">💰</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Funding Opportunities</h3>
                    <p className="text-sm text-gray-600">Find grants and support for your farm</p>
                  </Link>
                  
                  <Link to="/map" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className="text-3xl mb-3">🗺️</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Interactive Map</h3>
                    <p className="text-sm text-gray-600">See farms across Surrey</p>
                  </Link>
                </div>
              </div>
            ) : (
              /* Existing Farmer Dashboard */
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
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{farm.name}</h3>
                        <p className="text-gray-600 mb-2">{farm.type} • {farm.location.address}</p>
                        <p className="text-sm text-gray-500 line-clamp-2">{farm.description}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
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
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      to={`/farms/${farm.id}`}
                      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                    >
                      <div className="text-2xl mb-2">👀</div>
                      <div className="text-sm font-medium">View Public Profile</div>
                    </Link>
                    <Link
                      to="/profile"
                      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                    >
                      <div className="text-2xl mb-2">✏️</div>
                      <div className="text-sm font-medium">Edit Farm Details</div>
                    </Link>
                  </div>
                </div>
                
                {/* Farm Stats */}
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
                      <span className="text-gray-600">Status</span>
                      <span className={`font-medium ${farm.isPublic ? 'text-green-600' : 'text-yellow-600'}`}>
                        {farm.isPublic ? 'Public' : 'Private'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Community Links */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link to="/farms" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-2xl mb-2">🏘️</div>
                <h4 className="font-medium text-gray-900 mb-1">Browse Farms</h4>
                <p className="text-xs text-gray-600">{allFarms.length} farms</p>
              </Link>
              
              <Link to="/funding" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-2xl mb-2">💰</div>
                <h4 className="font-medium text-gray-900 mb-1">Funding</h4>
                <p className="text-xs text-gray-600">Grants available</p>
              </Link>
              
              <Link to="/news" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-2xl mb-2">📰</div>
                <h4 className="font-medium text-gray-900 mb-1">News</h4>
                <p className="text-xs text-gray-600">Latest updates</p>
              </Link>
              
              <Link to="/map" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-2xl mb-2">🗺️</div>
                <h4 className="font-medium text-gray-900 mb-1">Map</h4>
                <p className="text-xs text-gray-600">Farm locations</p>
              </Link>
            </div>
          </>
        )}

        {/* Admin Flow */}
        {isAdmin && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Cluster Overview</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Farms</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-medium">
                      {allFarms.length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Public Farms</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-medium">
                      {allFarms.filter(f => f.isPublic).length}
                    </span>
                  </div>
                </div>
                <Link to="/farms" className="block mt-4 text-cluster-blue hover:text-blue-700 font-medium">
                  Manage Farms →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Management</h3>
                <div className="space-y-2">
                  <Link to="/news" className="block text-cluster-blue hover:text-blue-700">📰 Manage News</Link>
                  <Link to="/funding" className="block text-cluster-blue hover:text-blue-700">💰 Manage Funding</Link>
                  <Link to="/blog" className="block text-cluster-blue hover:text-blue-700">📝 Manage Blog</Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Link to="/map" className="block text-cluster-blue hover:text-blue-700">🗺️ View Farm Map</Link>
                  <Link to="/system-test" className="block text-cluster-blue hover:text-blue-700">🔧 System Health</Link>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default SimpleDashboard;