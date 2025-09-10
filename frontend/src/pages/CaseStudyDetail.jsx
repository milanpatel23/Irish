import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Users, Zap, Target, TrendingUp } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { mockData } from '../components/mock';

export const CaseStudyDetail = () => {
  const { caseId } = useParams();
  const navigate = useNavigate();
  
  const caseStudy = mockData.portfolio.find(p => p.id === parseInt(caseId));
  
  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="mr-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
            <div className="text-sm text-gray-600">
              <span>Portfolio</span> / <span className="text-orange-600">{caseStudy.category}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                {caseStudy.category}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {caseStudy.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {caseStudy.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-orange-600">{caseStudy.client}</div>
                  <div className="text-sm text-gray-600">Client</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">{caseStudy.industry}</div>
                  <div className="text-sm text-gray-600">Industry</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-gray-900">{caseStudy.duration}</div>
                      <div className="text-xs text-gray-600">Project Duration</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">{caseStudy.teamSize}</div>
                      <div className="text-xs text-gray-600">Team Size</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  {caseStudy.client} approached Irish Technologies with a critical need to modernize their technology infrastructure 
                  and improve operational efficiency. As a leading {caseStudy.industry.toLowerCase()} organization, they faced 
                  challenges with legacy systems, scalability issues, and the need for enhanced security measures.
                </p>
                
                <p>
                  Our team conducted a comprehensive assessment of their existing infrastructure and developed a strategic 
                  roadmap that would address immediate concerns while positioning them for future growth. The project 
                  required careful planning to minimize disruption to daily operations while implementing transformative changes.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Challenge</h3>
                <p>
                  The primary challenges included outdated technology stack, security vulnerabilities, limited scalability, 
                  and inefficient processes that were impacting productivity and customer satisfaction. The organization 
                  needed a solution that would modernize their operations while maintaining business continuity.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Solution</h3>
                <p>
                  We implemented a comprehensive {caseStudy.category.toLowerCase()} strategy that included modern architecture design, 
                  robust security implementation, scalable infrastructure, and streamlined processes. Our agile approach 
                  ensured rapid deployment while maintaining high quality standards.
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Project Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <div>
                      <div className="font-medium text-gray-900">Duration</div>
                      <div className="text-sm text-gray-600">{caseStudy.duration}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-orange-500" />
                    <div>
                      <div className="font-medium text-gray-900">Team Size</div>
                      <div className="text-sm text-gray-600">{caseStudy.teamSize}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-orange-500" />
                    <div>
                      <div className="font-medium text-gray-900">Industry</div>
                      <div className="text-sm text-gray-600">{caseStudy.industry}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-orange-500" />
                    <div>
                      <div className="font-medium text-gray-900">Category</div>
                      <div className="text-sm text-gray-600">{caseStudy.category}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies && caseStudy.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Measurable Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic implementation delivered significant improvements across all key performance indicators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {caseStudy.results && caseStudy.results.map((result, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {result.includes('%') ? result.split(' ')[0] : result.split(' ').slice(0, 2).join(' ')}
                </div>
                <div className="text-gray-600 text-sm">
                  {result.includes('%') ? result.split(' ').slice(1).join(' ') : result.split(' ').slice(2).join(' ')}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Results */}
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Transformation Impact</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Business Benefits</h4>
                <div className="space-y-4">
                  {[
                    'Significant cost reduction in operational expenses',
                    'Improved system reliability and uptime',
                    'Enhanced security posture and compliance',
                    'Faster time-to-market for new initiatives',
                    'Better customer experience and satisfaction',
                    'Scalable infrastructure for future growth'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Technical Achievements</h4>
                <div className="space-y-4">
                  {[
                    'Modern, scalable architecture implementation',
                    'Automated deployment and monitoring systems',
                    'Enhanced data security and encryption',
                    'Improved system performance and response times',
                    'Seamless integration with existing systems',
                    'Comprehensive documentation and training'
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
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
            Ready for Similar Results?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss how we can help transform your business with our proven {caseStudy.category.toLowerCase()} expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => navigate('/')}
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-3 rounded-lg transition-all duration-200"
            >
              View More Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};