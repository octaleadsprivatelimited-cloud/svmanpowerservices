import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import SEO from '../components/SEO'

const About = () => {
  const missionPoints = [
    'Provide skilled manpower tailored to client requirements.',
    'Ensure timely recruitment and deployment of personnel.',
    'Maintain compliance with labor laws and statutory regulations.',
    'Build long-term partnerships with clients through reliable service.'
  ]

  return (
    <div>
      <SEO
        title="About Us - Shrijaa Outsourcing Consultants"
        description="Shrijaa Outsourcing Consultants is a professional manpower solutions provider offering permanent recruitment, temporary staffing, and contract manpower outsourcing."
        keywords="Shrijaa Outsourcing Consultants, manpower solutions, recruitment, temporary staffing, contract manpower outsourcing, Hyderabad"
        url="https://shrijaaoutsourcing.com/about"
      />
      <section className="relative text-white py-20 lg:pt-32 bg-cover bg-center bg-no-repeat hero-bg-position" style={{ backgroundImage: 'url(/hero.webp)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/80 to-primary-800/80"></div>
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-primary-100 leading-relaxed"
            >
              Shrijaa Outsourcing Consultants
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              About Shrijaa Outsourcing Consultants
            </h2>
            <div className="space-y-6 text-secondary-700 leading-relaxed">
              <p className="text-lg">
                Shrijaa Outsourcing Consultants is a professional manpower solutions provider dedicated to helping organizations meet their workforce requirements efficiently and reliably.
              </p>
              <p>
                We specialize in providing skilled, semi-skilled, and unskilled manpower across multiple industries through flexible employment models including permanent recruitment, temporary staffing, and contract manpower outsourcing.
              </p>
              <p>
                Our goal is to simplify hiring and workforce management so that organizations can focus on their core business operations.
              </p>
              <div className="mt-8 p-6 bg-secondary-50 rounded-lg">
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">Vision</h3>
                <p className="text-secondary-700">
                  To become a trusted and preferred manpower outsourcing partner for organizations across India by delivering reliable workforce solutions with professionalism, integrity, and excellence.
                </p>
              </div>
              <div className="mt-6 p-6 bg-primary-50 rounded-lg border-l-4 border-primary-600">
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">Mission</h3>
                <ul className="space-y-2 text-secondary-700">
                  {missionPoints.map((point) => (
                    <li key={point} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
