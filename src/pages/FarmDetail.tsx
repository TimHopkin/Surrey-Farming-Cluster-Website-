import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { sampleFarms } from '../data/farms';

const FarmDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const farm = sampleFarms.find(f => f.id === id);

  if (!farm) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Farm Not Found</h1>
          <p className="text-gray-600 mb-6">The farm you're looking for doesn't exist.</p>
          <Link 
            to="/farms"
            className="bg-cluster-green text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Back to Farms
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link 
              to="/farms"
              className="text-cluster-blue hover:text-blue-700 font-medium flex items-center"
            >
              ← Back to All Farms
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={farm.image} 
              alt={farm.name}
              className="w-full h-64 md:h-96 object-cover"
            />
            
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h1 className="text-3xl font-secondary font-bold text-gray-900 mb-2">
                    {farm.name}
                  </h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {farm.location.address}
                  </div>
                </div>
                <span className="bg-cluster-green text-white px-4 py-2 rounded-full text-lg font-medium">
                  {farm.type}
                </span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">About This Farm</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {farm.description}
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Products & Services</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                    {farm.products.map((product, index) => (
                      <div 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-center"
                      >
                        {product}
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Farm Practices</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-cluster-green rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">Sustainable Practices</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-cluster-green rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">Local Community Focus</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-cluster-green rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">Environmental Stewardship</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-cluster-green rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">Innovation & Technology</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-cluster-gold p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-cluster-brown mb-4">Contact Information</h3>
                    {farm.contact ? (
                      <div className="space-y-3">
                        {farm.contact.email && (
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-cluster-brown mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a 
                              href={`mailto:${farm.contact.email}`}
                              className="text-cluster-brown hover:underline"
                            >
                              {farm.contact.email}
                            </a>
                          </div>
                        )}
                        {farm.contact.phone && (
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-cluster-brown mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a 
                              href={`tel:${farm.contact.phone}`}
                              className="text-cluster-brown hover:underline"
                            >
                              {farm.contact.phone}
                            </a>
                          </div>
                        )}
                        {farm.contact.website && (
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-cluster-brown mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                            </svg>
                            <a 
                              href={`https://${farm.contact.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-cluster-brown hover:underline"
                            >
                              {farm.contact.website}
                            </a>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="text-cluster-brown">
                        Contact information not publicly available. 
                        <br />
                        <Link to="/join" className="underline">
                          Join the cluster
                        </Link> to access member directory.
                      </p>
                    )}
                  </div>
                  
                  <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Location</h3>
                    <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Interactive map coming soon</p>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm">
                      📍 {farm.location.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-secondary font-bold text-gray-900 mb-4">
                Interested in Learning More?
              </h2>
              <p className="text-gray-600 mb-6">
                Connect with this farm directly or explore other members of the Surrey Farming Cluster.
              </p>
              <div className="space-x-4">
                <Link 
                  to="/farms"
                  className="bg-cluster-green text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  View All Farms
                </Link>
                <Link 
                  to="/map"
                  className="border-2 border-cluster-green text-cluster-green px-6 py-2 rounded-lg hover:bg-cluster-green hover:text-white transition-colors"
                >
                  View on Map
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FarmDetail;