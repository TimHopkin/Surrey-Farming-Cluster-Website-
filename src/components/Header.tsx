import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 bg-cluster-green rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">SFC</span>
              </div>
              <span className="font-secondary font-semibold text-xl text-cluster-green">
                Surrey Farming Cluster
              </span>
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
        </div>
      </nav>
    </header>
  );
};

export default Header;