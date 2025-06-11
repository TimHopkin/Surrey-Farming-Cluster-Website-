import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/OptimizedAuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const SimpleProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser, loading } = useAuth();

  // Show loading briefly
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse bg-gray-300 h-8 w-48 rounded mx-auto mb-4"></div>
          <div className="text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default SimpleProtectedRoute;