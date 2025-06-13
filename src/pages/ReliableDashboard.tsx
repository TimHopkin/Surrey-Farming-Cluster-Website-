import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/HybridAuthContext';

// Default farmer profile structure matching MVP
const defaultFarmProfile = {
  id: 'demo-farm',
  farmName: 'Green Acres Farm',
  farmSize: 45,
  location: 'Guildford, Surrey GU1 1AA',
  description: 'Mixed arable and livestock farm focused on sustainable practices and biodiversity enhancement. Specializing in wheat, barley, and sheep farming with a commitment to environmental stewardship.',
  farmingActivities: {
    arable: true,
    livestock: true,
    dairy: false,
    organic: true
  },
  landAppConnected: false,
  rpaConnected: false,
  image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop&auto=format'
};

const ReliableDashboard: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [farmProfile, setFarmProfile] = useState(defaultFarmProfile);

  // Load farm profile from localStorage on mount
  useEffect(() => {
    if (currentUser) {
      const savedProfile = localStorage.getItem(`farmProfile_${currentUser.uid}`);
      if (savedProfile) {
        setFarmProfile(JSON.parse(savedProfile));
      }
    }
  }, [currentUser]);

  // Save farm profile to localStorage
  const saveFarmProfile = (newProfile: typeof farmProfile) => {
    if (currentUser) {
      localStorage.setItem(`farmProfile_${currentUser.uid}`, JSON.stringify(newProfile));
      setFarmProfile(newProfile);
    }
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-600 mb-6">Please log in to access your dashboard</p>
          <Link to="/login" className="bg-cluster-green text-white px-6 py-3 rounded-lg hover:bg-green-700 font-medium">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  // If user is admin, redirect to admin dashboard
  if (currentUser.role === 'admin') {
    return <Navigate to="/admin" replace />;
  }

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const connectLandApp = () => {
    const updatedProfile = { ...farmProfile, landAppConnected: true };
    saveFarmProfile(updatedProfile);
    alert('🔗 Land App Connected!\n\n✅ Farm boundaries synced\n✅ Field plans updated\n✅ Crop data imported\n\nYour farm data is now automatically synchronized.');
  };

  const connectRPA = () => {
    const updatedProfile = { ...farmProfile, rpaConnected: true };
    saveFarmProfile(updatedProfile);
    alert('🔗 RPA Database Connected!\n\n✅ Official farm boundaries imported\n✅ Scheme data synchronized\n✅ Environmental designations loaded');
  };

  const startGrantApplication = (grantType?: string) => {
    alert(`🤖 AI Grant Assistant\n\nStarting application for: ${grantType || 'Available Grants'}\n\nThe AI assistant will guide you through:\n• Eligibility check\n• Required documents\n• Application form completion\n• Submission review\n\nThis feature would open an interactive chat interface.`);
  };

  const handleUpdateProfile = (updates: Partial<typeof farmProfile>) => {
    saveFarmProfile({ ...farmProfile, ...updates });
  };

  const renderSidebar = () => (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4">
        <nav className="space-y-2">
          {[
            { id: 'dashboard', icon: 'fas fa-home', label: 'Dashboard' },
            { id: 'profile', icon: 'fas fa-user', label: 'Farm Profile' },
            { id: 'grants', icon: 'fas fa-money-bill-wave', label: 'Grants & Funding' },
            { id: 'community', icon: 'fas fa-users', label: 'Community' },
            { id: 'events', icon: 'fas fa-calendar', label: 'Events' },
            { id: 'support', icon: 'fas fa-life-ring', label: 'Support' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                activeSection === item.id
                  ? 'text-cluster-green bg-green-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <i className={`${item.icon} mr-3`}></i>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-6">

      {/* Land App Integration Banner */}
      {farmProfile.landAppConnected && (
        <div className="bg-gradient-to-r from-cluster-blue to-blue-600 text-white p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <i className="fas fa-map-marked-alt text-2xl mr-4"></i>
              <div>
                <h3 className="text-lg font-semibold">Land App Connected</h3>
                <p className="text-blue-100">Your farm data is automatically synced and up to date</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-100">Last sync: 2 hours ago</p>
              <button 
                onClick={() => alert('🔗 Land App Data:\n\n✅ Farm Boundaries: Synced\n✅ Field Plans: Current\n✅ Crop Data: Updated\n✅ Sustainability Metrics: Linked')}
                className="mt-2 bg-white text-cluster-blue px-4 py-2 rounded-md hover:bg-gray-100"
              >
                View Synced Data
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-cluster-green bg-opacity-10">
              <i className="fas fa-seedling text-cluster-green text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Farm Size</p>
              <p className="text-2xl font-bold text-gray-900">{farmProfile.farmSize} ha</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100">
              <i className="fas fa-pound-sign text-yellow-600 text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Grants Applied</p>
              <p className="text-2xl font-bold text-gray-900">£23k</p>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-500 text-sm font-medium">2 pending applications</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-cluster-blue bg-opacity-10">
              <i className="fas fa-users text-cluster-blue text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Connections</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-blue-500 text-sm font-medium">3 new messages</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100">
              <i className="fas fa-calendar-check text-green-600 text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Events Booked</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-500 text-sm font-medium">Next: Sustainability Workshop</span>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recommended Grants */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Grants for You</h3>
            <div className="space-y-4">
              <div className="border border-green-200 bg-green-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">FiPL Biodiversity Enhancement</h4>
                    <p className="text-sm text-gray-600">Up to £25,000 • Deadline: March 30, 2025</p>
                  </div>
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">98% Match</span>
                </div>
                <p className="text-sm text-gray-700 mb-3">Perfect for your arable farm to establish wildflower margins and enhance biodiversity.</p>
                <button 
                  onClick={() => startGrantApplication('FiPL Biodiversity Enhancement')}
                  className="bg-cluster-green text-white px-4 py-2 rounded-md text-sm hover:bg-green-700"
                >
                  <i className="fas fa-robot mr-2"></i>Apply with AI Assistant
                </button>
              </div>
              
              <div className="border border-blue-200 bg-blue-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">Countryside Stewardship Mid Tier</h4>
                    <p className="text-sm text-gray-600">Variable funding • Deadline: April 15, 2025</p>
                  </div>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">85% Match</span>
                </div>
                <p className="text-sm text-gray-700 mb-3">Environmental land management scheme for your farm size and location.</p>
                <button 
                  onClick={() => setActiveSection('grants')}
                  className="bg-cluster-blue text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button 
                onClick={() => setActiveSection('profile')}
                className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded border"
              >
                <i className="fas fa-edit text-cluster-green mr-3"></i>
                <span className="text-gray-900">Update Farm Profile</span>
              </button>
              <button 
                onClick={() => startGrantApplication()}
                className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded border"
              >
                <i className="fas fa-money-bill-wave text-cluster-blue mr-3"></i>
                <span className="text-gray-900">Apply for Grants</span>
              </button>
              <button 
                onClick={() => setActiveSection('community')}
                className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded border"
              >
                <i className="fas fa-comments text-yellow-600 mr-3"></i>
                <span className="text-gray-900">Message Farmers</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 font-secondary">Farm Profile</h1>
        <p className="text-gray-600">Manage your farm details, boundaries, and connect external data sources.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Basic Information */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Farm Name</label>
                  <input 
                    type="text" 
                    value={farmProfile.farmName}
                    onChange={(e) => handleUpdateProfile({ farmName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cluster-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Farm Size (hectares)</label>
                  <input 
                    type="number" 
                    value={farmProfile.farmSize}
                    onChange={(e) => handleUpdateProfile({ farmSize: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cluster-green"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input 
                  type="text" 
                  value={farmProfile.location}
                  onChange={(e) => handleUpdateProfile({ location: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cluster-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Farm Description</label>
                <textarea 
                  rows={4} 
                  value={farmProfile.description}
                  onChange={(e) => handleUpdateProfile({ description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cluster-green"
                />
              </div>
            </div>
          </div>

          {/* Farm Boundaries & Data */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Farm Boundaries & Data</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <i className="fas fa-map text-4xl text-gray-400 mb-4"></i>
              <h4 className="text-lg font-medium text-gray-900 mb-2">Farm Boundary Map</h4>
              <p className="text-gray-600 mb-4">Upload your farm boundaries or connect via SBI to import from RPA database</p>
              <div className="space-y-2">
                <button 
                  onClick={() => alert('📁 Upload Farm Boundaries\n\nSupported formats:\n• KML files\n• GPX files\n• Shapefile (.shp)\n• GeoJSON')}
                  className="bg-cluster-green text-white px-4 py-2 rounded-md hover:bg-green-700 mr-2"
                >
                  Upload Boundaries
                </button>
                <button 
                  onClick={connectRPA}
                  className="bg-cluster-blue text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Connect via SBI
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* External Integrations */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">External Integrations</h3>
            <div className="space-y-4">
              {/* Land App Connection */}
              <div className={`p-4 border-2 rounded-lg ${
                farmProfile.landAppConnected 
                  ? 'border-cluster-blue bg-blue-50' 
                  : 'border-gray-300'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <i className="fas fa-map-marked-alt text-cluster-blue text-xl mr-3"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">Land App</h4>
                      <p className="text-sm text-gray-600">
                        {farmProfile.landAppConnected ? 'Connected' : 'Not connected'}
                      </p>
                    </div>
                  </div>
                  {farmProfile.landAppConnected && (
                    <span className="text-green-500">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  )}
                </div>
                {farmProfile.landAppConnected ? (
                  <div className="text-sm text-gray-700 space-y-1">
                    <div className="flex justify-between">
                      <span>Farm Boundaries:</span>
                      <span className="text-green-600">✓ Synced</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Field Plans:</span>
                      <span className="text-green-600">✓ Synced</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Crop Data:</span>
                      <span className="text-green-600">✓ Synced</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-gray-600 mb-3">Connect to sync your farm data automatically.</p>
                )}
                <button 
                  onClick={farmProfile.landAppConnected ? () => alert('🔧 Manage Land App Connection\n\nConnection Status: Active\nLast Sync: 2 hours ago\n\nOptions:\n• Sync Now\n• Manage Data Permissions\n• View Sync History') : connectLandApp}
                  className="w-full mt-3 bg-cluster-blue text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
                >
                  {farmProfile.landAppConnected ? 'Manage Connection' : 'Connect Land App'}
                </button>
              </div>

              {/* RPA Database */}
              <div className={`p-4 border rounded-lg ${
                farmProfile.rpaConnected 
                  ? 'border-green-300 bg-green-50' 
                  : 'border-gray-300'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <i className="fas fa-database text-gray-400 text-xl mr-3"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">RPA Database</h4>
                      <p className="text-sm text-gray-600">
                        {farmProfile.rpaConnected ? 'Connected' : 'Not connected'}
                      </p>
                    </div>
                  </div>
                  {farmProfile.rpaConnected && (
                    <span className="text-green-500">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  {farmProfile.rpaConnected 
                    ? 'Official farm boundaries and scheme data synchronized.'
                    : 'Connect your SBI to import official farm boundaries and scheme data.'
                  }
                </p>
                <button 
                  onClick={connectRPA}
                  className="w-full bg-gray-600 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700"
                  disabled={farmProfile.rpaConnected}
                >
                  {farmProfile.rpaConnected ? 'Connected' : 'Connect SBI'}
                </button>
              </div>
            </div>
          </div>

          {/* Farming Activities */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Farming Activities</h3>
            <div className="space-y-3">
              {Object.entries(farmProfile.farmingActivities).map(([key, value]) => (
                <div key={key} className="flex items-center">
                  <input 
                    type="checkbox" 
                    checked={value}
                    onChange={(e) => handleUpdateProfile({
                      farmingActivities: {
                        ...farmProfile.farmingActivities,
                        [key]: e.target.checked
                      }
                    })}
                    className="rounded border-gray-300 text-cluster-green focus:ring-cluster-green"
                  />
                  <span className="ml-2 text-sm capitalize">{key === 'organic' ? 'Organic Practices' : key}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <button 
                onClick={() => alert('✅ Farm profile saved successfully!')}
                className="w-full bg-cluster-green text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGrants = () => (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 font-secondary">Grants & Funding</h1>
        <p className="text-gray-600">Discover funding opportunities tailored to your farm and apply with AI assistance.</p>
      </div>
      
      {/* AI Grant Assistant */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              <i className="fas fa-robot mr-2"></i>AI Grant Assistant
            </h3>
            <p className="text-purple-100">Get personalized funding recommendations and application guidance</p>
          </div>
          <button 
            onClick={() => alert('🤖 AI Grant Assistant\n\nHello! I can help you:\n\n• Find suitable grants for your farm\n• Check eligibility requirements\n• Complete applications step-by-step\n• Review submissions before sending')}
            className="bg-white text-purple-600 px-6 py-2 rounded-md hover:bg-gray-100 font-medium"
          >
            Start Chat
          </button>
        </div>
      </div>

      {/* Available Grants */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Opportunities</h3>
        <div className="space-y-6">
          <div className="border border-green-200 bg-green-50 p-6 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-900">FiPL Biodiversity Enhancement</h4>
                <p className="text-gray-600">Farming Investment in Land and Productivity</p>
              </div>
              <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full font-medium">98% Match</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
              <div><strong>Funding:</strong> Up to £25,000</div>
              <div><strong>Deadline:</strong> March 30, 2025</div>
              <div><strong>Match Rate:</strong> 40%</div>
              <div><strong>Duration:</strong> 3 years</div>
            </div>
            <p className="text-gray-700 mb-4">
              Support for establishing wildflower margins, hedgerow planting, and biodiversity enhancements. 
              Perfect for arable farms looking to improve environmental outcomes while maintaining productivity.
            </p>
            <div className="flex space-x-3">
              <button 
                onClick={() => startGrantApplication('FiPL Biodiversity Enhancement')}
                className="bg-cluster-green text-white px-6 py-2 rounded-md hover:bg-green-700"
              >
                <i className="fas fa-robot mr-2"></i>Apply with AI Assistant
              </button>
              <button 
                onClick={() => alert('📋 Grant Details: FiPL Biodiversity Enhancement\n\nFull eligibility criteria, application requirements, and success stories would be displayed here.')}
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50"
              >
                View Details
              </button>
            </div>
          </div>

          <div className="border border-blue-200 bg-blue-50 p-6 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Countryside Stewardship Mid Tier</h4>
                <p className="text-gray-600">Environmental Land Management</p>
              </div>
              <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full font-medium">85% Match</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
              <div><strong>Funding:</strong> Variable</div>
              <div><strong>Deadline:</strong> April 15, 2025</div>
              <div><strong>Agreement:</strong> 5 years</div>
              <div><strong>Payment:</strong> Annual</div>
            </div>
            <p className="text-gray-700 mb-4">
              Environmental land management scheme offering payments for environmental management on farmland. 
              Includes options for wildlife habitat creation, water quality improvement, and heritage conservation.
            </p>
            <div className="flex space-x-3">
              <button 
                onClick={() => startGrantApplication('Countryside Stewardship Mid Tier')}
                className="bg-cluster-blue text-white px-6 py-2 rounded-md hover:bg-blue-700"
              >
                <i className="fas fa-robot mr-2"></i>Apply with AI Assistant
              </button>
              <button 
                onClick={() => alert('📋 Grant Details: Countryside Stewardship\n\nEnvironmental land management details and requirements would be shown here.')}
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCommunity = () => (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 font-secondary">Farmer Community</h1>
        <p className="text-gray-600">Connect, share knowledge, and collaborate with fellow farmers in Surrey.</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Discussion Groups</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'Regenerative Agriculture', members: 23, lastPost: '2 hours ago', color: 'green' },
            { name: 'Livestock Management', members: 18, lastPost: '4 hours ago', color: 'blue' },
            { name: 'Organic Practices', members: 15, lastPost: '1 day ago', color: 'yellow' },
            { name: 'Farm Technology', members: 12, lastPost: '2 days ago', color: 'purple' }
          ].map((group, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-cluster-green cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{group.name}</h4>
                <span className={`text-xs bg-${group.color}-100 text-${group.color}-800 px-2 py-1 rounded-full`}>
                  {group.members} members
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Share experiences and knowledge in {group.name.toLowerCase()}.</p>
              <p className="text-xs text-gray-500">Last post: {group.lastPost}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 font-secondary">Events & Learning</h1>
        <p className="text-gray-600">Join workshops, seminars, and networking events to grow your knowledge and connections.</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
        <div className="space-y-6">
          <div className="border border-green-200 bg-green-50 p-6 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Sustainability Workshop</h4>
                <p className="text-gray-600">Practical approaches to sustainable farming</p>
              </div>
              <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full font-medium">Available</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
              <div><strong>Date:</strong> March 15, 2025</div>
              <div><strong>Time:</strong> 10:00 AM - 4:00 PM</div>
              <div><strong>Location:</strong> Guildford Farm Centre</div>
              <div><strong>Spaces:</strong> 15 left</div>
            </div>
            <p className="text-gray-700 mb-4">
              Hands-on workshop covering regenerative agriculture, biodiversity enhancement, and carbon sequestration. 
              Includes field demonstrations and networking lunch.
            </p>
            <button 
              onClick={() => alert('✅ Event Registration\n\nSuccessfully registered for Sustainability Workshop!\n\nYou will receive:\n• Calendar invitation\n• Event details email\n• Reminder notifications')}
              className="bg-cluster-green text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              <i className="fas fa-user-plus mr-2"></i>Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSupport = () => (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 font-secondary">Support Centre</h1>
        <p className="text-gray-600">Get help from our team, access resources, and connect with experts.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Support Team</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cluster-green">
                  <option>General Enquiry</option>
                  <option>Grant Application Help</option>
                  <option>Technical Support</option>
                  <option>Membership Question</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={6} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cluster-green" 
                  placeholder="Describe your question or issue..."
                />
              </div>
              <button 
                type="button"
                onClick={() => alert('✅ Support ticket submitted!\n\nWe\'ll get back to you within 24-48 hours.')}
                className="bg-cluster-green text-white px-6 py-2 rounded-md hover:bg-green-700"
              >
                <i className="fas fa-paper-plane mr-2"></i>Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Help</h3>
            <div className="space-y-3">
              {[
                { icon: 'fas fa-play-circle', title: 'Getting Started Guide', color: 'cluster-green' },
                { icon: 'fas fa-file-alt', title: 'Grant Application Help', color: 'cluster-blue' },
                { icon: 'fas fa-user-cog', title: 'Profile Setup', color: 'yellow-600' },
                { icon: 'fas fa-users', title: 'Community Features', color: 'purple-600' }
              ].map((item, index) => (
                <button 
                  key={index}
                  onClick={() => alert(`📖 Opening help article: ${item.title}\n\nStep-by-step guidance and tutorials would be displayed here.`)}
                  className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded border"
                >
                  <i className={`${item.icon} text-${item.color} mr-3`}></i>
                  <span className="text-gray-900">{item.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="font-medium text-gray-900">Phone Support</p>
                <p className="text-cluster-green font-medium">01483 123 456</p>
                <p className="text-gray-600">Mon-Fri 9:00-17:00</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-900">Email Support</p>
                <p className="text-cluster-green font-medium">support@surreyfarmingcluster.co.uk</p>
                <p className="text-gray-600">24-48 hour response</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'profile': return renderProfile();
      case 'grants': return renderGrants();
      case 'community': return renderCommunity();
      case 'events': return renderEvents();
      case 'support': return renderSupport();
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Left: Farmer Welcome */}
            <div className="flex-shrink-0">
              <span className="text-gray-700">Welcome, John Davies<span className="ml-2 bg-cluster-green text-white px-2 py-1 rounded text-xs">Farmer</span></span>
            </div>
            
            {/* Center: Portal Badge */}
            <div className="hidden md:flex items-center">
              <span className="px-4 py-2 text-sm bg-cluster-green text-white rounded-full font-medium shadow-sm">
                <i className="fas fa-user-circle mr-2"></i>Farmer Portal
              </span>
            </div>
            
            {/* Right: User Area */}
            <div className="flex items-center space-x-4">
              {/* Status Badges */}
              {farmProfile.landAppConnected && (
                <div className="hidden sm:flex items-center bg-cluster-blue bg-opacity-10 text-cluster-blue px-3 py-1 rounded-full text-sm font-medium">
                  <i className="fas fa-link mr-1"></i>Connected
                </div>
              )}
              
              {/* Notifications */}
              <button className="relative p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all">
                <i className="fas fa-bell text-xl"></i>
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">2</span>
              </button>
              
              {/* User Profile Area */}
              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                <div className="h-12 w-12 rounded-full bg-cluster-green flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {currentUser.displayName?.split(' ').map(n => n[0]).join('') || 'F'}
                </div>
                <button 
                  onClick={handleLogout} 
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                  title="Logout"
                >
                  <i className="fas fa-sign-out-alt text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex bg-gray-100">
        {renderSidebar()}
        
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReliableDashboard;