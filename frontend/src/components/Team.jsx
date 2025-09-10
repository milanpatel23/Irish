import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Linkedin, Mail, Users, CheckCircle } from 'lucide-react';
import { mockData } from './mock';

export const Team = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Our Team
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Expert <br />
            <span className="text-orange-600">Team Members</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of technology experts brings years of experience and passion 
            for innovation to every project we undertake.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mockData.team.map((member) => (
            <div 
              key={member.id} 
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-2 text-center"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200 p-1">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Social Links - Hidden by default, shown on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-3">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200">
                      <Linkedin className="w-4 h-4 text-orange-600" />
                    </button>
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200">
                      <Mail className="w-4 h-4 text-orange-600" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Member Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <p className="text-orange-600 font-medium">
                    {member.position}
                  </p>
                </div>
                
                {/* Bio */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.bio}
                </p>

                {/* Education & Certifications */}
                <div className="text-left space-y-3 pt-4 border-t border-gray-100">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-1">
                      Education
                    </h4>
                    <p className="text-sm text-gray-600">{member.education}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-1">
                      Key Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise && member.expertise.slice(0, 3).map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-md font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-1">
                      Certifications
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {member.certifications && member.certifications.slice(0, 2).map((cert, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-2xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-8">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Technology Experts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Certifications</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>

          {/* Core Values */}
          <div className="border-t border-gray-200 pt-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Core Values</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockData.about.values && mockData.about.values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for technology 
              and innovation. Explore career opportunities with Irish Technologies.
            </p>
            
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};