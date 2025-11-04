import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Wrench, Tool, CheckCircle, ArrowRight } from 'lucide-react'

const Plumbing = () => {
  useEffect(() => {
    document.title = 'Plumbing Works - SV Manpower services | Professional Plumbers'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Skilled plumbers and plumbing professionals for installation and repair works. SV Manpower provides expert plumbing services. Contact us for plumbing professionals.')
    }
  }, [])

  return (
    <div>
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Plumbing Works
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-primary-100 leading-relaxed"
              >
                Skilled plumbers for installation and repair works
              </motion.p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-6">
                    <Wrench className="w-12 h-12 text-primary-600 mr-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
                      Professional Plumbing Services
                    </h2>
                  </div>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    SV Manpower services provides skilled plumbers and plumbing professionals for various plumbing installation and repair works. Our plumbers are experienced and trained in handling all types of plumbing tasks.
                  </p>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    We offer quick response times, quality workmanship, and professional service for residential, commercial, and industrial plumbing needs.
                  </p>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-secondary-50 rounded-lg p-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Plumbing Works"
                  className="w-full rounded-lg"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Wrench className="w-8 h-8" />,
                  title: 'Expert Plumbers',
                  description: 'Skilled and experienced plumbing professionals for all types of work.'
                },
                {
                  icon: <Tool className="w-8 h-8" />,
                  title: 'Installation & Repair',
                  description: 'Complete plumbing installation and repair services for all needs.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Quick Response',
                  description: 'Fast response times for urgent plumbing requirements.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Quality Work',
                  description: 'Professional workmanship and quality assurance in all plumbing tasks.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'All Types',
                  description: 'Residential, commercial, and industrial plumbing services.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Reliable Service',
                  description: 'Dependable plumbing professionals you can trust.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="text-primary-600 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="bg-primary-600 rounded-lg p-8 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Need Plumbing Services?</h3>
              <p className="text-xl text-primary-100 mb-6">
                Contact us today for professional plumbing professionals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Plumbing

