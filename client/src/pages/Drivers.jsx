import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Car, Shield, CheckCircle, ArrowRight } from 'lucide-react'

const Drivers = () => {
  useEffect(() => {
    document.title = 'Drivers Services - SV Manpower services | Professional Drivers'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional drivers for personal and commercial vehicles. SV Manpower provides licensed drivers for all vehicle types. Contact us for reliable driver services.')
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
                Driver Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-primary-100 leading-relaxed"
              >
                Professional drivers for personal and commercial vehicles
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
                    <Car className="w-12 h-12 text-primary-600 mr-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
                      Professional Drivers
                    </h2>
                  </div>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    SV Manpower services provides professional drivers for various vehicle types including personal drivers and commercial drivers. Our drivers are licensed, experienced, and background verified for your safety and peace of mind.
                  </p>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    We offer reliable driver services for cars, SUVs, commercial vehicles, and more. All our drivers are trained in defensive driving and road safety protocols.
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
                  src="https://www.elements.org/media/3130/istock-653102446.jpg?width=515&height=316&quality=90&v=1dae8364d1a53e0"
                  alt="Driver Services"
                  className="w-full rounded-lg"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Car className="w-8 h-8" />,
                  title: 'Licensed Drivers',
                  description: 'All drivers are properly licensed and verified for safe driving.'
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: 'All Vehicle Types',
                  description: 'Drivers available for cars, SUVs, commercial vehicles, and more.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Background Verified',
                  description: 'Thorough background verification for all driver candidates.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Reliable Service',
                  description: 'Dependable and professional driver services you can trust.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Personal & Commercial',
                  description: 'Drivers for both personal and commercial vehicle requirements.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Trained Professionals',
                  description: 'Drivers trained in defensive driving and safety protocols.'
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
              <h3 className="text-3xl font-bold mb-4">Need Professional Drivers?</h3>
              <p className="text-xl text-primary-100 mb-6">
                Contact us today for reliable driver services
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

export default Drivers

