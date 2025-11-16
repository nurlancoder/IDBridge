import React from 'react'

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-primary-200 mt-4">Last updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  By accessing or using BizScore's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this service.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  These terms apply to all users of the service, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Use License</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Permission is granted to temporarily access the materials on BizScore's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on BizScore's website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Service Description</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  BizScore provides AI-based alternative credit scoring services for small businesses. Our platform analyzes various data points to generate credit risk scores from 0-100.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">4. User Accounts</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Data and Privacy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  By using our services, you agree to provide accurate and complete information. We collect and process your data in accordance with our Privacy Policy.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  You retain ownership of any data you submit to our platform. By submitting data, you grant us a license to use, process, and analyze that data to provide our credit scoring services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Prohibited Uses</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You may not use our service:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>In any way that violates any applicable national or international law or regulation</li>
                  <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                  <li>To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity</li>
                  <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the service</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The service and its original content, features, and functionality are and will remain the exclusive property of BizScore and its licensors. The service is protected by copyright, trademark, and other laws.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Disclaimer</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, BizScore excludes all representations, warranties, and conditions relating to our website and the use of this website.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Nothing in this disclaimer will limit or exclude our liability for death or personal injury resulting from negligence, limit or exclude our liability for fraud or fraudulent misrepresentation, or limit any of our liabilities in any way that is not permitted under applicable law.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In no event shall BizScore, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our total liability to you for all claims arising from or related to the use of our services shall not exceed the amount you paid to us in the twelve months prior to the action giving rise to liability.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
                <p className="text-gray-600 leading-relaxed">
                  You agree to defend, indemnify, and hold harmless BizScore and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-primary-50 rounded-lg p-4 mt-4">
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

export default Terms

