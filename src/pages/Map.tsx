import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FarmMap from '../components/FarmMap';
import { sampleFarms } from '../data/farms';

const Map: React.FC = () => {
  const [selectedFarmId, setSelectedFarmId] = useState<string | undefined>();
  const [filterType, setFilterType] = useState<string>('all');

  const farmTypes = ['all', ...Array.from(new Set(sampleFarms.map(farm => farm.type)))];
  const filteredFarms = filterType === 'all' 
    ? sampleFarms 
    : sampleFarms.filter(farm => farm.type === filterType);

  const handleFarmSelect = (farmId: string) => {
    setSelectedFarmId(farmId);
  };

  const selectedFarm = selectedFarmId ? sampleFarms.find(f => f.id === selectedFarmId) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-secondary font-bold text-gray-900 mb-4">
              Interactive Farm Map
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore all member farms across Surrey. Click on the map markers to learn more about each farm.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center space-x-4">
                <label htmlFor="map-filter" className="text-sm font-medium text-gray-700">
                  Filter by Type:
                </label>
                <select
                  id="map-filter"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cluster-green focus:border-transparent"
                >
                  {farmTypes.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-sm text-gray-600">
                Showing {filteredFarms.length} farms
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-4">
                <FarmMap 
                  selectedFarmId={selectedFarmId}
                  onFarmSelect={handleFarmSelect}
                />
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Farm List</h2>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {filteredFarms.map((farm) => (
                    <div
                      key={farm.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        selectedFarmId === farm.id
                          ? 'border-cluster-green bg-green-50'
                          : 'border-gray-200 hover:border-cluster-green hover:bg-gray-50'
                      }`}
                      onClick={() => handleFarmSelect(farm.id)}
                    >
                      <h3 className="font-semibold text-sm text-gray-900 mb-1">
                        {farm.name}
                      </h3>
                      <p className="text-xs text-gray-600 mb-2">
                        {farm.location.address}
                      </p>
                      <span className="bg-cluster-green text-white px-2 py-1 rounded text-xs">
                        {farm.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedFarm && (
                <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Selected Farm</h2>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-cluster-green">{selectedFarm.name}</h3>
                    <p className="text-sm text-gray-600">{selectedFarm.description}</p>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Products:</p>
                      <div className="flex flex-wrap gap-1">
                        {selectedFarm.products.slice(0, 3).map((product, index) => (
                          <span 
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {product}
                          </span>
                        ))}
                        {selectedFarm.products.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{selectedFarm.products.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    <Link
                      to={`/farms/${selectedFarm.id}`}
                      className="block w-full bg-cluster-green text-white text-center py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                    >
                      View Full Profile
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-cluster-gold p-8 rounded-lg">
              <h2 className="text-2xl font-secondary font-bold text-cluster-brown mb-4">
                Can't Find Your Farm?
              </h2>
              <p className="text-cluster-brown mb-6">
                If you're a Surrey farmer and would like to be featured on our map, 
                we'd love to hear from you.
              </p>
              <div className="space-x-4">
                <Link 
                  to="/join"
                  className="bg-cluster-brown text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
                >
                  Join the Cluster
                </Link>
                <Link 
                  to="/farms"
                  className="border-2 border-cluster-brown text-cluster-brown px-6 py-3 rounded-lg font-semibold hover:bg-cluster-brown hover:text-white transition-colors"
                >
                  Browse All Farms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map;