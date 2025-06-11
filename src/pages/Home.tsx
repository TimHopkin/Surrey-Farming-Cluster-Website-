import React from 'react';
import { Link } from 'react-router-dom';
import { sampleFarms } from '../data/farms';

const Home: React.FC = () => {
  const featuredFarms = sampleFarms.slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="relative text-white py-20 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=1080&fit=crop&auto=format')"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-secondary font-bold mb-6">
              Surrey Farming Cluster
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Growing Together for a Sustainable Surrey
            </p>
            <div className="space-x-4">
              <Link
                to="/join"
                className="bg-cluster-gold text-cluster-brown px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors inline-block"
              >
                Join the Cluster
              </Link>
              <Link
                to="/farms"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cluster-green transition-colors inline-block"
              >
                Explore Our Farms
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-secondary font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Surrey Farming Cluster brings together farmers, partners, and stakeholders to promote 
              collaboration, sustainability, and innovation across Surrey's diverse agricultural landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cluster-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Connecting farmers to share knowledge, resources, and opportunities across Surrey.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cluster-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Promoting environmentally responsible farming practices for future generations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cluster-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Embracing new technologies and methods to enhance agricultural productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-secondary font-bold text-gray-900 mb-4">
              Featured Farms
            </h2>
            <p className="text-lg text-gray-600">
              Discover some of our member farms and their contributions to Surrey's agricultural community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredFarms.map((farm) => (
              <div key={farm.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={farm.image} 
                  alt={farm.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{farm.name}</h3>
                  <p className="text-gray-600 mb-4">{farm.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-cluster-green text-white px-3 py-1 rounded-full text-sm">
                      {farm.type}
                    </span>
                    <Link 
                      to={`/farms/${farm.id}`}
                      className="text-cluster-blue hover:text-blue-700 font-medium"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/farms"
              className="bg-cluster-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View All Farms
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cluster-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-secondary font-bold text-cluster-brown mb-4">
              Interactive Farm Map
            </h2>
            <p className="text-lg text-cluster-brown mb-8">
              Explore all our member farms across Surrey with our interactive map.
            </p>
            <Link 
              to="/map"
              className="bg-cluster-brown text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
            >
              View Map
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-cluster-blue to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-secondary font-bold text-white mb-4">
              Access Your Digital Platform
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Connect with our comprehensive digital ecosystem: manage your farm, access grants, and collaborate with fellow farmers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-cluster-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-tractor text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Farmer Portal</h3>
                <p className="text-gray-600 mb-6">
                  Access grants, connect with other farmers, manage your farm profile, and join our community.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-check text-cluster-green mr-3"></i>
                    <span>AI-guided grant applications</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-check text-cluster-green mr-3"></i>
                    <span>Farm boundary mapping</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-check text-cluster-green mr-3"></i>
                    <span>Community networking</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-check text-cluster-green mr-3"></i>
                    <span>Land App integration</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Link 
                    to="/login" 
                    className="w-full bg-cluster-green text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors inline-block text-center"
                  >
                    🌾 Farmer Login
                  </Link>
                  <Link 
                    to="/login" 
                    className="w-full border-2 border-cluster-green text-cluster-green px-6 py-3 rounded-md font-medium hover:bg-green-50 transition-colors inline-block text-center"
                  >
                    🚀 Join as Farmer
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-cluster-brown rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-cogs text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Admin Portal</h3>
                <p className="text-gray-600 mb-6">
                  Manage the cluster, review applications, track analytics, and communicate with members.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-check text-cluster-brown mr-3"></i>
                    <span>Member management</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-check text-cluster-brown mr-3"></i>
                    <span>Application review</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-check text-cluster-brown mr-3"></i>
                    <span>Analytics dashboard</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-check text-cluster-brown mr-3"></i>
                    <span>Content management</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Link 
                    to="/login" 
                    className="w-full bg-cluster-brown text-white px-6 py-3 rounded-md font-medium hover:bg-amber-800 transition-colors inline-block text-center"
                  >
                    👨‍💼 Admin Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-secondary font-bold text-gray-900 mb-4">
              Latest News & Updates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">New DEFRA Funding Opportunities</h3>
                <p className="text-gray-600 mb-4">
                  Learn about the latest government funding schemes available to Surrey farmers.
                </p>
                <span className="text-cluster-blue font-medium">Read More →</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Cluster Annual Meeting 2024</h3>
                <p className="text-gray-600 mb-4">
                  Join us for our annual meeting to discuss the year's achievements and future plans.
                </p>
                <span className="text-cluster-blue font-medium">Read More →</span>
              </div>
            </div>
            <div className="mt-8">
              <Link 
                to="/news"
                className="text-cluster-blue hover:text-blue-700 font-medium"
              >
                View All News →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;