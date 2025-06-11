import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { sampleFarms } from '../data/farms';
import { Farm } from '../types/farm';
import { getAllFarms } from '../services/farmService';

const Farms: React.FC = () => {
  const [allFarms, setAllFarms] = useState<Farm[]>([]);
  const [filteredFarms, setFilteredFarms] = useState<Farm[]>([]);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Combine sample farms with real Firebase farms
    const unsubscribe = getAllFarms((firebaseFarms) => {
      const combinedFarms = [...sampleFarms, ...firebaseFarms];
      setAllFarms(combinedFarms);
      setFilteredFarms(combinedFarms);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const farmTypes = ['all', ...Array.from(new Set(allFarms.map(farm => farm.type)))];

  const handleFilterChange = (type: string) => {
    setSelectedType(type);
    filterFarms(type, searchTerm);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    filterFarms(selectedType, term);
  };

  const filterFarms = (type: string, search: string) => {
    let filtered = allFarms;
    
    if (type !== 'all') {
      filtered = filtered.filter(farm => farm.type === type);
    }
    
    if (search) {
      filtered = filtered.filter(farm => 
        farm.name.toLowerCase().includes(search.toLowerCase()) ||
        farm.description.toLowerCase().includes(search.toLowerCase()) ||
        farm.products.some(product => product.toLowerCase().includes(search.toLowerCase()))
      );
    }
    
    setFilteredFarms(filtered);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading farms...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-secondary font-bold text-gray-900 mb-6">
              Our Member Farms
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the diverse range of farms that make up the Surrey Farming Cluster, 
              each contributing their unique expertise and products to our community.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Search Farms
                </label>
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Search by name, description, or products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cluster-green focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="filter" className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Type
                </label>
                <select
                  id="filter"
                  value={selectedType}
                  onChange={(e) => handleFilterChange(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cluster-green focus:border-transparent"
                >
                  {farmTypes.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="mb-4 text-gray-600">
            Showing {filteredFarms.length} of {allFarms.length} farms
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFarms.map((farm) => (
              <div key={farm.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={farm.image} 
                  alt={farm.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{farm.name}</h3>
                    <span className="bg-cluster-green text-white px-3 py-1 rounded-full text-sm">
                      {farm.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{farm.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Products & Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {farm.products.slice(0, 3).map((product, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                        >
                          {product}
                        </span>
                      ))}
                      {farm.products.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          +{farm.products.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">📍 {farm.location.address}</span>
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
          
          {filteredFarms.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No farms found</h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or filter options.
              </p>
            </div>
          )}
          
          <div className="text-center mt-12">
            <div className="bg-cluster-gold p-8 rounded-lg">
              <h2 className="text-2xl font-secondary font-bold text-cluster-brown mb-4">
                Join Our Farming Community
              </h2>
              <p className="text-cluster-brown mb-6">
                Are you a Surrey farmer interested in joining our cluster? 
                We'd love to hear from you and learn about your farm.
              </p>
              <Link 
                to="/join"
                className="bg-cluster-brown text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
              >
                Apply to Join
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Farms;