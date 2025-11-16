import React from 'react'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Solution from '../components/Solution'
import HowItWorks from '../components/HowItWorks'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <CTA />
    </div>
  )
}

export default Home
