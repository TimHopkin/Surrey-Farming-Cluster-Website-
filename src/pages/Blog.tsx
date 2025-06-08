import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '../data/blogs';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory;
    const searchMatch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return categoryMatch && searchMatch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-secondary font-bold text-gray-900 mb-6">
              Farming Knowledge Hub
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, practical advice, and latest developments in sustainable farming, 
              technology, and agricultural business management.
            </p>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-secondary font-bold text-gray-900 mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-cluster-green text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm ml-3">{post.readTime} min read</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-cluster-green transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-500">{post.author}</span>
                          <span className="text-gray-300 mx-2">•</span>
                          <span className="text-sm text-gray-500">
                            {new Date(post.publishDate).toLocaleDateString('en-GB', { 
                              day: 'numeric', 
                              month: 'long', 
                              year: 'numeric' 
                            })}
                          </span>
                        </div>
                        <span className="text-cluster-blue font-medium group-hover:text-blue-700">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Search and Filter */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Search Articles
                </label>
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by title, content, or tags..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cluster-green focus:border-transparent"
                />
              </div>
              <div className="lg:w-64">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cluster-green focus:border-transparent"
                >
                  {blogCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow block"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center mb-3">
                          <span className="bg-cluster-green text-white px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                          <span className="text-gray-500 text-sm ml-3">{post.readTime} min read</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-cluster-green transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-sm text-gray-500">{post.author}</span>
                            <span className="text-gray-300 mx-2">•</span>
                            <span className="text-sm text-gray-500">
                              {new Date(post.publishDate).toLocaleDateString('en-GB', { 
                                day: 'numeric', 
                                month: 'long', 
                                year: 'numeric' 
                              })}
                            </span>
                          </div>
                          <span className="text-cluster-blue font-medium group-hover:text-blue-700">
                            Read More →
                          </span>
                        </div>
                        <div className="mt-3">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map(tag => (
                              <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="group block"
                    >
                      <div className="flex space-x-3">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-cluster-green transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(post.publishDate).toLocaleDateString('en-GB', { 
                              day: 'numeric', 
                              month: 'short' 
                            })}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {blogCategories.filter(cat => cat !== 'All').map(category => {
                    const count = blogPosts.filter(post => post.category === category).length;
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded transition-colors ${
                          selectedCategory === category
                            ? 'bg-cluster-green text-white'
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <div className="flex justify-between">
                          <span>{category}</span>
                          <span className="text-sm">{count}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-cluster-blue text-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Subscribe to our newsletter for the latest farming insights and cluster updates.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full bg-white text-cluster-blue px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;