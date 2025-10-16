import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowLeft, MapPin, Clock, DollarSign, Users, Briefcase, Search } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { mockData } from '../components/mock';

export const Careers = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const departments = ['All', ...new Set(mockData.careers.map(job => job.department))];
  
  const filteredJobs = mockData.careers.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

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
              <span>Company</span> / <span className="text-orange-600">Careers</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Team at <span className="text-orange-600">Irish Technologies</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Build your career with a leading technology company. We offer exciting opportunities, 
              competitive benefits, and a collaborative environment where innovation thrives.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">15+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">98%</div>
                <div className="text-gray-600">Employee Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search positions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
              
              <div>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mt-4 text-center text-gray-600">
              Found {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {filteredJobs.map((job) => (
                <div 
                  key={job.id}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-orange-200 transition-all duration-300 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Job Info */}
                    <div className="lg:col-span-3">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 mb-2">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Briefcase className="w-4 h-4 mr-1" />
                              {job.department}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {job.type}
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="w-4 h-4 mr-1" />
                              {job.salary}
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Posted</div>
                          <div className="text-sm font-medium text-gray-900">
                            {formatDate(job.postedDate)}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {job.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
                          {job.experience} experience
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    
                    {/* Apply Button */}
                    <div className="lg:col-span-1 flex flex-col justify-center">
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          navigate(`/careers/${job.id}`);
                        }}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl group"
                      >
                        Apply Now
                        <Users className="ml-2 w-4 h-4" />
                      </Button>
                      
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          navigate(`/job/${job.id}`);
                        }}
                        className="w-full mt-3 text-orange-600 hover:text-orange-700 font-medium py-2 transition-colors duration-200"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No positions found matching your criteria.</div>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('All');
                }}
                className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Join Irish Technologies?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job – we provide a platform for growth, innovation, and making a real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Competitive Benefits",
                description: "Comprehensive health insurance, retirement plans, and performance bonuses.",
                icon: DollarSign
              },
              {
                title: "Flexible Work",
                description: "Remote work options, flexible hours, and work-life balance support.",
                icon: Clock
              },
              {
                title: "Career Growth",
                description: "Professional development opportunities, training, and clear career progression paths.",
                icon: Users
              },
              {
                title: "Cutting-edge Projects",
                description: "Work on innovative projects using the latest technologies and methodologies.",
                icon: Briefcase
              },
              {
                title: "Global Impact",
                description: "Contribute to projects that make a difference for clients worldwide.",
                icon: MapPin
              },
              {
                title: "Collaborative Culture",
                description: "Join a supportive team environment that values diversity and inclusion.",
                icon: Users
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Don't see the perfect position? We're always looking for talented individuals. 
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Our HR Team
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => navigate('/')}
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-3 rounded-lg transition-all duration-200"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};