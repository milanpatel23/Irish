import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Calendar, BookOpen, User } from 'lucide-react';
import { mockData } from './mock';

export const Blog = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Latest Insights
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Latest <br />
            <span className="text-orange-600">Trending Blogs & News</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest technology trends, industry insights, and expert advice 
            from our team of IT professionals.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mockData.blog.map((post) => (
            <article 
              key={post.id} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
                
                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {formatDate(post.date)}
                </div>
              </div>
              
              {/* Blog Content */}
              <div className="p-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>Irish Tech Team</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-orange-600 font-medium group-hover:text-orange-700 transition-colors duration-300">
                    <span className="text-sm">Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Stay Updated with Our Latest Insights
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest technology trends, tips, and industry news 
            delivered straight to your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <Button 
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm opacity-75 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>

        {/* View All Blogs CTA */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => scrollToSection('#contact')}
            variant="outline"
            className="border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600 font-semibold px-8 py-3 rounded-lg transition-all duration-200"
          >
            View All Blog Posts
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};