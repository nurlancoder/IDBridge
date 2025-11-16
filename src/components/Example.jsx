import React from 'react'

const Example = () => {
  const scoreFactors = [
    { name: "Turnover", score: 30, description: "stable" },
    { name: "Raw material costs", score: 15, description: "same every month" },
    { name: "Utilities", score: 10, description: "no delays" },
    { name: "Instagram sales", score: 10, description: "active" },
    { name: "POS pattern", score: 15, description: "exists" },
    { name: "Owner behavior", score: 10, description: "stable" }
  ]

  const totalScore = scoreFactors.reduce((sum, factor) => sum + factor.score, 0)

  return (
    <section id="example" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Does It Work in Real Life?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Example: Aysel "Home Bread" Business
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Business Info */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 mb-8 shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Aysel "Home Bread"</h3>
                <p className="text-gray-600">Small Business Owner</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500 mb-1">Daily sales</p>
                <p className="text-xl font-bold text-gray-900">60–100 AZN</p>
                <p className="text-sm text-gray-600">(cash)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500 mb-1">Online sales</p>
                <p className="text-xl font-bold text-gray-900">10–15 sales/week</p>
                <p className="text-sm text-gray-600">(Wolt, Instagram)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500 mb-1">Expenses</p>
                <p className="text-xl font-bold text-gray-900">Fixed payments</p>
                <p className="text-sm text-gray-600">(flour, rent, gas)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500 mb-1">Delays</p>
                <p className="text-xl font-bold text-green-600">Never</p>
                <p className="text-sm text-gray-600">Perfect history</p>
              </div>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded">
              <p className="text-primary-900 font-semibold">
                ⚠ Banks "don't see" this business and don't provide credit. But BizScore sees this business!
              </p>
            </div>
          </div>

          {/* Our System Analysis */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 mb-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Our System Analysis
            </h3>

            <div className="space-y-4 mb-6">
              {scoreFactors.map((factor, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary-600 font-bold">{factor.score}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{factor.name}</p>
                        <p className="text-sm text-gray-600">{factor.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary-600">+{factor.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Final Score */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl p-8 text-center shadow-lg">
              <p className="text-lg sm:text-xl mb-4 opacity-90">Final Score:</p>
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6 mb-4">
                <p className="text-5xl sm:text-6xl md:text-7xl font-black">{totalScore}/100</p>
              </div>
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-lg">LOW-RISK</span>
              </div>
              <p className="text-xl font-semibold mt-6">
                This business can easily get micro-credit from BOKTs! ✅
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Example
