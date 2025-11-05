import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Crown, Search, Users, CheckCircle } from 'lucide-react'

const ExecutiveSearch = () => {
  const services = [
    'Confidential executive search',
    'Comprehensive candidate assessment',
    'Market intelligence and insights',
    'Negotiation and onboarding support'
  ]

  return (
    <div>
      <section className="relative text-white py-20 lg:pt-32 bg-cover bg-center bg-no-repeat hero-bg-position" style={{ backgroundImage: 'url(/hero.webp)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/80 to-primary-800/80"></div>
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Executive Search Services</h1>
            <p className="text-xl md:text-2xl text-primary-100">Senior-level talent acquisition for leadership positions</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">C-Level and Executive Placements</h2>
              <p className="text-secondary-600 mb-6">Our executive search team specializes in identifying and attracting top-tier leadership talent. We understand the unique challenges of executive recruitment and deliver results that drive organizational success.</p>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-secondary-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Executive Search" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExecutiveSearch
