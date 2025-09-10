import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';
import { mockData } from './mock';

export const Portfolio = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Cloud Solutions', 'Cybersecurity', 'Software Development', 'Digital Transformation', 'IoT Solutions'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? mockData.portfolio 
    : mockData.portfolio.filter(project => project.category === selectedCategory);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            Our Portfolio
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Showcasing Our <br />
            <span className="text-orange-600">Success Stories</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful IT projects and transformations. 
            Each case study represents our commitment to delivering exceptional results.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-300 hover:text-orange-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {project.duration}
                </div>
                
                {/* Hover CTA */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200">
                    <ExternalLink className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      {project.client}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {project.industry}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-orange-600">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Team Size:</span>
                      <p className="text-sm text-gray-900">{project.teamSize}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Duration:</span>
                      <p className="text-sm text-gray-900">{project.duration}</p>
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="space-y-2">
                    <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                      Key Results:
                    </h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.results && project.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies && project.technologies.slice(0, 4).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-md font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div 
                  onClick={() => navigate(`/case-study/${project.id}`)}
                  className="flex items-center text-orange-600 font-medium group-hover:text-orange-700 transition-colors duration-300 mt-6 cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results for your business. 
              Our team is ready to take on your next challenge.
            </p>
            
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};