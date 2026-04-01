import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Shield, FileText, CheckCircle } from 'lucide-react'

const PayrollServices = () => {
  const features = [
    'Automated payroll processing',
    'Tax compliance and filing',
    'Benefits administration',
    'Detailed reporting and analytics'
  ]

  return (
    <div>
      <section className="relative text-white py-20 lg:pt-32 bg-cover bg-center bg-no-repeat hero-bg-position" style={{ backgroundImage: 'url(/hero.webp)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/80 to-primary-800/80"></div>
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Payroll Services</h1>
            <p className="text-xl md:text-2xl text-primary-100">Comprehensive payroll management for temporary and contract employees</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">Streamlined Payroll Solutions</h2>
              <p className="text-secondary-600 mb-6">Let us handle the complexity of payroll processing while you focus on your business. Our payroll services ensure accuracy, compliance, and timely payments for all your temporary staff.</p>
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
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Payroll Services" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PayrollServices
