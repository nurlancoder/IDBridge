import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent"></div>

      <div className="container-custom relative z-10 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo/Brand with Animation */}
          <div className="mb-6 flex justify-center">
            <div className="bg-white/25 backdrop-blur-md rounded-2xl p-4 shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
            <span className="block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-100">
              BizScore
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 text-white font-bold">
              AI-Based Alternative Credit Score
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-4 font-semibold">
            For Small Businesses
          </p>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-2">
              <span className="font-bold">Your business activity is your credit score.</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/90">
              No credit history? No problem.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
            <a 
              href="#problem" 
              className="group bg-white text-primary-600 px-6 py-3 rounded-xl font-bold text-base hover:bg-primary-50 transition-all duration-300 shadow-2xl hover:shadow-primary-400/50 transform hover:-translate-y-1 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center">
                Discover the Problem
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <Link 
              to="/solutions"
              className="group bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-bold text-base hover:bg-white/30 transition-all duration-300 border-2 border-white/40 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center">
                How It Works
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
            <Link to="/about" className="text-white/90 hover:text-white transition-colors duration-300 flex items-center group">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              About BizScore
            </Link>
            <Link to="/services" className="text-white/90 hover:text-white transition-colors duration-300 flex items-center group">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Our Services
            </Link>
            <Link to="/features" className="text-white/90 hover:text-white transition-colors duration-300 flex items-center group">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Features
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
