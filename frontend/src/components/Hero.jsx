import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { mockData } from './mock';

export const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-orange-50/30"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gray-200/40 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Leading IT Services & Consulting
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {mockData.hero.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                {mockData.hero.subtitle}
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mockData.hero.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('#services')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Discover Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => scrollToSection('#about')}
                className="border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600 font-semibold px-8 py-3 rounded-lg transition-all duration-200"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main visual card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-sm"></div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">150+</div>
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Client Satisfaction</span>
                      <span className="font-semibold text-orange-600">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full w-[98%]"></div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="text-sm text-gray-600">Trusted by</div>
                    <div className="text-lg font-semibold text-gray-900">50+ Enterprise Clients</div>
                  </div>
                </div>
              </div>
              
              {/* Secondary cards */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl p-4 shadow-xl transform -rotate-6">
                <div className="text-sm">Security</div>
                <div className="text-lg font-bold">100% Secure</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-4 shadow-xl transform rotate-12">
                <div className="text-sm">Available</div>
                <div className="text-lg font-bold">24/7 Support</div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 to-gray-200/20 rounded-3xl blur-3xl transform scale-110 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};