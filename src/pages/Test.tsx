import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Test: React.FC = () => {
  const { currentUser, userProfile, loading } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold mb-6">System Test Page</h1>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Authentication Status:</h3>
              <p>Loading: {loading ? 'Yes' : 'No'}</p>
              <p>Current User: {currentUser ? currentUser.email : 'Not logged in'}</p>
              <p>User Profile: {userProfile ? `${userProfile.displayName} (${userProfile.role})` : 'No profile'}</p>
            </div>
            
            <div>
              <h3 className="font-semibold">Environment:</h3>
              <p>Node Environment: {process.env.NODE_ENV}</p>
              <p>Firebase Config: {process.env.REACT_APP_FIREBASE_PROJECT_ID ? 'Configured' : 'Not configured'}</p>
            </div>
            
            <div>
              <h3 className="font-semibold">Deployment Status:</h3>
              <p className="text-green-600">✅ React app is running</p>
              <p className="text-green-600">✅ Routing is working</p>
              <p className="text-green-600">✅ Components are loading</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;