import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { mockData } from './mock';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === mockData.testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  
  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === mockData.testimonials.length - 1 ? 0 : currentIndex + 1);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? mockData.testimonials.length - 1 : currentIndex - 1);
  };

  const currentTestimonial = mockData.testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-r from-orange-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
            <Quote className="w-4 h-4 mr-2" />
            Client Testimonials
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients <br />
            <span className="text-orange-600">Say About Us</span>
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-12 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-12">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>
            
            {/* Testimonial Content */}
            <div className="text-center space-y-8">
              {/* Stars */}
              <div className="flex justify-center space-x-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl text-gray-900 font-medium leading-relaxed">
                "{currentTestimonial.text}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.author}
                  className="w-16 h-16 rounded-full object-cover border-4 border-orange-100"
                />
                <div className="text-left">
                  <div className="text-xl font-bold text-gray-900">
                    {currentTestimonial.author}
                  </div>
                  <div className="text-orange-600 font-medium">
                    {currentTestimonial.position}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 flex items-center justify-center group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-orange-600 transition-colors duration-200" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 flex items-center justify-center group"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-orange-600 transition-colors duration-200" />
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-12">
          {mockData.testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Additional testimonials preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {mockData.testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-white rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                index === currentIndex 
                  ? 'ring-2 ring-orange-300 shadow-lg' 
                  : 'shadow hover:shadow-lg hover:-translate-y-1'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-orange-600">{testimonial.position}</div>
                </div>
              </div>
              
              <div className="flex space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 text-sm line-clamp-3">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};