import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/OptimizedAuthContext';

// Lazy-loaded components
const FarmProfile = React.lazy(() => import('./FarmProfile'));

interface Farm {
  id: string;
  name: string;
  type: string;
  location: { address: string };
  products: string[];
  image: string;
  isPublic: boolean;
  farmSize?: number;
  establishedYear?: number;
}

const FastDashboard: React.FC = () => {
  const { currentUser, userProfile, loading: authLoading, error } = useAuth();
  const [farm, setFarm] = useState<Farm | null>(null);
  const [farmLoading, setFarmLoading] = useState(false);
  const [showProfileForm, setShowProfileForm] = useState(false);

  // Only load farm data when explicitly requested
  const loadFarmData = async () => {
    if (!currentUser || farmLoading) return;
    
    setFarmLoading(true);
    try {
      const { getUserFarm } = await import('../services/farmService');
      const userFarm = await getUserFarm(currentUser.uid);
      setFarm(userFarm);
    } catch (error) {
      console.error('Error loading farm:', error);
    } finally {
      setFarmLoading(false);
    }
  };

  // Quick auth check without heavy loading
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse bg-gray-300 h-8 w-48 rounded mx-auto mb-4"></div>
          <div className="text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h2 className="text-xl font-bold text-red-600 mb-4">Authentication Error</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link to="/login" className="bg-cluster-green text-white px-6 py-3 rounded-lg hover:bg-green-700">
            Try Again
          </Link>
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
          <Link to="/login" className="bg-cluster-green text-white px-6 py-3 rounded-lg hover:bg-green-700 font-medium">
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Welcome */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome, {userProfile?.displayName || currentUser.displayName || 'Farmer'}! 👋
              </h1>
              <p className="text-gray-600">
                {isAdmin && "Manage the Surrey Farming Cluster"}
                {isFarmer && "Your farming dashboard"}
              </p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              isAdmin ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
            }`}>
              {isAdmin ? '👨‍💼 Admin' : '🌾 Farmer'}
            </span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Farm Profile */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Farm Profile</h3>
              <p className="text-sm text-gray-600 mb-4">Create or manage your farm listing</p>
              
              {farm ? (
                <div className="space-y-2">
                  <p className="text-green-600 font-medium">✅ Profile Active</p>
                  <Link to="/profile" className="block w-full bg-cluster-green text-white px-4 py-2 rounded hover:bg-green-700">
                    Edit Profile
                  </Link>
                </div>
              ) : (
                <div className="space-y-2">
                  {farmLoading ? (
                    <div className="animate-pulse bg-gray-300 h-8 rounded"></div>
                  ) : (
                    <>
                      <button 
                        onClick={loadFarmData}
                        className="block w-full text-cluster-blue hover:text-blue-700 mb-2"
                      >
                        Check Profile Status
                      </button>
                      <Link to="/profile" className="block w-full bg-cluster-green text-white px-4 py-2 rounded hover:bg-green-700">
                        Create Profile
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Browse Farms */}
          <Link to="/farms" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="text-3xl mb-3">🏘️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Browse Farms</h3>
              <p className="text-sm text-gray-600">Discover local farms in Surrey</p>
            </div>
          </Link>

          {/* Funding */}
          <Link to="/funding" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-gray-900 mb-2">Funding</h3>
              <p className="text-sm text-gray-600">Find grants and opportunities</p>
            </div>
          </Link>

          {/* Community */}
          <Link to="/news" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="text-3xl mb-3">📰</div>
              <h3 className="font-semibold text-gray-900 mb-2">News</h3>
              <p className="text-sm text-gray-600">Latest farming updates</p>
            </div>
          </Link>

          {/* Map */}
          <Link to="/map" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Farm Map</h3>
              <p className="text-sm text-gray-600">Interactive map view</p>
            </div>
          </Link>

          {/* Admin Panel */}
          {isAdmin && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center">
                <div className="text-3xl mb-3">⚙️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Admin Tools</h3>
                <p className="text-sm text-gray-600 mb-4">Manage the cluster</p>
                <Link to="/system-test" className="block w-full bg-cluster-blue text-white px-4 py-2 rounded hover:bg-blue-700">
                  System Health
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Help Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
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

export default FastDashboard;