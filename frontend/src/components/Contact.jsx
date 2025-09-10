import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { mockData } from './mock';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const services = [
    'IT Consulting',
    'Cloud Solutions',
    'Cybersecurity',
    'Software Development',
    'Digital Transformation',
    'Infrastructure Management',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
            <Send className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform <br />
            <span className="text-orange-600">Your Business?</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your technology needs and how we can help drive your business forward. 
            Our experts are ready to provide personalized solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="p-8 shadow-2xl border-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl group"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-6">
              <Card className="p-6 border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Email Us
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Send us an email anytime!
                    </p>
                    <a 
                      href={`mailto:${mockData.company.email}`}
                      className="text-orange-600 font-medium hover:text-orange-700 transition-colors duration-200"
                    >
                      {mockData.company.email}
                    </a>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Call Us
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Mon-Fri from 8am to 5pm
                    </p>
                    <a 
                      href={`tel:${mockData.company.phone}`}
                      className="text-orange-600 font-medium hover:text-orange-700 transition-colors duration-200"
                    >
                      {mockData.company.phone}
                    </a>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Business Hours
                    </h4>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Visit Us
                    </h4>
                    <p className="text-gray-600">
                      123 Technology Drive<br />
                      Dublin, Ireland D02 XY89<br />
                      European Union
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Emergency Support */}
            <Card className="p-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <h4 className="text-2xl font-bold mb-4">
                Need Emergency Support?
              </h4>
              <p className="mb-6 opacity-90">
                Our 24/7 emergency support team is available for critical issues. 
                Don't hesitate to reach out when you need immediate assistance.
              </p>
              <Button 
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Emergency Support: {mockData.company.phone}
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};