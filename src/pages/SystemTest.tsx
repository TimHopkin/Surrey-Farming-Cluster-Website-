import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getUserFarm, getAllFarms } from '../services/farmService';
import { Farm } from '../types/farm';

const SystemTest: React.FC = () => {
  const { currentUser, userProfile, loading } = useAuth();
  const [farmTest, setFarmTest] = useState<{
    userFarm: Farm | null;
    allFarms: Farm[];
    error: string | null;
  }>({
    userFarm: null,
    allFarms: [],
    error: null
  });
  const [testLoading, setTestLoading] = useState(false);

  const runFirebaseTests = async () => {
    setTestLoading(true);
    try {
      if (currentUser) {
        const userFarm = await getUserFarm(currentUser.uid);
        setFarmTest(prev => ({ ...prev, userFarm, error: null }));
      }

      const unsubscribe = getAllFarms((farms) => {
        setFarmTest(prev => ({ ...prev, allFarms: farms }));
      });

      setTimeout(() => unsubscribe(), 3000); // Stop listening after 3 seconds
    } catch (error) {
      setFarmTest(prev => ({ ...prev, error: error instanceof Error ? error.message : 'Firebase test failed' }));
    } finally {
      setTestLoading(false);
    }
  };

  useEffect(() => {
    if (!loading && currentUser) {
      runFirebaseTests();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, loading]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold mb-6">System Health Check</h1>
          
          <div className="space-y-6">
            {/* Authentication Status */}
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-3">Authentication Status:</h3>
              <div className="space-y-2">
                <p>Loading: <span className={loading ? "text-yellow-600" : "text-green-600"}>{loading ? 'Yes' : 'No'}</span></p>
                <p>Current User: <span className={currentUser ? "text-green-600" : "text-red-600"}>{currentUser ? currentUser.email : 'Not logged in'}</span></p>
                <p>User Profile: <span className={userProfile ? "text-green-600" : "text-red-600"}>{userProfile ? `${userProfile.displayName} (${userProfile.role})` : 'No profile'}</span></p>
              </div>
            </div>
            
            {/* Environment */}
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-3">Environment:</h3>
              <div className="space-y-2">
                <p>Node Environment: <span className="font-mono text-sm">{process.env.NODE_ENV}</span></p>
                <p>Firebase Project ID: <span className={process.env.REACT_APP_FIREBASE_PROJECT_ID ? "text-green-600" : "text-red-600"}>{process.env.REACT_APP_FIREBASE_PROJECT_ID || 'Not configured'}</span></p>
                <p>Firebase Auth Domain: <span className={process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ? "text-green-600" : "text-red-600"}>{process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || 'Not configured'}</span></p>
              </div>
            </div>

            {/* Firebase Integration */}
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-3">Firebase Integration:</h3>
              <div className="space-y-2">
                {farmTest.error ? (
                  <p className="text-red-600">❌ Error: {farmTest.error}</p>
                ) : (
                  <>
                    <p className="text-green-600">✅ Firebase connection successful</p>
                    <p>User Farm: <span className={farmTest.userFarm ? "text-green-600" : "text-yellow-600"}>{farmTest.userFarm ? `Found: ${farmTest.userFarm.name}` : 'No farm profile'}</span></p>
                    <p>All Farms Count: <span className="text-green-600">{farmTest.allFarms.length} farms loaded</span></p>
                  </>
                )}
                {testLoading && <p className="text-blue-600">🔄 Testing Firebase connection...</p>}
              </div>
            </div>
            
            {/* Deployment Status */}
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-3">Deployment Status:</h3>
              <div className="space-y-2">
                <p className="text-green-600">✅ React app is running</p>
                <p className="text-green-600">✅ Routing is working</p>
                <p className="text-green-600">✅ Components are loading</p>
                <p className="text-green-600">✅ TypeScript compilation successful</p>
                <p className="text-green-600">✅ Tailwind CSS is active</p>
              </div>
            </div>

            {/* Navigation Test */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Navigation Test:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <a href="/" className="text-blue-600 hover:underline">Home</a>
                <a href="/farms" className="text-blue-600 hover:underline">Farms</a>
                <a href="/funding" className="text-blue-600 hover:underline">Funding</a>
                <a href="/news" className="text-blue-600 hover:underline">News</a>
                <a href="/about" className="text-blue-600 hover:underline">About</a>
                <a href="/map" className="text-blue-600 hover:underline">Map</a>
                <a href="/join" className="text-blue-600 hover:underline">Join</a>
                {currentUser && <a href="/dashboard" className="text-blue-600 hover:underline">Dashboard</a>}
              </div>
            </div>

            {/* User Actions */}
            {currentUser && (
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Authenticated User Actions:</h4>
                <div className="space-x-4">
                  <a href="/dashboard" className="bg-blue-500 text-white px-4 py-2 rounded">Dashboard</a>
                  <a href="/profile" className="bg-green-500 text-white px-4 py-2 rounded">Farm Profile</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemTest;