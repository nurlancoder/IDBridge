import React from 'react'

const ValueProposition = () => {
  return (
    <section id="value-proposition" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How to Sell to BOKTs?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              The PERFECT product for non-bank credit organizations
            </p>
          </div>

          {/* Why BOKT instead of Banks */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8 border border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-900">
              Why BOKT, Not Banks?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-l-4 border-red-400 rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-bold mb-3 text-gray-900">❌ For Banks:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">•</span>
                    <span>Don't take risks → only want official credit history</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">•</span>
                    <span>Don't accept "Alternative data"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">•</span>
                    <span>Compliance is very heavy</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white border-l-4 border-green-500 rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-bold mb-3 text-gray-900">✅ PERFECT for BOKTs:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Provide micro-credit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Assess based on daily income</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Happily accept alternative data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Decision processes are simpler and faster</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Already targeting this segment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Value Proposition */}
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 sm:p-12 mb-8 border border-primary-100">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 ml-4">
                <blockquote className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed mb-4 text-gray-900">
                  "You cannot provide credit to micro business owners because their turnover is not visible in the bank system.
                </blockquote>
                <blockquote className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed mb-4 text-gray-900">
                  We collect the real turnover, expense behavior, and marketplace sales of these businesses and convert them into a <span className="text-primary-600">0–100 risk score</span>.
                </blockquote>
                <blockquote className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed text-gray-900">
                  You simply make credit decisions by looking at this score."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Benefits for BOKT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">New Market</h3>
              <p className="text-gray-600">Ability to provide credit to micro businesses</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Risk Reduction</h3>
              <p className="text-gray-600">Make decisions with accurate risk score</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Revenue Growth</h3>
              <p className="text-gray-600">Expand new credit portfolio</p>
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-primary-50 border border-primary-200 rounded-xl px-8 py-4">
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                This product creates immediate value for BOKTs. 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValueProposition
