import React from 'react'

const About = () => {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
              About BizScore
            </h1>
            <p className="text-lg sm:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto">
              Revolutionizing credit assessment for small businesses through innovative AI technology
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                To democratize access to credit for small businesses by providing fair, transparent, and data-driven credit assessment solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We leverage cutting-edge AI and machine learning technologies to analyze business performance beyond traditional credit metrics.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Accessibility</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe every small business deserves a fair chance at accessing credit, regardless of their credit history or background.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparency</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our scoring system is transparent and explainable, helping businesses understand how their creditworthiness is assessed.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're committed to helping small businesses grow by providing them with the financial tools and insights they need to succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose BizScore?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine expertise in finance, technology, and data science to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-primary-600 mb-4">10+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Years Experience</h3>
              <p className="text-gray-600">Combined expertise in fintech and AI</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-primary-600 mb-4">1000+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Businesses Served</h3>
              <p className="text-gray-600">Helping small businesses access credit</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-primary-600 mb-4">95%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accuracy Rate</h3>
              <p className="text-gray-600">Precise credit assessment predictions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
