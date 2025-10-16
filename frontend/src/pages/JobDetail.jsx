import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowLeft, MapPin, Clock, DollarSign, Users, CheckCircle, Calendar } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { mockData } from '../components/mock';

export const JobDetail = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const job = mockData.careers.find(j => j.id === parseInt(jobId));
  
  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <Button onClick={() => navigate('/careers')}>View All Jobs</Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/careers')}
              className="mr-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Careers
            </Button>
            <div className="text-sm text-gray-600">
              <span>Careers</span> / <span className="text-orange-600">{job.title}</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              {job.department}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {job.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Posted {formatDate(job.postedDate)}</span>
              </div>
            </div>
            
            <Button
              onClick={() => navigate(`/careers/${job.id}`)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Apply for This Position
            </Button>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Job Description */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Role</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {job.description}
                </p>
              </div>
              
              {/* Requirements */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h3>
                <ul className="space-y-3">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Responsibilities */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Responsibilities</h3>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h3>
                <div className="bg-gradient-to-r from-orange-50 to-gray-50 rounded-2xl p-8">
                  <ul className="space-y-3">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                
                {/* Quick Apply */}
                <div className="bg-white border-2 border-orange-200 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Apply</h4>
                  <p className="text-gray-600 mb-6 text-sm">
                    Ready to join our team? Click below to start your application process.
                  </p>
                  <Button
                    onClick={() => navigate(`/careers/${job.id}`)}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Apply Now
                  </Button>
                </div>

                {/* Job Summary */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Job Summary</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Department</span>
                      <span className="font-medium text-gray-900">{job.department}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Experience</span>
                      <span className="font-medium text-gray-900">{job.experience}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Type</span>
                      <span className="font-medium text-gray-900">{job.type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Location</span>
                      <span className="font-medium text-gray-900">{job.location}</span>
                    </div>
                  </div>
                </div>

                {/* Share Position */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Share This Job</h4>
                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Share on LinkedIn
                    </button>
                    <button className="w-full bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors duration-200">
                      Share on Twitter
                    </button>
                    <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                      Copy Link
                    </button>
                  </div>
                </div>

                {/* Similar Positions */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Similar Positions</h4>
                  <div className="space-y-3">
                    {mockData.careers
                      .filter(j => j.id !== job.id && j.department === job.department)
                      .slice(0, 3)
                      .map(similarJob => (
                        <button
                          key={similarJob.id}
                          onClick={() => navigate(`/job/${similarJob.id}`)}
                          className="block w-full text-left p-3 bg-white rounded-lg hover:bg-orange-50 transition-colors duration-200"
                        >
                          <div className="font-medium text-gray-900 text-sm">{similarJob.title}</div>
                          <div className="text-gray-600 text-xs">{similarJob.location}</div>
                        </button>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Have Questions About This Role?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Our HR team is here to help. Reach out if you need more information about this position 
            or want to discuss your career opportunities with Irish Technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate(`/careers/${job.id}`)}
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Apply for This Position
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => navigate('/careers')}
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-3 rounded-lg transition-all duration-200"
            >
              View All Positions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};