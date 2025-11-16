import React from 'react'

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Learn about how we use cookies and similar technologies on our platform
            </p>
            <p className="text-sm text-primary-200 mt-4">Last updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owners.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Cookies allow a website to recognize your device and store some information about your preferences or past actions. This helps us provide you with a better experience when you browse our website and also allows us to improve our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  BizScore uses cookies and similar tracking technologies to track activity on our platform and hold certain information. We use cookies for the following purposes:
                </p>
                
                <div className="space-y-6 mt-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Examples:</strong> Authentication cookies, session management cookies, security cookies
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Cookies</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the way our website works.
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Examples:</strong> Analytics cookies, performance monitoring cookies
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Functionality Cookies</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, personalized features.
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Examples:</strong> Preference cookies, language selection cookies, user interface customization cookies
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Targeting/Advertising Cookies</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant content on other sites.
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Examples:</strong> Marketing cookies, advertising cookies, social media cookies
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
                
                <div className="overflow-x-auto mt-6">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cookie Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">session_id</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Maintains user session</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Session</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">auth_token</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Authentication and security</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">30 days</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">preferences</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Stores user preferences</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">1 year</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">analytics_id</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Website analytics</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  These third-party cookies are subject to the respective privacy policies of these external services. We have no control over these cookies.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your ability to use our website.
                </p>
                
                <div className="bg-primary-50 rounded-lg p-6 mt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                    <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                    <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                    <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Cookie Consent</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When you first visit our website, we will ask for your consent to use cookies. You can choose to accept or decline cookies. You can also change your cookie preferences at any time through your browser settings or by contacting us.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Please note that disabling certain cookies may affect the functionality of our website and your ability to access certain features.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Do Not Track Signals</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Some browsers incorporate a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals should be interpreted.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We do not currently respond to DNT browser signals or mechanisms. We will continue to monitor developments around DNT browser technology and the implementation of a standard.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Updates to This Cookie Policy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. We will notify you of any material changes by posting the new Cookie Policy on this page.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="bg-primary-50 rounded-lg p-4">
                  <p className="text-gray-900 font-semibold">BizScore Support</p>
                  <p className="text-gray-600">Email: support@bizscore.com</p>
                  <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cookies

