import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { mockData } from '../components/mock';

export const BlogDetail = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  
  const blogPost = mockData.blog.find(p => p.id === parseInt(blogId));
  
  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  const scrollToSection = (href) => {
    navigate('/');
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="mr-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
            <div className="text-sm text-gray-600">
              <span>Blog</span> / <span className="text-orange-600">{blogPost.category}</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
              <Tag className="w-4 h-4 mr-2" />
              {blogPost.category}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              {blogPost.excerpt}
            </p>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{formatDate(blogPost.date)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={blogPost.image} 
              alt={blogPost.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                
                {/* Article Content */}
                <div className="text-gray-700 leading-relaxed space-y-6">
                  {blogPost.content ? blogPost.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  )) : (
                    <div className="space-y-6">
                      <p className="text-lg leading-relaxed">
                        {blogPost.excerpt}
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        At Irish Technologies, we understand that staying ahead of technology trends is crucial for business success. 
                        Our expert team continuously monitors the latest developments in the IT landscape to provide our clients 
                        with cutting-edge solutions that drive growth and efficiency.
                      </p>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Insights</h3>
                      <p className="text-lg leading-relaxed">
                        The technology landscape is evolving rapidly, with new innovations emerging regularly. Organizations that 
                        embrace these changes and adapt their strategies accordingly are more likely to succeed in today's 
                        competitive market. Our comprehensive analysis reveals several important trends that businesses should consider.
                      </p>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Implementation Strategy</h3>
                      <p className="text-lg leading-relaxed">
                        Successfully implementing new technologies requires careful planning and expert guidance. Our team at 
                        Irish Technologies has developed proven methodologies that ensure smooth transitions and maximum ROI 
                        for our clients. We work closely with organizations to understand their unique needs and challenges.
                      </p>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Looking Forward</h3>
                      <p className="text-lg leading-relaxed">
                        As we continue to advance through 2025, the importance of strategic technology adoption cannot be overstated. 
                        Organizations that partner with experienced IT consultants like Irish Technologies are better positioned 
                        to leverage these emerging trends for sustainable growth and competitive advantage.
                      </p>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Tags</h4>
                  <div className="flex flex-wrap gap-3">
                    {blogPost.tags && blogPost.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                
                {/* Author Info */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h4>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{blogPost.author}</div>
                      <div className="text-sm text-gray-600">Technology Expert</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    A seasoned technology professional at Irish Technologies with extensive experience in 
                    {blogPost.category.toLowerCase()} and digital transformation strategies.
                  </p>
                </div>

                {/* Share */}
                <div className="bg-white border-2 border-orange-200 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Share2 className="w-5 h-5 mr-2 text-orange-600" />
                    Share This Post
                  </h4>
                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Share on LinkedIn
                    </button>
                    <button className="w-full bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors duration-200">
                      Share on Twitter
                    </button>
                    <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                      Copy Link
                    </button>
                  </div>
                </div>

                {/* Related Topics */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Related Services</h4>
                  <div className="space-y-3">
                    <button 
                      onClick={() => scrollToSection('#services')}
                      className="block w-full text-left text-orange-600 hover:text-orange-700 font-medium"
                    >
                      IT Consulting Services →
                    </button>
                    <button 
                      onClick={() => scrollToSection('#services')}
                      className="block w-full text-left text-orange-600 hover:text-orange-700 font-medium"
                    >
                      Digital Transformation →
                    </button>
                    <button 
                      onClick={() => scrollToSection('#contact')}
                      className="block w-full text-left text-orange-600 hover:text-orange-700 font-medium"
                    >
                      Schedule Consultation →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Implement These Strategies?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss how Irish Technologies can help you leverage the latest technology trends for your business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Expert Consultation
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => navigate('/')}
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-3 rounded-lg transition-all duration-200"
            >
              Read More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};