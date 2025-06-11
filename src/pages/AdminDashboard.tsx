import React, { useState } from 'react';
import { useAuth } from '../contexts/HybridAuthContext';
import Logo from '../components/Logo';

const AdminDashboard: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const [activeSection, setActiveSection] = useState('overview');

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const renderSidebar = () => (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4">
        <nav className="space-y-2">
          {[
            { id: 'overview', icon: 'fas fa-tachometer-alt', label: 'Overview' },
            { id: 'analytics', icon: 'fas fa-chart-line', label: 'Analytics & KPIs' },
            { id: 'content', icon: 'fas fa-edit', label: 'Content Management' },
            { id: 'crm', icon: 'fas fa-users', label: 'Farmer CRM' },
            { id: 'applications', icon: 'fas fa-file-alt', label: 'Applications' },
            { id: 'messaging', icon: 'fas fa-envelope', label: 'Messaging' },
            { id: 'settings', icon: 'fas fa-cog', label: 'Settings' }
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

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="mb-6">
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-cluster-green bg-opacity-10">
              <i className="fas fa-users text-cluster-green text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Members</p>
              <p className="text-2xl font-bold text-gray-900">47</p>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-500 text-sm font-medium">+12% from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-cluster-blue bg-opacity-10">
              <i className="fas fa-file-alt text-cluster-blue text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Applications</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-orange-500 text-sm font-medium">3 urgent</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100">
              <i className="fas fa-pound-sign text-yellow-600 text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Grants Secured</p>
              <p className="text-2xl font-bold text-gray-900">£127k</p>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-500 text-sm font-medium">+£23k this month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100">
              <i className="fas fa-calendar text-green-600 text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Upcoming Events</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-blue-500 text-sm font-medium">Next: Sustainability Workshop</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Applications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div>
                <p className="font-medium text-gray-900">Greenfield Farm Ltd</p>
                <p className="text-sm text-gray-600">FiPL Funding Application</p>
              </div>
              <span className="px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">Pending</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div>
                <p className="font-medium text-gray-900">Meadowbrook Organics</p>
                <p className="text-sm text-gray-600">Membership Application</p>
              </div>
              <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Approved</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div>
                <p className="font-medium text-gray-900">Heritage Crops Co.</p>
                <p className="text-sm text-gray-600">FiPL Funding Application</p>
              </div>
              <span className="px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">Under Review</span>
            </div>
          </div>
          <div className="mt-4">
            <button 
              onClick={() => setActiveSection('applications')}
              className="text-cluster-green hover:text-green-700 text-sm font-medium"
            >
              View all applications →
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 gap-3">
            <button 
              onClick={() => setActiveSection('content')}
              className="flex items-center p-3 bg-cluster-green bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-colors"
            >
              <i className="fas fa-plus-circle text-cluster-green mr-3"></i>
              <span className="text-cluster-green font-medium">Create New Blog Post</span>
            </button>
            <button 
              onClick={() => setActiveSection('applications')}
              className="flex items-center p-3 bg-cluster-blue bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-colors"
            >
              <i className="fas fa-eye text-cluster-blue mr-3"></i>
              <span className="text-cluster-blue font-medium">Review Applications</span>
            </button>
            <button 
              onClick={() => setActiveSection('messaging')}
              className="flex items-center p-3 bg-yellow-100 hover:bg-yellow-200 rounded-lg transition-colors"
            >
              <i className="fas fa-envelope text-yellow-600 mr-3"></i>
              <span className="text-yellow-600 font-medium">Send Newsletter</span>
            </button>
            <button 
              onClick={() => setActiveSection('crm')}
              className="flex items-center p-3 bg-purple-100 hover:bg-purple-200 rounded-lg transition-colors"
            >
              <i className="fas fa-user-plus text-purple-600 mr-3"></i>
              <span className="text-purple-600 font-medium">Add New Member</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCRM = () => (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 font-secondary">Farmer CRM</h1>
        <p className="text-gray-600">Manage member relationships and communications.</p>
      </div>
      
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <input 
                type="text" 
                placeholder="Search members..." 
                className="border border-gray-300 rounded-md px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-cluster-green"
              />
              <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cluster-green">
                <option>All Status</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Inactive</option>
              </select>
            </div>
            <button 
              onClick={() => alert('Add new member functionality would open here')}
              className="bg-cluster-green text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              <i className="fas fa-user-plus mr-2"></i>Add Member
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Farm</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-cluster-green flex items-center justify-center text-white font-medium">JD</div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">John Davies</div>
                      <div className="text-sm text-gray-500">john@greenacresfarm.co.uk</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Green Acres Farm</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 days ago</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button 
                    onClick={() => alert('Opening member profile for John Davies')}
                    className="text-cluster-blue hover:text-blue-700 mr-3"
                  >
                    View
                  </button>
                  <button 
                    onClick={() => alert('Opening message modal for John Davies')}
                    className="text-cluster-green hover:text-green-700"
                  >
                    Message
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-cluster-blue flex items-center justify-center text-white font-medium">SW</div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Sarah Wilson</div>
                      <div className="text-sm text-gray-500">sarah@meadowbrookorganics.co.uk</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Meadowbrook Organics</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 days ago</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button 
                    onClick={() => alert('Opening member profile for Sarah Wilson')}
                    className="text-cluster-blue hover:text-blue-700 mr-3"
                  >
                    View
                  </button>
                  <button 
                    onClick={() => alert('Opening message modal for Sarah Wilson')}
                    className="text-cluster-green hover:text-green-700"
                  >
                    Message
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderApplications = () => (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 font-secondary">Applications</h1>
        <p className="text-gray-600">Review and manage membership and funding applications.</p>
      </div>
      
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Applications</h3>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Greenfield Farm Ltd</h4>
                  <p className="text-gray-600">Membership Application • Applied 3 days ago</p>
                </div>
                <span className="px-3 py-1 text-sm bg-orange-100 text-orange-800 rounded-full">Pending Review</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div><strong>Contact:</strong> Michael Thompson</div>
                <div><strong>Location:</strong> Guildford, Surrey</div>
                <div><strong>Farm Size:</strong> 45 hectares</div>
                <div><strong>Primary Crops:</strong> Wheat, Barley, Oats</div>
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={() => alert('✅ Application approved for Greenfield Farm Ltd')}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                  <i className="fas fa-check mr-2"></i>Approve
                </button>
                <button 
                  onClick={() => alert('❌ Application rejected for Greenfield Farm Ltd')}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                  <i className="fas fa-times mr-2"></i>Reject
                </button>
                <button 
                  onClick={() => alert('📋 Viewing detailed application for Greenfield Farm Ltd')}
                  className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                >
                  <i className="fas fa-eye mr-2"></i>View Details
                </button>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Heritage Crops Co. - Biodiversity Enhancement</h4>
                  <p className="text-gray-600">FiPL Funding Application • Applied 2 days ago • Requesting £15,000</p>
                </div>
                <span className="px-3 py-1 text-sm bg-orange-100 text-orange-800 rounded-full">Under Review</span>
              </div>
              <div className="text-sm text-gray-700 mb-4">
                <p>Project to establish wildflower meadows and hedgerow restoration to enhance biodiversity on 25 hectares of farmland.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div><strong>AI Risk Score:</strong> <span className="text-green-600">Low (12%)</span></div>
                <div><strong>Environmental Impact:</strong> <span className="text-green-600">High</span></div>
                <div><strong>Financial Viability:</strong> <span className="text-green-600">Strong</span></div>
                <div><strong>Compliance Score:</strong> <span className="text-green-600">95%</span></div>
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={() => alert('✅ Funding approved for Heritage Crops Co. - £15,000')}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                  <i className="fas fa-check mr-2"></i>Approve Funding
                </button>
                <button 
                  onClick={() => alert('📝 Requesting additional information from Heritage Crops Co.')}
                  className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
                >
                  <i className="fas fa-question mr-2"></i>Request More Info
                </button>
                <button 
                  onClick={() => alert('📋 Viewing full funding application for Heritage Crops Co.')}
                  className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                >
                  <i className="fas fa-eye mr-2"></i>Full Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'crm': return renderCRM();
      case 'applications': return renderApplications();
      case 'analytics': 
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 font-secondary">Analytics & KPIs</h1>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600">Analytics dashboard with member growth charts, engagement metrics, and platform performance would be displayed here.</p>
            </div>
          </div>
        );
      case 'content': 
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 font-secondary">Content Management</h1>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600">Content management system for blog posts, news articles, and events would be displayed here.</p>
            </div>
          </div>
        );
      case 'messaging': 
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 font-secondary">Messaging Centre</h1>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600">Newsletter creation, member messaging, and communication tools would be displayed here.</p>
            </div>
          </div>
        );
      case 'settings': 
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 font-secondary">Platform Settings</h1>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600">Platform configuration, notification preferences, and administrative settings would be displayed here.</p>
            </div>
          </div>
        );
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Left: Single Clean Logo */}
            <div className="flex-shrink-0">
              <Logo className="h-14" showText={true} />
            </div>
            
            {/* Center: Portal Badge & Stats */}
            <div className="hidden md:flex items-center space-x-6">
              <span className="px-4 py-2 text-sm bg-cluster-brown text-white rounded-full font-medium shadow-sm">
                <i className="fas fa-shield-alt mr-2"></i>Admin Portal
              </span>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <i className="fas fa-users mr-2 text-cluster-green"></i>
                  <span className="font-medium">47 Members</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-file-alt mr-2 text-orange-500"></i>
                  <span className="font-medium">8 Pending</span>
                </div>
              </div>
            </div>
            
            {/* Right: User Area */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all">
                <i className="fas fa-bell text-xl"></i>
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">3</span>
              </button>
              
              {/* User Profile Area */}
              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                <div className="h-12 w-12 rounded-full bg-cluster-brown flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {currentUser?.displayName?.split(' ').map(n => n[0]).join('') || 'A'}
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

export default AdminDashboard;