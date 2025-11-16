import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What is BizScore?',
          answer: 'BizScore is an AI-based alternative credit scoring platform designed specifically for small businesses. We analyze various data points including business activity, cash flow, utility payments, and e-commerce sales to generate a comprehensive credit risk score from 0-100.'
        },
        {
          question: 'How does BizScore differ from traditional credit scoring?',
          answer: 'Unlike traditional credit scoring that relies heavily on credit history, BizScore uses alternative data sources such as POS transactions, utility payments, delivery app sales, and social media business activity. This allows us to assess creditworthiness for businesses that may not have extensive credit history.'
        },
        {
          question: 'Who can use BizScore?',
          answer: 'BizScore is designed for small businesses, including registered businesses and home-based businesses. Whether you have a formal credit history or not, if you have business activity, you can get a credit score through our platform.'
        },
        {
          question: 'Is BizScore free to use?',
          answer: 'We offer different pricing plans depending on your needs. Contact us to learn more about our pricing options and see which plan works best for your business.'
        }
      ]
    },
    {
      category: 'Credit Scoring',
      questions: [
        {
          question: 'How is my credit score calculated?',
          answer: 'Your BizScore is calculated using advanced AI algorithms (RandomForest/GBM models) that analyze multiple factors including: business turnover, expense patterns, utility payment history, POS transaction data, e-commerce sales, social media engagement, and supplier payment consistency. The score ranges from 0-100, with higher scores indicating lower risk.'
        },
        {
          question: 'What data sources does BizScore use?',
          answer: 'For registered businesses, we use: Digital ID verification, Tax ID information, POS/terminal payment data, utility payment history, delivery app data (Wolt/Bolt), and location stability. For unregistered businesses, we analyze: WhatsApp Business activity, Instagram Shop engagement, e-commerce delivery counts, repeat customer rates, receipt/document images, and sales intervals.'
        },
        {
          question: 'How accurate is the BizScore?',
          answer: 'Our AI models have been trained on extensive datasets and achieve high accuracy rates. The scoring system is continuously improved based on real-world performance data. However, credit decisions should always be made in conjunction with other factors and professional judgment.'
        },
        {
          question: 'How long does it take to get a credit score?',
          answer: 'The scoring process is typically completed in real-time or within minutes after you provide the necessary data. The exact time depends on the amount of data being processed and the complexity of your business profile.'
        },
        {
          question: 'Can I improve my credit score?',
          answer: 'Yes! Your BizScore can improve over time by maintaining consistent business activity, making regular utility payments on time, increasing sales volume, building customer loyalty, and maintaining stable supplier relationships. Our platform provides actionable insights to help you improve your score.'
        }
      ]
    },
    {
      category: 'Data & Privacy',
      questions: [
        {
          question: 'How is my data protected?',
          answer: 'We use enterprise-grade security measures including end-to-end encryption, secure data centers, and regular security audits. Your financial data is protected with the highest industry standards and we comply with GDPR and other data protection regulations.'
        },
        {
          question: 'Who can see my credit score?',
          answer: 'Your credit score is shared only with non-bank credit organizations (BOKTs) and microfinance institutions that you authorize. We never share your data without your explicit consent. You have full control over who can access your credit information.'
        },
        {
          question: 'Can I delete my data?',
          answer: 'Yes, you can request deletion of your data at any time. Contact our support team to initiate the data deletion process. Please note that some data may be retained for legal or regulatory compliance purposes.'
        },
        {
          question: 'Is my data sold to third parties?',
          answer: 'No, we never sell your personal or business data to third parties. Your data is used solely for credit scoring purposes and is only shared with authorized credit organizations with your consent.'
        }
      ]
    },
    {
      category: 'Account & Technical',
      questions: [
        {
          question: 'How do I create an account?',
          answer: 'Creating an account is simple. Visit our website, click on "Get Started", and follow the registration process. You\'ll need to provide basic business information and verify your identity using Digital ID.'
        },
        {
          question: 'What if I forget my password?',
          answer: 'You can reset your password by clicking on "Forgot Password" on the login page. You\'ll receive a password reset link via email to create a new password.'
        },
        {
          question: 'What browsers are supported?',
          answer: 'BizScore works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your browser for the best experience.'
        },
        {
          question: 'Is there a mobile app?',
          answer: 'Currently, BizScore is available as a web application that is fully responsive and works on mobile devices. We are working on native mobile apps for iOS and Android, which will be available soon.'
        },
        {
          question: 'How do I update my business information?',
          answer: 'You can update your business information at any time by logging into your account and navigating to the "Settings" or "Profile" section. Changes may require verification depending on the type of information being updated.'
        }
      ]
    },
    {
      category: 'Credit & Lending',
      questions: [
        {
          question: 'Can I get a loan based on my BizScore?',
          answer: 'Yes! Non-bank credit organizations (BOKTs) and microfinance institutions use BizScore to make lending decisions. A good BizScore can help you access micro-credit ranging from 200-1000 AZN with terms of 7-60 days.'
        },
        {
          question: 'What is a good BizScore?',
          answer: 'BizScores are rated on a scale of 0-100. Generally, scores above 70 are considered low-risk, scores between 50-70 are moderate risk, and scores below 50 are higher risk. However, each lender may have their own criteria.'
        },
        {
          question: 'How often is my score updated?',
          answer: 'Your BizScore is updated in real-time as new data becomes available. We continuously monitor your business activity and update your score accordingly. You can view your current score at any time in your dashboard.'
        },
        {
          question: 'Can I see why my score is low?',
          answer: 'Yes, our platform provides detailed insights into the factors affecting your score. You can see which areas are contributing positively or negatively to your creditworthiness, helping you understand how to improve.'
        }
      ]
    }
  ]

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 text-white py-16 md:py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/25 backdrop-blur-md rounded-2xl mb-6 shadow-2xl">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto">
              Find quick answers to the most common questions about BizScore
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-primary-50 px-6 py-4 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                </div>
                <div className="divide-y divide-gray-100">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex
                    const isOpen = openIndex === globalIndex
                    return (
                      <div key={questionIndex} className="p-6">
                        <button
                          onClick={() => toggleQuestion(globalIndex)}
                          className="w-full flex items-center justify-between text-left group"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors pr-8">
                            {faq.question}
                          </h3>
                          <div className="flex-shrink-0">
                            <svg
                              className={`w-6 h-6 text-primary-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </button>
                        {isOpen && (
                          <div className="mt-4 text-gray-600 leading-relaxed animate-fadeIn">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center bg-white p-12 rounded-2xl shadow-xl">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Can't find the answer you're looking for? Our support team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/help"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Visit Help Center
              </a>
              <a
                href="mailto:support@bizscore.com"
                className="bg-white border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ

