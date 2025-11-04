import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, Calculator, CheckCircle } from 'lucide-react'

const FinanceStaffing = () => {
  const roles = [
    'Financial Analysts',
    'Accountants',
    'Investment Bankers',
    'Risk Managers',
    'Compliance Officers',
    'CFOs and Finance Directors'
  ]

  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Finance Staffing</h1>
            <p className="text-xl md:text-2xl text-primary-100">Expert financial professionals for your business growth</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">Financial Expertise</h2>
              <p className="text-secondary-600 mb-6">We connect you with experienced finance professionals who understand regulatory requirements and can drive financial performance.</p>
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
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Finance Staffing" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FinanceStaffing
