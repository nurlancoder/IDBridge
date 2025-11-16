import React from 'react'

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  BizScore ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-based credit scoring platform.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">2.1 Personal Information</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                  <li>Register for an account</li>
                  <li>Use our credit scoring services</li>
                  <li>Contact us for support</li>
                  <li>Subscribe to our newsletter</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  This information may include: name, email address, phone number, business information, tax identification numbers, financial data, and other information you choose to provide.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">2.2 Business Data</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To provide our credit scoring services, we collect various types of business data including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Transaction data from POS terminals and payment systems</li>
                  <li>Utility payment history</li>
                  <li>E-commerce and delivery platform data</li>
                  <li>Social media business activity (Instagram, WhatsApp Business)</li>
                  <li>Supplier payment records</li>
                  <li>Location and operational data</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">2.3 Automatically Collected Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  When you access our platform, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>To provide, maintain, and improve our credit scoring services</li>
                  <li>To process your requests and transactions</li>
                  <li>To generate credit risk scores and assessments</li>
                  <li>To communicate with you about your account and our services</li>
                  <li>To send you technical notices, updates, and support messages</li>
                  <li>To respond to your comments, questions, and requests</li>
                  <li>To monitor and analyze trends, usage, and activities</li>
                  <li>To detect, prevent, and address technical issues and fraud</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may share your information in the following situations:
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">4.1 With Credit Organizations</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may share credit scores and assessments with non-bank credit organizations (BOKTs) and microfinance institutions that use our platform to make lending decisions. This sharing is done with your explicit consent.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">4.2 With Service Providers</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may share your information with third-party service providers who perform services for us, such as cloud hosting, data analytics, payment processing, and customer support.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">4.3 Legal Requirements</h3>
                <p className="text-gray-600 leading-relaxed">
                  We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and audits</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Secure data centers and infrastructure</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When we no longer need your personal information, we will securely delete or anonymize it in accordance with our data retention policies and applicable laws.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By using our services, you consent to the transfer of your information to our facilities and those third parties with whom we share it as described in this policy.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-primary-50 rounded-lg p-4">
                  <p className="text-gray-900 font-semibold">BizScore Privacy Team</p>
                  <p className="text-gray-600">Email: privacy@bizscore.com</p>
                  <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
                  <p className="text-gray-600">Address: 123 Business Street, Suite 100, New York, NY 10001</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy

