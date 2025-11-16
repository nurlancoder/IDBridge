import React from 'react'

const SystemArchitecture = () => {
  const layers = [
    {
      title: "SME Mobile/Web App",
      description: "Business owners register here and share their data",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Business Identity Layer",
      description: "Gov API, Tax DB - Digital ID + Tax ID verification",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Data Sources Aggregation",
      description: "POS/Payment apps, Utility bills, E-commerce (Wolt/Bolt), Social commerce (IG/WhatsApp)",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: "AI Business Scoring",
      description: "Calculates risk score from 0–100 using RandomForest/GBM model",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "BOKT / Microcredit API",
      description: "Non-bank credit organizations provide credit based on this score",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <section id="architecture" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            System Architecture
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            System architecture optimized for SMEs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Architecture Diagram */}
          <div className="space-y-6">
            {layers.map((layer, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < layers.length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-6 bg-gray-300 z-0"></div>
                )}
                
                {/* Layer Box */}
                <div className="relative bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-primary-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mr-6">
                      {layer.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-primary-600 text-white rounded-full text-sm font-semibold mr-3">
                          {index + 1}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                          {layer.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {layer.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Points */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure</h3>
              <p className="text-gray-600">Secure verification with Digital ID</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast</h3>
              <p className="text-gray-600">Real-time data processing and scoring</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accurate</h3>
              <p className="text-gray-600">Accurate risk assessment with AI model</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SystemArchitecture
