import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Building, Target, Users } from 'lucide-react'

const IndustrySolutions = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Industry Solutions</h1>
            <p className="text-xl md:text-2xl text-primary-100">Specialized staffing solutions across multiple industries</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Building className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Technology</h3>
              <p className="text-secondary-600">Software developers, IT professionals, and tech leaders</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Target className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Healthcare</h3>
              <p className="text-secondary-600">Medical professionals, nurses, and healthcare administrators</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Users className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Finance</h3>
              <p className="text-secondary-600">Financial analysts, accountants, and banking professionals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IndustrySolutions
