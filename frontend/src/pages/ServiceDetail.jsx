import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle, Star, Users, Award, Zap } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { mockData } from '../components/mock';

export const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const service = mockData.services.find(s => s.id === parseInt(serviceId));
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
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
              Back to Home
            </Button>
            <div className="text-sm text-gray-600">
              <span>Services</span> / <span className="text-orange-600">{service.title}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                IT Services
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {service.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('#contact')}
                  className="border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600 font-semibold px-8 py-3 rounded-lg transition-all duration-200"
                >
                  Request Consultation
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Implementation Time</span>
                    <span className="font-semibold text-orange-600">2-12 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Support Level</span>
                    <span className="font-semibold text-orange-600">24/7 Enterprise</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Certification</span>
                    <span className="font-semibold text-orange-600">ISO 27001</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Success Rate</span>
                    <span className="font-semibold text-orange-600">99.2%</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{service.benefits}</div>
                    <div className="text-sm text-gray-600">Expected Impact</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What's Included in <span className="text-orange-600">{service.title}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures you get everything needed for successful implementation and ongoing success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features && service.features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
                <p className="text-gray-600">
                  Comprehensive implementation and ongoing support for {feature.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful delivery and maximum value from your investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Assessment', description: 'Comprehensive analysis of your current state and requirements' },
              { step: '02', title: 'Strategy & Planning', description: 'Detailed roadmap and implementation strategy development' },
              { step: '03', title: 'Implementation', description: 'Expert execution with regular progress updates and quality checks' },
              { step: '04', title: 'Support & Optimization', description: 'Ongoing support and continuous improvement initiatives' }
            ].map((phase, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-orange-400 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Irish Technologies for <span className="text-orange-600">{service.title}</span>?
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: Users, title: 'Expert Team', description: 'Certified professionals with 10+ years of industry experience' },
                  { icon: Award, title: 'Proven Track Record', description: '150+ successful implementations with 98% client satisfaction' },
                  { icon: Zap, title: 'Fast Implementation', description: 'Agile methodology ensures quick deployment and time-to-value' },
                  { icon: Star, title: '24/7 Support', description: 'Round-the-clock monitoring and support for business continuity' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-lg opacity-90 mb-8">
                Let's discuss how our {service.title.toLowerCase()} can transform your business operations and drive growth.
              </p>
              
              <div className="space-y-4">
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 rounded-lg transition-all duration-200"
                >
                  Schedule Free Consultation
                </Button>
                
                <div className="text-center text-sm opacity-75">
                  No commitment required • Expert advice • Custom solution design
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};