import React from 'react'

const CompetitiveAdvantage = () => {
  const competitors = [
    {
      name: "Credit bureaus",
      status: "❌",
      description: "Only look at credit history"
    },
    {
      name: "Bank scoring systems",
      status: "❌",
      description: "Only official income + credit history"
    },
    {
      name: "Local startups",
      status: "❌",
      description: "Don't score based on marketplace + turnover + mobile usage + expenses + utilities"
    }
  ]

  return (
    <section id="competitive" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Does This Idea Exist?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-12">
            {competitors.map((competitor, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <div className="text-3xl sm:text-4xl mr-4">{competitor.status}</div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {competitor.name}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {competitor.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-2xl p-8 sm:p-12 text-center shadow-xl">
            <div className="mb-6">
              <svg className="w-20 h-20 mx-auto mb-4 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              This field is COMPLETELY EMPTY.
            </h3>
            <p className="text-2xl sm:text-3xl font-semibold mb-4">
              Meaning you'll be the first. 🚀
            </p>
            <p className="text-xl opacity-90">
              BizScore — the first platform to generate AI credit score based on Digital ID + alternative data
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompetitiveAdvantage
