import React, { useState } from 'react'

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    {
      title: 'Getting Started',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      articles: [
        { title: 'How to create an account?', description: 'Step-by-step guide to setting up your BizScore account' },
        { title: 'What information do I need?', description: 'Learn about the data required for credit assessment' },
        { title: 'How long does it take?', description: 'Understanding the credit scoring process timeline' },
      ]
    },
    {
      title: 'Credit Scoring',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      articles: [
        { title: 'How is my credit score calculated?', description: 'Understanding the AI-based scoring algorithm' },
        { title: 'What factors affect my score?', description: 'Learn about the key metrics that influence your credit score' },
        { title: 'How can I improve my score?', description: 'Tips and strategies to boost your creditworthiness' },
      ]
    },
    {
      title: 'Data & Privacy',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      articles: [
        { title: 'How is my data protected?', description: 'Learn about our security measures and data protection' },
        { title: 'Who can see my information?', description: 'Understanding data sharing and privacy policies' },
        { title: 'Can I delete my data?', description: 'How to request data deletion and manage your information' },
      ]
    },
    {
      title: 'Account Management',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      articles: [
        { title: 'How to update my business information?', description: 'Guide to modifying your account details' },
        { title: 'How to change my password?', description: 'Steps to reset or change your account password' },
        { title: 'How to close my account?', description: 'Process for deactivating or closing your account' },
      ]
    },
    {
      title: 'Billing & Payments',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      articles: [
        { title: 'What are the pricing plans?', description: 'Overview of our service pricing and packages' },
        { title: 'How do I pay for services?', description: 'Payment methods and billing information' },
        { title: 'Can I get a refund?', description: 'Understanding our refund policy and process' },
      ]
    },
    {
      title: 'Technical Support',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      articles: [
        { title: 'How to contact support?', description: 'Ways to reach our technical support team' },
        { title: 'System requirements', description: 'Technical specifications and browser compatibility' },
        { title: 'Troubleshooting common issues', description: 'Solutions to frequently encountered problems' },
      ]
    }
  ]

  const popularArticles = [
    { title: 'How does BizScore work?', category: 'Getting Started' },
    { title: 'What data sources are used?', category: 'Credit Scoring' },
    { title: 'How accurate is the credit score?', category: 'Credit Scoring' },
    { title: 'Is my financial data secure?', category: 'Data & Privacy' },
    { title: 'How to interpret my credit score?', category: 'Credit Scoring' },
  ]

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
              Help Center
            </h1>
            <p className="text-lg sm:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-8">
              Find answers to common questions and get the support you need
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-14 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xl"
                />
                <svg className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Articles</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {popularArticles.map((article, index) => (
              <a
                key={index}
                href="#"
                className="bg-gray-50 hover:bg-primary-50 p-4 rounded-lg border border-gray-200 hover:border-primary-300 transition-all duration-300 group"
              >
                <p className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600">{article.title}</p>
                <p className="text-sm text-gray-500">{article.category}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.articles.map((article, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <p className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600">
                          {article.title}
                        </p>
                        <p className="text-sm text-gray-600">{article.description}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center bg-white p-12 rounded-2xl shadow-xl">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Can't find what you're looking for? Our support team is here to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@bizscore.com"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Email Support
              </a>
              <a
                href="/faq"
                className="bg-white border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300"
              >
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Help

