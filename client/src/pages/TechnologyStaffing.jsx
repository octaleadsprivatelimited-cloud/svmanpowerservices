import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Server, Database, CheckCircle } from 'lucide-react'

const TechnologyStaffing = () => {
  const roles = [
    'Software Developers',
    'DevOps Engineers',
    'Data Scientists',
    'Cybersecurity Specialists',
    'Product Managers',
    'Technical Architects'
  ]

  return (
    <div>
      <section className="relative text-white py-20 lg:pt-32 bg-cover bg-center bg-no-repeat hero-bg-position" style={{ backgroundImage: 'url(/hero.webp)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/80 to-primary-800/80"></div>
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Technology Staffing</h1>
            <p className="text-xl md:text-2xl text-primary-100">Connect with top tech talent for your digital transformation</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">Tech Talent Solutions</h2>
              <p className="text-secondary-600 mb-6">We specialize in placing skilled technology professionals who can drive innovation and digital growth in your organization.</p>
              <ul className="space-y-3">
                {roles.map((role, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-secondary-700">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Technology Staffing" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TechnologyStaffing
