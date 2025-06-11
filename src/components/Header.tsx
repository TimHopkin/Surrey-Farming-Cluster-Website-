import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                className="bg-cluster-green text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
              >
                Join Us
              </Link>
            </div>
          </div>
          
          {/* Desktop Portal Access Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setShowLoginModal(true)}
              className="text-gray-700 hover:text-cluster-green px-3 py-2 text-sm font-medium"
            >
              <i className="fas fa-sign-in-alt mr-2"></i>Login
            </button>
            <button
              onClick={() => setShowSignupModal(true)}
              className="bg-cluster-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              <i className="fas fa-user-plus mr-2"></i>Member Portal
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-cluster-green p-2"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
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
                className="bg-cluster-green text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Us
              </Link>
              
              {/* Mobile Portal Access */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowLoginModal(true);
                  }}
                  className="text-gray-700 hover:text-cluster-green block px-3 py-2 text-base font-medium w-full text-left"
                >
                  <i className="fas fa-sign-in-alt mr-2"></i>Login
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowSignupModal(true);
                  }}
                  className="bg-cluster-blue text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors w-full text-left mt-2"
                >
                  <i className="fas fa-user-plus mr-2"></i>Member Portal
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Choose Portal</h3>
              <button 
                onClick={() => setShowLoginModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <div className="space-y-4">
              <a 
                href="/prototype/farmer/login.html" 
                className="w-full flex items-center justify-center px-6 py-3 bg-cluster-green text-white rounded-md hover:bg-green-700 transition-colors"
              >
                <i className="fas fa-tractor mr-3"></i>
                Farmer Portal Login
              </a>
              <a 
                href="/prototype/admin/login.html" 
                className="w-full flex items-center justify-center px-6 py-3 bg-cluster-brown text-white rounded-md hover:bg-amber-800 transition-colors"
              >
                <i className="fas fa-shield-alt mr-3"></i>
                Admin Portal Login
              </a>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                New to Surrey Farming Cluster?{' '}
                <button 
                  onClick={() => {
                    setShowLoginModal(false);
                    setShowSignupModal(true);
                  }}
                  className="text-cluster-green hover:text-green-700 font-medium"
                >
                  Join here
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Join Surrey Farming Cluster</h3>
              <button 
                onClick={() => setShowSignupModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <div className="text-center mb-6">
              <p className="text-gray-600">Choose how you'd like to join our community</p>
            </div>
            <div className="space-y-4">
              <a 
                href="/prototype/farmer/register.html" 
                className="w-full flex items-center justify-center px-6 py-3 bg-cluster-green text-white rounded-md hover:bg-green-700 transition-colors"
              >
                <i className="fas fa-tractor mr-3"></i>
                Join as Farmer
              </a>
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already a member?{' '}
                  <button 
                    onClick={() => {
                      setShowSignupModal(false);
                      setShowLoginModal(true);
                    }}
                    className="text-cluster-green hover:text-green-700 font-medium"
                  >
                    Login here
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;