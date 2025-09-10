import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight, Settings, Cloud, Shield, Code, Zap, Server } from 'lucide-react';
import { mockData } from './mock';

const iconMap = {
  Settings,
  Cloud,
  Shield,
  Code,
  Zap,
  Server
};

export const Services = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            Our Services
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Empowering Success with <br />
            <span className="text-orange-600">Expert IT Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Irish Technologies Inc. empowers your success by providing expert IT solutions, 
            connecting cutting-edge technology with business growth, and delivering personalized 
            strategies to help enterprises thrive nationwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mockData.services.map((service) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <div 
                key={service.id} 
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                        Key Features:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features && service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    {service.benefits && (
                      <div className="bg-orange-50 rounded-lg p-4">
                        <p className="text-sm text-orange-800 font-medium">
                          <strong>Impact:</strong> {service.benefits}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* CTA */}
                  <div 
                    onClick={() => navigate(`/service/${service.id}`)}
                    className="flex items-center text-orange-600 font-medium group-hover:text-orange-700 transition-colors duration-300 cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our experts help you choose the right technology solutions for your business needs. 
              Get a free consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => scrollToSection('#portfolio')}
                className="border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600 font-semibold px-8 py-3 rounded-lg transition-all duration-200"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};