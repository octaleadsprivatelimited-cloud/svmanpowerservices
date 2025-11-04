import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Target, Shield, Users, CheckCircle } from 'lucide-react'

const PermanentPlacement = () => {
  const features = [
    'Comprehensive candidate screening',
    'Cultural fit assessment',
    '90-day placement guarantee',
    'Ongoing support and follow-up'
  ]

  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Permanent Placement Services</h1>
            <p className="text-xl md:text-2xl text-primary-100">Find the perfect long-term fit for your organization</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">Quality Permanent Placements</h2>
              <p className="text-secondary-600 mb-6">Our permanent placement services focus on finding candidates who will thrive in your organization long-term. We take the time to understand your culture, values, and specific requirements.</p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-secondary-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Permanent Placement" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PermanentPlacement
