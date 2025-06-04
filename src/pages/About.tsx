import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-secondary font-bold text-gray-900 mb-6">
              About Surrey Farming Cluster
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Growing Together for a Sustainable Surrey
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-secondary font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The Surrey Farming Cluster is a collaborative network that brings together farmers, 
                agricultural businesses, researchers, and stakeholders across Surrey to promote 
                sustainable farming practices, innovation, and economic growth in the agricultural sector.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that by working together, sharing knowledge, and supporting one another, 
                we can create a more resilient and sustainable agricultural future for Surrey while 
                preserving the county's rural heritage and natural environment.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Our Core Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-cluster-green rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <strong>Collaboration:</strong> Working together to achieve common goals
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-cluster-green rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <strong>Sustainability:</strong> Protecting our environment for future generations
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-cluster-green rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <strong>Community:</strong> Supporting local farmers and rural communities
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-cluster-green rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <strong>Innovation:</strong> Embracing new technologies and practices
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h2 className="text-3xl font-secondary font-bold text-gray-900 mb-8 text-center">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cluster-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Knowledge Sharing</h3>
                <p className="text-gray-600">
                  Facilitating workshops, field days, and networking events to share best practices and innovations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cluster-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Funding Support</h3>
                <p className="text-gray-600">
                  Helping members access grants, subsidies, and investment opportunities for farm improvements.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cluster-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Data & Analytics</h3>
                <p className="text-gray-600">
                  Collecting and analyzing farm data to improve decision-making and demonstrate impact.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-secondary font-bold text-gray-900 mb-6">
                Cluster Structure
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Overarching Group</h4>
                  <p className="text-gray-600">
                    Strategic oversight and coordination across all cluster activities and sub-groups.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Sub-Groups</h4>
                  <p className="text-gray-600">
                    Specialized groups focusing on specific sectors like dairy, arable, organic, and livestock farming.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Facilitator Role</h4>
                  <p className="text-gray-600">
                    Professional facilitation to ensure effective communication, coordination, and project delivery.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-secondary font-bold text-gray-900 mb-6">
                Get Involved
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're a farmer, agricultural business, researcher, or simply passionate about 
                sustainable agriculture, there are many ways to get involved with the Surrey Farming Cluster.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-cluster-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-cluster-brown font-bold">1</span>
                  </div>
                  <span className="text-gray-700">Join as a member farmer or partner organization</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-cluster-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-cluster-brown font-bold">2</span>
                  </div>
                  <span className="text-gray-700">Participate in events, workshops, and networking sessions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-cluster-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-cluster-brown font-bold">3</span>
                  </div>
                  <span className="text-gray-700">Share your knowledge and learn from others</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-cluster-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-cluster-brown font-bold">4</span>
                  </div>
                  <span className="text-gray-700">Access funding opportunities and support services</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <h2 className="text-3xl font-secondary font-bold text-gray-900 mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us to learn more about membership opportunities and how you can contribute to Surrey's agricultural future.
            </p>
            <div className="space-x-4">
              <a 
                href="mailto:info@surreyfarmingcluster.org"
                className="bg-cluster-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
              >
                Contact Us
              </a>
              <a 
                href="/join"
                className="border-2 border-cluster-green text-cluster-green px-8 py-3 rounded-lg font-semibold hover:bg-cluster-green hover:text-white transition-colors inline-block"
              >
                Join the Cluster
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;