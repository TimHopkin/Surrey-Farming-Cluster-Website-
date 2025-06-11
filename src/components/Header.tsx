import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Logo from './Logo';
import LoginModal from './auth/LoginModal';
import SignupModal from './auth/SignupModal';

const Header: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentUser, userProfile, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out');
    }
  };

  const handleSwitchToSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo className="h-14" />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-cluster-green px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-cluster-green px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link 
                to="/farms" 
                className="text-gray-700 hover:text-cluster-green px-3 py-2 rounded-md text-sm font-medium"
              >
                Farms
              </Link>
              <Link 
                to="/funding" 
                className="text-gray-700 hover:text-cluster-green px-3 py-2 rounded-md text-sm font-medium"
              >
                Funding
              </Link>
              <Link 
                to="/map" 
                className="text-gray-700 hover:text-cluster-green px-3 py-2 rounded-md text-sm font-medium"
              >
                Map
              </Link>
              <Link 
                to="/news" 
                className="text-gray-700 hover:text-cluster-green px-3 py-2 rounded-md text-sm font-medium"
              >
                News
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-cluster-green px-3 py-2 rounded-md text-sm font-medium"
              >
                Blog
              </Link>
              <Link 
                to="/join" 
                className="text-gray-700 hover:text-cluster-green px-3 py-2 rounded-md text-sm font-medium"
              >
                Join
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">
                  Welcome, {userProfile?.displayName || currentUser.displayName}
                  {userProfile?.role === 'admin' && (
                    <span className="ml-2 bg-cluster-blue text-white px-2 py-1 rounded text-xs">
                      Admin
                    </span>
                  )}
                </span>
                <Link
                  to="/dashboard"
                  className="bg-cluster-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="text-cluster-blue hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setShowSignupModal(true)}
                  className="bg-cluster-green text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm"
                >
                  Join Us
                </button>
              </div>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-cluster-green focus:outline-none focus:text-cluster-green"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-cluster-green block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-cluster-green block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/farms" 
                className="text-gray-700 hover:text-cluster-green block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Farms
              </Link>
              <Link 
                to="/funding" 
                className="text-gray-700 hover:text-cluster-green block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Funding
              </Link>
              <Link 
                to="/map" 
                className="text-gray-700 hover:text-cluster-green block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Map
              </Link>
              <Link 
                to="/news" 
                className="text-gray-700 hover:text-cluster-green block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                News
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-cluster-green block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/join" 
                className="text-gray-700 hover:text-cluster-green block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join
              </Link>
              
              {currentUser ? (
                <div className="border-t pt-4 mt-4">
                  <div className="px-3 py-2 text-gray-700">
                    Welcome, {userProfile?.displayName || currentUser.displayName}
                    {userProfile?.role === 'admin' && (
                      <span className="ml-2 bg-cluster-blue text-white px-2 py-1 rounded text-xs">
                        Admin
                      </span>
                    )}
                  </div>
                  <Link
                    to="/dashboard"
                    className="w-full text-left bg-cluster-blue text-white px-3 py-2 rounded-md hover:bg-blue-700 text-sm block mt-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left bg-gray-500 text-white px-3 py-2 rounded-md hover:bg-gray-600 text-sm mt-2"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="border-t pt-4 mt-4 space-y-2">
                  <button
                    onClick={() => {
                      setShowLoginModal(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left text-cluster-blue hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      setShowSignupModal(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left bg-cluster-green text-white px-3 py-2 rounded-md hover:bg-green-700 text-sm"
                  >
                    Join Us
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={handleSwitchToSignup}
      />
      
      <SignupModal 
        isOpen={showSignupModal} 
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </header>
  );
};

export default Header;