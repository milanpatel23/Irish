import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle, Users, Award, Zap, Shield } from 'lucide-react';
import { mockData } from './mock';

export const About = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                About Irish Technologies
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {mockData.about.title}
              </h2>
              
              <h3 className="text-2xl font-semibold text-orange-600">
                {mockData.about.subtitle}
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {mockData.about.description}
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {mockData.about.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                onClick={() => scrollToSection('#services')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>
          </div>

          {/* Right Column - Stats & Visual */}
          <div className="relative">
            {/* Main Stats Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
              <div className="grid grid-cols-2 gap-8">
                {mockData.about.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    Why Choose Irish Technologies?
                  </div>
                  <div className="flex justify-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-orange-500" />
                      <span className="text-sm text-gray-600">Expert Team</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-5 h-5 text-orange-500" />
                      <span className="text-sm text-gray-600">Fast Delivery</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-orange-500" />
                      <span className="text-sm text-gray-600">Secure Solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl opacity-10 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl opacity-10 blur-xl"></div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 left-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg transform -rotate-3">
              ISO Certified
            </div>
            
            <div className="absolute -bottom-4 right-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg transform rotate-3">
              24/7 Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};