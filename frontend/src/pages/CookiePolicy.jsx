import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowLeft, Cookie, Settings, Eye, BarChart } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const CookiePolicy = () => {
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
              <span>Legal</span> / <span className="text-orange-600">Cookie Policy</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cookie className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cookie Policy
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Learn how Irish Technologies LLC uses cookies and similar technologies to enhance your browsing experience.
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
                This Cookie Policy explains how Irish Technologies LLC ("we," "us," or "our") uses cookies and similar tracking technologies when you visit our website at www.irish-technologies.com (the "Website"). This policy should be read together with our Privacy Policy and Terms of Service.
              </p>
            </div>

            {/* What Are Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Cookie className="w-8 h-8 text-orange-600 mr-3" />
                What Are Cookies?
              </h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They help websites remember information about your visit, such as your preferred language and other settings, to make your next visit easier and the site more useful to you.
                </p>
                <p className="text-gray-700">
                  Similar technologies include web beacons, pixels, and local storage, which serve similar functions to cookies in collecting information about how you interact with our Website.
                </p>
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
              
              <div className="space-y-8">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Settings className="w-6 h-6 text-blue-600 mr-3" />
                    Essential Cookies
                  </h3>
                  <p className="text-gray-700 mb-4">
                    These cookies are necessary for the Website to function properly. They enable basic functions like page navigation, secure access to areas of the Website, and maintaining session state.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Session management cookies</li>
                    <li>Authentication cookies</li>
                    <li>Security cookies</li>
                    <li>Load balancing cookies</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4 font-medium">
                    These cookies cannot be disabled as they are essential for the Website's operation.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <BarChart className="w-6 h-6 text-green-600 mr-3" />
                    Analytics Cookies
                  </h3>
                  <p className="text-gray-700 mb-4">
                    These cookies collect information about how visitors use our Website, such as which pages are visited most often and how users navigate through the site. This helps us improve our Website's performance and user experience.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Google Analytics cookies</li>
                    <li>Traffic analysis cookies</li>
                    <li>Performance monitoring cookies</li>
                    <li>User behavior tracking cookies</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 rounded-2xl p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Eye className="w-6 h-6 text-purple-600 mr-3" />
                    Functional Cookies
                  </h3>
                  <p className="text-gray-700 mb-4">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences, language settings, and other customizations.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Language preference cookies</li>
                    <li>Theme/display preference cookies</li>
                    <li>Form data storage cookies</li>
                    <li>User interface customization cookies</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 rounded-2xl p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Marketing and Advertising Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies track your browsing habits to deliver advertisements that are more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Targeted advertising cookies</li>
                    <li>Social media integration cookies</li>
                    <li>Retargeting cookies</li>
                    <li>Conversion tracking cookies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third Party Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We also use cookies from third-party services to enhance your experience:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
                  <p className="text-sm text-gray-600">Helps us understand how visitors interact with our Website</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Social Media Platforms</h4>
                  <p className="text-sm text-gray-600">Enable sharing and social media integration features</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Customer Support Tools</h4>
                  <p className="text-sm text-gray-600">Power our live chat and customer support features</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Marketing Platforms</h4>
                  <p className="text-sm text-gray-600">Help us deliver relevant content and advertisements</p>
                </div>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
              
              <div className="bg-gradient-to-r from-orange-50 to-gray-50 rounded-2xl p-8 mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Consent Management</h3>
                <p className="text-gray-700 mb-4">
                  When you first visit our Website, you'll see a cookie consent banner. You can choose to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your cookie preferences</li>
                </ul>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Browser Settings</h3>
              <p className="text-gray-700 mb-4">
                You can also manage cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>View and delete cookies</li>
                <li>Block cookies from specific sites</li>
                <li>Block third-party cookies</li>
                <li>Clear all cookies when closing the browser</li>
                <li>Set up notifications when cookies are being set</li>
              </ul>
              
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>Please note:</strong> Disabling cookies may affect the functionality of our Website and your user experience. Some features may not work properly if cookies are disabled.
                </p>
              </div>
            </div>

            {/* Browser-Specific Instructions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Browser-Specific Cookie Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Google Chrome</h4>
                  <p className="text-sm text-gray-600">Settings → Privacy and Security → Cookies and other site data</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Mozilla Firefox</h4>
                  <p className="text-sm text-gray-600">Options → Privacy & Security → Cookies and Site Data</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Safari</h4>
                  <p className="text-sm text-gray-600">Preferences → Privacy → Manage Website Data</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Microsoft Edge</h4>
                  <p className="text-sm text-gray-600">Settings → Cookies and site permissions → Cookies and site data</p>
                </div>
              </div>
            </div>

            {/* Data Protection Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Data Protection Rights</h2>
              <p className="text-gray-700 mb-4">
                Under data protection laws, including GDPR, you have rights regarding your personal data collected through cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Right to Access:</strong> Request information about the data we collect</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your data</li>
                <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                <li><strong>Right to Object:</strong> Object to certain types of data processing</li>
                <li><strong>Right to Data Portability:</strong> Request a copy of your data in a portable format</li>
              </ul>
            </div>

            {/* Updates to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
              <p className="text-gray-700">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. We will notify you of any significant changes by posting the updated policy on our Website with a new "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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