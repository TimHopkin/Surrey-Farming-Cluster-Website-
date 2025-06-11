import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cluster-brown text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-cluster-green rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">SFC</span>
              </div>
              <span className="font-secondary font-semibold text-xl">
                Surrey Farming Cluster
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Growing Together for a Sustainable Surrey
            </p>
            <p className="text-gray-300 text-sm">
              Promoting collaboration, sustainability, and innovation across Surrey's farming community.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/farms" className="text-gray-300 hover:text-white transition-colors">
                  Farm Profiles
                </Link>
              </li>
              <li>
                <Link to="/funding" className="text-gray-300 hover:text-white transition-colors">
                  Funding Opportunities
                </Link>
              </li>
              <li>
                <Link to="/map" className="text-gray-300 hover:text-white transition-colors">
                  Interactive Map
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/join" className="text-gray-300 hover:text-white transition-colors">
                  Join the Cluster
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <a href="mailto:info@surreyfarmingcluster.org" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/brand/DEMO.html" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <i className="fas fa-palette mr-2"></i>
                  Brand Components
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 Surrey Farming Cluster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;