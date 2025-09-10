import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const PrivacyPolicy = () => {
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
              <span>Legal</span> / <span className="text-orange-600">Privacy Policy</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              At Irish Technologies LLC, we value and respect your privacy. This policy explains how we collect, use, and protect your information.
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
                At Irish Technologies LLC, we value and respect your privacy. Protecting the confidentiality, integrity, and security of your information is our top priority. This Privacy Policy explains in detail the types of information we collect, how we use it, and the conditions under which it may be shared. By accessing or using our website, applications, or services, you consent to the practices described in this policy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                We may update this Privacy Policy periodically to reflect changes in our practices, technologies, or legal requirements. All updates will be posted on this page with a revised "Last Updated" date. We encourage you to review this policy regularly to stay informed.
              </p>
            </div>

            {/* Key Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-8 h-8 text-orange-600 mr-3" />
                Key Terms
              </h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <ul className="space-y-4">
                  <li>
                    <strong className="text-gray-900">"Personally Identifiable Information (PII)"</strong> – Data that identifies you directly, such as name, email, phone number, billing address, or government ID.
                  </li>
                  <li>
                    <strong className="text-gray-900">"User Information"</strong> – All personal, technical, behavioral, and transactional information collected during your use of our services.
                  </li>
                  <li>
                    <strong className="text-gray-900">"Anonymized Data"</strong> – De-identified data that cannot reasonably be used to identify an individual, used for analytics, research, or improvements.
                  </li>
                </ul>
              </div>
            </div>

            {/* Information Collection */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="w-8 h-8 text-orange-600 mr-3" />
                Information We Collect
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Information you provide directly</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Registration details, forms, and account setup.</li>
                    <li>Job applications (resumes, references, interviews).</li>
                    <li>Customer service communications.</li>
                    <li>Participation in surveys, contests, or promotions.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Automatically collected information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>IP address, browser, operating system, and device type.</li>
                    <li>Usage behavior (pages visited, time on site, clicks).</li>
                    <li>Location data (if enabled by the user).</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Third-party sources</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Information from trusted partners, vendors, or recruitment platforms.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Information</h2>
              <p className="text-gray-700 mb-4">Your data is processed only for legitimate business purposes, including:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Delivering and improving services.</li>
                <li>Providing customer support and troubleshooting.</li>
                <li>Sending administrative and promotional communications.</li>
                <li>Meeting regulatory and legal obligations.</li>
                <li>Fraud prevention and cybersecurity protection.</li>
                <li>Market research and responsible advertising (with opt-out options).</li>
              </ul>
            </div>

            {/* Information Disclosure */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Disclosure</h2>
              <p className="text-gray-700 mb-4">We do not sell or rent your personal information. We may share information only when:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>With trusted vendors/partners</strong> – To deliver services on our behalf (e.g., cloud hosting, payment processors).</li>
                <li><strong>For legal compliance</strong> – To respond to subpoenas, lawful requests, or regulatory investigations.</li>
                <li><strong>For business transfers</strong> – In case of a merger, acquisition, or sale of assets, provided privacy protections remain in place.</li>
              </ul>
            </div>

            {/* International Data Transfers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
              <p className="text-gray-700">
                As we operate globally, your information may be transferred and stored outside your country of residence. We implement safeguards such as Standard Contractual Clauses (SCCs) and data protection agreements to ensure compliance with GDPR and other regulations.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Personal information is retained only as long as necessary for business, contractual, or legal obligations.</li>
                <li>Job applicant information may be stored for up to 12 months unless otherwise requested.</li>
                <li>Anonymized data may be retained indefinitely for analytics and research.</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
              <p className="text-gray-700 mb-4">Depending on your jurisdiction, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Access & Portability</strong> – Request a copy of your personal data.</li>
                <li><strong>Correction</strong> – Request correction of inaccurate or outdated information.</li>
                <li><strong>Deletion</strong> – Request deletion of your personal data, subject to legal limitations.</li>
                <li><strong>Restriction & Objection</strong> – Restrict processing or object to certain data uses.</li>
                <li><strong>Withdraw Consent</strong> – Revoke previously granted permissions at any time.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise your rights, please contact us at the details below. Requests will be processed within 30 days as required by applicable laws.
              </p>
            </div>

            {/* Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Lock className="w-8 h-8 text-orange-600 mr-3" />
                Security Measures
              </h2>
              <p className="text-gray-700 mb-4">We adopt a layered security approach including:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Encryption of sensitive information during transmission and storage.</li>
                <li>Multi-factor authentication for employee access.</li>
                <li>Regular audits, penetration tests, and monitoring to detect threats.</li>
                <li>Strict vendor agreements requiring privacy and security safeguards.</li>
              </ul>
              <p className="text-gray-700 mt-4">While we strive for the highest standards, no system is completely immune from risks.</p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
              <p className="text-gray-700">
                We do not knowingly collect data from children under 13 years of age without verified parental consent. If such data is discovered, we will delete it immediately.
              </p>
            </div>

            {/* Commitment */}
            <div className="mb-12 bg-gradient-to-r from-orange-50 to-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
              <p className="text-gray-700 mb-4">
                At Irish Technologies LLC, privacy is more than compliance—it is part of our corporate responsibility and trust. We pledge to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Be transparent about what we collect and why.</li>
                <li>Use data ethically and responsibly.</li>
                <li>Continuously update our policies and practices to meet global standards.</li>
                <li>Empower users with control and choice over their information.</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                For questions, concerns, or requests regarding this Privacy Policy, please contact us at:
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