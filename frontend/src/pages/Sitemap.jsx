import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowLeft, Map, ExternalLink, Home, Info, Briefcase, Users, BookOpen, Mail, FileText } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { mockData } from '../components/mock';

export const Sitemap = () => {
  const navigate = useNavigate();

  const sitemapData = [
    {
      category: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', path: '/', description: 'Welcome to Irish Technologies' },
        { name: 'About Us', path: '/#about', description: 'Learn about our company and mission' },
        { name: 'Services', path: '/#services', description: 'Our IT services and solutions' },
        { name: 'Portfolio', path: '/#portfolio', description: 'Case studies and project showcase' },
        { name: 'Team', path: '/#team', description: 'Meet our expert team members' },
        { name: 'Blog', path: '/#blog', description: 'Latest insights and technology trends' },
        { name: 'Contact', path: '/#contact', description: 'Get in touch with our team' }
      ]
    },
    {
      category: 'Service Detail Pages',
      icon: Briefcase,
      pages: mockData.services.map(service => ({
        name: service.title,
        path: `/service/${service.id}`,
        description: service.description.substring(0, 100) + '...'
      }))
    },
    {
      category: 'Case Study Detail Pages',
      icon: FileText,
      pages: mockData.portfolio.map(project => ({
        name: project.title,
        path: `/case-study/${project.id}`,
        description: project.description.substring(0, 100) + '...'
      }))
    },
    {
      category: 'Blog Detail Pages',
      icon: BookOpen,
      pages: mockData.blog.map(post => ({
        name: post.title,
        path: `/blog/${post.id}`,
        description: post.excerpt.substring(0, 100) + '...'
      }))
    },
    {
      category: 'Legal Pages',
      icon: FileText,
      pages: [
        { name: 'Privacy Policy', path: '/privacy-policy', description: 'How we handle your personal information' },
        { name: 'Terms of Service', path: '/terms-of-service', description: 'Terms governing use of our services' },
        { name: 'Cookie Policy', path: '/cookie-policy', description: 'Information about cookies and tracking' },
        { name: 'Sitemap', path: '/sitemap', description: 'Complete list of all website pages' }
      ]
    }
  ];

  const handleNavigation = (path) => {
    if (path.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(path.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="mr-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <div className="text-sm text-gray-600">
              <span>Navigation</span> / <span className="text-orange-600">Sitemap</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Map className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sitemap
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Navigate through all pages and sections of the Irish Technologies website. 
              Find exactly what you're looking for with our comprehensive site structure.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {sitemapData.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{section.category}</h2>
                    <p className="text-gray-600">{section.pages.length} pages available</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.pages.map((page, pageIndex) => (
                    <div 
                      key={pageIndex}
                      className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-orange-200 transition-all duration-300 group cursor-pointer"
                      onClick={() => handleNavigation(page.path)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                          {page.name}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors duration-300" />
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {page.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <code className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded group-hover:bg-orange-100 group-hover:text-orange-700 transition-colors duration-300">
                          {page.path}
                        </code>
                        <div className="text-orange-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Visit Page →
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-20 bg-gradient-to-r from-gray-50 to-orange-50 rounded-2xl p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Website Overview</h3>
              <p className="text-lg text-gray-600">Complete statistics of our website structure</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  {sitemapData.reduce((total, section) => total + section.pages.length, 0)}
                </div>
                <div className="text-gray-600 font-medium">Total Pages</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">{mockData.services.length}</div>
                <div className="text-gray-600 font-medium">Service Pages</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">{mockData.portfolio.length}</div>
                <div className="text-gray-600 font-medium">Case Studies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">{mockData.blog.length}</div>
                <div className="text-gray-600 font-medium">Blog Posts</div>
              </div>
            </div>
          </div>

          {/* Search and Navigation Help */}
          <div className="mt-16 bg-white border-2 border-orange-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Need Help Finding Something?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation Tips</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Use the main navigation menu for quick access to key sections
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Click on service titles to view detailed service information
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Portfolio items link to comprehensive case studies
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    All legal documents are accessible from the footer
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Still Can't Find What You Need?</h4>
                <p className="text-gray-700 mb-6">
                  Our team is here to help you find exactly what you're looking for. Don't hesitate to reach out!
                </p>
                <Button 
                  onClick={() => handleNavigation('/#contact')}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};