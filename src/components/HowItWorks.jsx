import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Digital ID + Tax ID Verification",
      description: "Verifies user ID. If the business is registered, tax ID and tax information is retrieved. If unregistered, a 'Select Business Type' window appears.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Data Sources are Selected",
      description: "POS payments, Utility payments, Delivery/e-commerce sales, Instagram/WhatsApp Business metrics, Supplier payment uploads",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Data Processing",
      description: "Sales turnover, Income stability, Expense ratio, Payment delays, Daily trend score",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      number: "4",
      title: "AI Business Score is Generated",
      description: "Example: BizScore: 74/100 — Low Risk. The AI model (RandomForest/GBM) analyzes all data and calculates a risk score from 0–100.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      number: "5",
      title: "BOKT and Microfinance Credit Offers",
      description: "200–1000 AZN micro credit, 7–60 days. BOKTs can provide instant micro-credit based on this score.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A <span className="font-bold text-primary-600">simple 5-step process</span> for business owners
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Steps */}
          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:block absolute left-8 top-24 w-0.5 h-full bg-primary-300"></div>
                )}
                
                <div className="relative bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-2 border-primary-100 hover:border-primary-300">
                  <div className="flex flex-col sm:flex-row items-start">
                    {/* Step Number & Icon */}
                    <div className="flex items-center mb-4 sm:mb-0 sm:mr-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-lg">
                          {step.number}
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-primary-100 rounded-full p-2 border-2 border-white">
                          <div className="text-primary-600">
                            {step.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Final Score Display */}
          <div className="mt-12 sm:mt-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-xl shadow-xl p-8 sm:p-12 text-center">
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <p className="text-lg sm:text-xl mb-4 opacity-90">Result:</p>
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6 mb-4">
              <p className="text-2xl sm:text-3xl font-bold mb-2">BizScore</p>
              <p className="text-5xl sm:text-6xl md:text-7xl font-black">74/100</p>
              <p className="text-lg sm:text-xl mt-2 opacity-90">(Low Risk)</p>
            </div>
            <p className="text-lg sm:text-xl font-semibold mt-6">
              ➡ BOKTs can provide instant micro-credit based on this score
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
