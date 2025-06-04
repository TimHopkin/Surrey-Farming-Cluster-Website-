import React, { useState } from 'react';

const Join: React.FC = () => {
  const [formData, setFormData] = useState({
    farmName: '',
    contactName: '',
    email: '',
    phone: '',
    farmLocation: '',
    farmType: '',
    farmSize: '',
    products: '',
    interests: [] as string[],
    message: ''
  });

  const farmTypes = [
    'Arable',
    'Dairy',
    'Livestock',
    'Mixed',
    'Organic',
    'Market Garden',
    'Horticulture',
    'Other'
  ];

  const interestAreas = [
    'Sustainability initiatives',
    'Funding opportunities',
    'Technology adoption',
    'Knowledge sharing',
    'Collaborative projects',
    'Marketing and sales',
    'Training and education',
    'Policy advocacy'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will be in touch soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-secondary font-bold text-gray-900 mb-6">
              Join Surrey Farming Cluster
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Become part of Surrey's leading agricultural collaborative network and 
              connect with like-minded farmers committed to sustainable and innovative farming.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-secondary font-bold text-gray-900 mb-6">
              Why Join the Surrey Farming Cluster?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cluster-green rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Access to Funding</h3>
                    <p className="text-gray-600 text-sm">Get support with grant applications and access to exclusive funding opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cluster-green rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Knowledge Sharing</h3>
                    <p className="text-gray-600 text-sm">Learn from experienced farmers and share your own expertise with the community.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cluster-green rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Collaborative Projects</h3>
                    <p className="text-gray-600 text-sm">Participate in joint initiatives that benefit all cluster members.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cluster-green rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Professional Support</h3>
                    <p className="text-gray-600 text-sm">Access to expert facilitators and professional development opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cluster-green rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Market Opportunities</h3>
                    <p className="text-gray-600 text-sm">Connect with potential buyers and collaborative marketing initiatives.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cluster-green rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Networking Events</h3>
                    <p className="text-gray-600 text-sm">Regular workshops, field days, and social events to build relationships.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-secondary font-bold text-gray-900 mb-6">
              Membership Application
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="farmName" className="block text-sm font-medium text-gray-700 mb-2">
                    Farm Name *
                  </label>
                  <input
                    type="text"
                    id="farmName"
                    name="farmName"
                    value={formData.farmName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cluster-green focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cluster-green focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cluster-green focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cluster-green focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="farmLocation" className="block text-sm font-medium text-gray-700 mb-2">
                    Farm Location *
                  </label>
                  <input
                    type="text"
                    id="farmLocation"
                    name="farmLocation"
                    value={formData.farmLocation}
                    onChange={handleInputChange}
                    placeholder="Town/Village, Surrey"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cluster-green focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="farmType" className="block text-sm font-medium text-gray-700 mb-2">
                    Farm Type *
                  </label>
                  <select
                    id="farmType"
                    name="farmType"
                    value={formData.farmType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cluster-green focus:border-transparent"
                  >
                    <option value="">Select farm type</option>
                    {farmTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="farmSize" className="block text-sm font-medium text-gray-700 mb-2">
                    Farm Size (hectares)
                  </label>
                  <input
                    type="text"
                    id="farmSize"
                    name="farmSize"
                    value={formData.farmSize}
                    onChange={handleInputChange}
                    placeholder="e.g., 50"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cluster-green focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="products" className="block text-sm font-medium text-gray-700 mb-2">
                    Main Products/Services
                  </label>
                  <input
                    type="text"
                    id="products"
                    name="products"
                    value={formData.products}
                    onChange={handleInputChange}
                    placeholder="e.g., Wheat, Barley, Dairy"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cluster-green focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Areas of Interest (select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {interestAreas.map(interest => (
                    <label key={interest} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="rounded border-gray-300 text-cluster-green focus:ring-cluster-green"
                      />
                      <span className="ml-2 text-sm text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us more about your farm and what you hope to gain from cluster membership..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cluster-green focus:border-transparent"
                />
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Membership Information:</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Annual membership fee: £100 (includes all events and support services)</li>
                  <li>• New members receive a welcome pack and one-to-one consultation</li>
                  <li>• Membership year runs from April to March</li>
                  <li>• Pro-rata fees available for mid-year joiners</li>
                </ul>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <button
                  type="submit"
                  className="bg-cluster-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  className="border-2 border-cluster-green text-cluster-green px-8 py-3 rounded-lg font-semibold hover:bg-cluster-green hover:text-white transition-colors"
                >
                  Save as Draft
                </button>
              </div>
            </form>
          </div>

          <div className="text-center mt-12">
            <div className="bg-cluster-blue p-8 rounded-lg text-white">
              <h2 className="text-2xl font-secondary font-bold mb-4">
                Questions About Membership?
              </h2>
              <p className="mb-6 text-blue-100">
                Our team is here to help answer any questions about joining the Surrey Farming Cluster 
                and how membership can benefit your farm.
              </p>
              <div className="space-x-4">
                <a 
                  href="mailto:membership@surreyfarmingcluster.org"
                  className="bg-white text-cluster-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Email Us
                </a>
                <a 
                  href="tel:01483123456"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-cluster-blue transition-colors"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;