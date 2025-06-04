import React, { useState } from 'react';
import { fundingOpportunities, successStories, FundingOpportunity } from '../data/funding';

const Funding: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(fundingOpportunities.map(opp => opp.category)))];
  const statuses = ['all', 'open', 'coming-soon', 'closed'];

  const filteredOpportunities = fundingOpportunities.filter(opp => {
    const categoryMatch = selectedCategory === 'all' || opp.category === selectedCategory;
    const statusMatch = selectedStatus === 'all' || opp.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-green-100 text-green-800';
      case 'coming-soon':
        return 'bg-blue-100 text-blue-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'open':
        return 'Open';
      case 'coming-soon':
        return 'Coming Soon';
      case 'closed':
        return 'Closed';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-secondary font-bold text-gray-900 mb-6">
              Funding Opportunities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover grants, subsidies, and investment opportunities to support your farm's growth, 
              sustainability initiatives, and innovation projects.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1">
                <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Category
                </label>
                <select
                  id="category-filter"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cluster-green focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Status
                </label>
                <select
                  id="status-filter"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cluster-green focus:border-transparent"
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>
                      {status === 'all' ? 'All Statuses' : getStatusText(status)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredOpportunities.length} of {fundingOpportunities.length} opportunities
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filteredOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{opportunity.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(opportunity.status)}`}>
                    {getStatusText(opportunity.status)}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm font-medium text-gray-700">Amount:</span>
                    <p className="text-cluster-green font-semibold">{opportunity.amount}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Deadline:</span>
                    <p className="text-gray-900">{opportunity.deadline}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Provider:</span>
                    <p className="text-gray-900">{opportunity.provider}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Category:</span>
                    <p className="text-gray-900">{opportunity.category}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-700 block mb-2">Eligibility:</span>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {opportunity.eligibility.map((criteria, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-cluster-green mr-2">•</span>
                        {criteria}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {opportunity.link && (
                  <a
                    href={opportunity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-cluster-green text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Apply Now →
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-secondary font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-lg text-gray-600">
                See how our cluster members have successfully secured funding for their projects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {successStories.map((story) => (
                <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {story.image && (
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{story.title}</h3>
                      <span className="bg-cluster-gold text-cluster-brown px-2 py-1 rounded text-sm font-medium">
                        {story.year}
                      </span>
                    </div>
                    
                    <p className="text-cluster-green font-medium mb-2">{story.farmName}</p>
                    <p className="text-gray-600 mb-4">{story.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">Amount Secured:</span>
                        <span className="text-cluster-green font-semibold">{story.amount}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Funding Source:</span>
                        <span className="text-gray-700">{story.fundingSource}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Impact Achieved:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {story.impact.map((impact, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-cluster-green mr-2">✓</span>
                            {impact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="bg-cluster-blue p-8 rounded-lg text-white">
              <h2 className="text-2xl font-secondary font-bold mb-4">
                Need Help with Your Application?
              </h2>
              <p className="mb-6 text-blue-100">
                Our cluster facilitator can provide guidance on funding applications, 
                eligibility requirements, and help connect you with relevant opportunities.
              </p>
              <div className="space-x-4">
                <a 
                  href="mailto:funding@surreyfarmingcluster.org"
                  className="bg-white text-cluster-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Our Facilitator
                </a>
                <a 
                  href="/join"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-cluster-blue transition-colors"
                >
                  Join the Cluster
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Funding;