import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowLeft, FileText, Scale, AlertTriangle, UserCheck } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span>Legal</span> / <span className="text-orange-600">Terms of Service</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              These terms govern your use of Irish Technologies LLC's services. Please read them carefully.
            </p>
            
            <div className="mt-8 text-sm text-gray-500">
              Last Updated: September 2025
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to Irish Technologies LLC. These Terms of Service ("Terms") govern your access to and use of our website, applications, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <UserCheck className="w-8 h-8 text-orange-600 mr-3" />
                Acceptance of Terms
              </h2>
              <p className="text-gray-700 mb-4">
                By using our Services, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>You are at least 18 years old or have reached the age of majority in your jurisdiction</li>
                <li>You have the legal capacity to enter into these Terms</li>
                <li>You will comply with all applicable laws and regulations</li>
                <li>All information you provide is accurate and complete</li>
              </ul>
            </div>

            {/* Description of Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Description of Services</h2>
              <p className="text-gray-700 mb-4">
                Irish Technologies LLC provides comprehensive IT services and consulting solutions, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>IT Consulting and Strategy Development</li>
                <li>Cloud Solutions and Migration Services</li>
                <li>Cybersecurity and Compliance Solutions</li>
                <li>Custom Software Development</li>
                <li>Digital Transformation Services</li>
                <li>IT Infrastructure Management</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time without prior notice.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
              <p className="text-gray-700 mb-4">When using our Services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use our Services only for lawful purposes</li>
                <li>Respect intellectual property rights</li>
                <li>Not interfere with or disrupt our Services</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            {/* Prohibited Uses */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                Prohibited Uses
              </h2>
              <p className="text-gray-700 mb-4">You may not use our Services to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit harmful, threatening, or offensive content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with other users' use of the Services</li>
                <li>Engage in any fraudulent or deceptive practices</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>
              <p className="text-gray-700 mb-4">
                All content, features, and functionality of our Services, including but not limited to text, graphics, logos, software, and designs, are owned by Irish Technologies LLC or our licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700">
                You may not reproduce, distribute, modify, or create derivative works based on our intellectual property without our express written permission.
              </p>
            </div>

            {/* Service Availability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Availability</h2>
              <p className="text-gray-700">
                While we strive to maintain high availability of our Services, we do not guarantee uninterrupted access. Our Services may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control. We are not liable for any inconvenience or loss resulting from service interruptions.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                For paid services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>All fees are due in advance unless otherwise agreed in writing</li>
                <li>Payments are non-refundable except as expressly stated</li>
                <li>We reserve the right to change our pricing with 30 days' notice</li>
                <li>Late payments may result in service suspension</li>
              </ul>
            </div>

            {/* Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy</h2>
              <p className="text-gray-700">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices.
              </p>
            </div>

            {/* Disclaimer of Warranties */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Disclaimer of Warranties</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-gray-700 mb-4">
                  <strong>OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</strong>
                </p>
                <p className="text-gray-700">
                  We disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that our Services will be uninterrupted, error-free, or secure.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IRISH TECHNOLOGIES LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATING TO THESE TERMS OR OUR SERVICES.</strong>
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Indemnification</h2>
              <p className="text-gray-700">
                You agree to indemnify, defend, and hold harmless Irish Technologies LLC and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of your use of our Services or violation of these Terms.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your access to our Services at any time, with or without cause, and with or without notice. Upon termination:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Your right to use our Services ceases immediately</li>
                <li>We may delete your account and data</li>
                <li>All provisions that should survive termination will remain in effect</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law</h2>
              <p className="text-gray-700">
                These Terms are governed by and construed in accordance with the laws of Ireland, without regard to conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Ireland.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on our website with a new "Last Updated" date. Your continued use of our Services after changes become effective constitutes acceptance of the new Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-8 h-8 text-orange-600 mr-3" />
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Irish Technologies LLC</strong></p>
                <p>📍 123 Technology Drive, Dublin, Ireland D02 XY89</p>
                <p>📧 info@i-rish.com</p>
                <p>📞 +917600240043</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};