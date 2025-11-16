import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <svg className="w-20 h-20 mx-auto mb-6 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            1-Minute Pitch
          </h2>

          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 sm:p-8 md:p-12 mb-8">
            <blockquote className="text-lg sm:text-xl md:text-2xl leading-relaxed font-medium">
              "BizScore is an alternative credit score for small business owners.
              <br /><br />
              There are thousands of micro and home-based businesses that make daily sales, generate income, but cannot get credit because they have no official credit history. 
              <br /><br />
              BizScore combines Digital ID, Tax ID, utility payments, POS data, delivery sales, and even Instagram/WhatsApp Business activity to generate a <span className="text-primary-200 font-bold">0–100 business risk score</span>.
              <br /><br />
              Based on this score, BOKTs can provide instant micro-credit. Credit doors open for businesses, BOKTs reduce risk, economic activity increases.
              <br /><br />
              <span className="text-primary-200 font-bold">BizScore — converts your business activity into a credit score."</span>
            </blockquote>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/"
              className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Back to Top
            </Link>
            <Link 
              to="/features"
              className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-400 transition-all duration-300 border-2 border-white/30"
            >
              View Features
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
