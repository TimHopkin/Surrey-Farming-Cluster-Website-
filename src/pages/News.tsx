import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { newsArticles, upcomingEvents } from '../data/news';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(newsArticles.map(article => article.category)))];
  const featuredArticles = newsArticles.filter(article => article.featured);
  const filteredArticles = selectedCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatEventDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-secondary font-bold text-gray-900 mb-6">
              News & Events
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news from the Surrey Farming Cluster, 
              upcoming events, and stories from our member farms.
            </p>
          </div>

          {featuredArticles.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-secondary font-bold text-gray-900 mb-8">Featured Stories</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    {article.image && (
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-cluster-green text-white px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-sm ml-3">
                          {formatDate(article.publishDate)}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">By {article.author}</span>
                        <Link 
                          to={`/news/${article.id}`}
                          className="text-cluster-blue hover:text-blue-700 font-medium"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="mb-16">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
              <h2 className="text-2xl font-secondary font-bold text-gray-900 mb-4 md:mb-0">
                All News
              </h2>
              <div>
                <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Category
                </label>
                <select
                  id="category-filter"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cluster-green focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {article.image && (
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-40 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm ml-3">
                        {formatDate(article.publishDate)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-xs">By {article.author}</span>
                      <Link 
                        to={`/news/${article.id}`}
                        className="text-cluster-blue hover:text-blue-700 font-medium text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-secondary font-bold text-gray-900 mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                    <span className="bg-cluster-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatEventDate(event.date)}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Organised by {event.organiser}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Cost:</span>
                      <p className="text-gray-600">{event.cost}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Capacity:</span>
                      <p className="text-gray-600">{event.capacity} people</p>
                    </div>
                  </div>
                  
                  {event.registrationLink && (
                    <Link
                      to={event.registrationLink}
                      className="block w-full bg-cluster-green text-white text-center py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Register Now
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className="text-center">
            <div className="bg-cluster-gold p-8 rounded-lg">
              <h2 className="text-2xl font-secondary font-bold text-cluster-brown mb-4">
                Stay Connected
              </h2>
              <p className="text-cluster-brown mb-6">
                Subscribe to our newsletter to receive updates about events, funding opportunities, 
                and important cluster news directly in your inbox.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-4 py-2 rounded-lg border border-cluster-brown focus:ring-2 focus:ring-cluster-brown focus:border-transparent flex-1 max-w-md"
                />
                <button className="bg-cluster-brown text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;