import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Users, CheckCircle, ArrowRight } from 'lucide-react'

const Security = () => {
  useEffect(() => {
    document.title = 'Security Services - SV Manpower services | Security Guards Men & Women'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive security services with trained security personnel for men and women. SV Manpower provides 24/7 security guards. Contact us for reliable security services.')
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
                Security Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-primary-100 leading-relaxed"
              >
                Comprehensive security services with trained security personnel - Men & Women available
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
                    <Shield className="w-12 h-12 text-primary-600 mr-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
                      Professional Security Solutions
                    </h2>
                  </div>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    SV Manpower services provides comprehensive security services with trained security personnel for both men and women. Our security guards are trained in security protocols, access control, and emergency response procedures.
                  </p>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    We offer 24/7 security coverage for residential, commercial, and industrial properties. All our security personnel are background verified and trained to handle various security situations professionally.
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
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Security Services"
                  className="w-full rounded-lg"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Men & Women Guards',
                  description: 'Security guards available for both men and women according to your needs.'
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: 'Trained Professionals',
                  description: 'Security personnel trained in security protocols and emergency response.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: '24/7 Coverage',
                  description: 'Round-the-clock security coverage for your property and premises.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Verified Staff',
                  description: 'Thorough background verification for all security personnel.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Multiple Sectors',
                  description: 'Security services for residential, commercial, and industrial properties.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Reliable Service',
                  description: 'Dependable and professional security services you can trust.'
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
              <h3 className="text-3xl font-bold mb-4">Need Security Services?</h3>
              <p className="text-xl text-primary-100 mb-6">
                Contact us today for professional security personnel
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

export default Security

