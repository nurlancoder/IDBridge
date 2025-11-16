import React from 'react'

const Solution = () => {
  const registeredBusinessData = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      ),
      title: "Digital ID + Tax ID Verification",
      description: "Verifies user ID, retrieves tax ID and tax information"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: "POS / Terminal / Card Payments",
      description: "Card payment data and sales patterns"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Delivery App Data",
      description: "Wolt/Bolt sales volume and customer behavior"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Utility Payments",
      description: "Electricity, water, internet payment stability"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location Stability",
      description: "Preferred area, stable business location?"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Supplier Payment Consistency",
      description: "Consistent payments to suppliers"
    }
  ]

  const unregisteredBusinessData = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "WhatsApp Business Activity",
      description: "WhatsApp Business activity and customer interactions"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Instagram Shop Engagement",
      description: "Instagram Shop sales and engagement metrics"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "E-commerce Delivery Counts",
      description: "Delivery counts and customer satisfaction"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Repeat Customer Rate",
      description: "Number of loyal customers and repeat purchases"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Receipt/Document Images",
      description: "Photo OCR analysis of receipts and documents"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Sales Intervals",
      description: "Trend ups/downs and sales pattern analysis"
    }
  ]

  return (
    <section id="solution" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Solution
          </h2>
          <p className="text-xl sm:text-2xl text-primary-600 font-semibold mb-2">
            "Your business activity is your credit score"
          </p>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            BizScore collects the following flexible and alternative data and generates a credit risk score from 0–100 using an AI model
          </p>
        </div>

        {/* Registered Businesses */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              📌 For Registered Businesses
            </h3>
            <p className="text-gray-600">Officially registered businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {registeredBusinessData.map((source, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-300 transform hover:-translate-y-1"
              >
                <div className="text-primary-600 mb-4">
                  {source.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {source.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {source.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Unregistered Businesses */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              📌 For Unregistered Businesses (home-based)
            </h3>
            <p className="text-gray-600">Informal and home-based businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {unregisteredBusinessData.map((source, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-accent-50 to-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-accent-100 hover:border-accent-300 transform hover:-translate-y-1"
              >
                <div className="text-accent-600 mb-4">
                  {source.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {source.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {source.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Score Badge */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full shadow-lg">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-bold text-xl">
              This data → AI model → BizScore (0–100)
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
