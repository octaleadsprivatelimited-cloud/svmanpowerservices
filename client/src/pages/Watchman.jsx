import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Home, CheckCircle, ArrowRight } from 'lucide-react'

const Watchman = () => {
  useEffect(() => {
    document.title = 'Watchman Services with Accommodation - SV Manpower services | Security Guards'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Watchman jobs with accommodation provided. SV Manpower provides security watchman services with 24/7 coverage. Contact us for reliable watchman services with accommodation.')
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
                Watchman Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-primary-100 leading-relaxed"
              >
                Security watchman services with accommodation provided - 24/7 security coverage
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
                      Reliable Watchman Services
                    </h2>
                  </div>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    SV Manpower services provides watchman services with accommodation included. Our watchman staff is trained to provide 24/7 security coverage for your property, ensuring round-the-clock protection and peace of mind.
                  </p>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    We provide accommodation for watchman staff as part of our service, ensuring they are available on-site for continuous security coverage. All our watchman staff are background verified and trained in security protocols.
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
                  src="https://paladinsecurity.com/wp-content/uploads/2022/06/TMi9Fj0hkNf3fV-1-scaled.jpg"
                  alt="Watchman Services"
                  className="w-full rounded-lg"
                />
              </motion.div>
            </div>

            <div className="bg-secondary-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4 flex items-center">
                <Home className="w-6 h-6 text-primary-600 mr-2" />
                Accommodation Provided
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                One of our key features is providing accommodation for watchman staff. This ensures that your security personnel are always available on-site, providing continuous 24/7 coverage without the need for daily commuting. This arrangement guarantees reliable security coverage and better response times to any security concerns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: 'With Accommodation',
                  description: 'Watchman services with accommodation provided for on-site availability.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: '24/7 Security',
                  description: 'Round-the-clock security coverage for your property and premises.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Trained Guards',
                  description: 'Professional watchman staff trained in security protocols and procedures.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Background Verified',
                  description: 'Thorough background verification for all watchman staff.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'On-Site Availability',
                  description: 'Watchman available on-site for immediate response to security needs.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Reliable Service',
                  description: 'Dependable watchman services for residential and commercial properties.'
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
              <h3 className="text-3xl font-bold mb-4">Need Watchman Services?</h3>
              <p className="text-xl text-primary-100 mb-6">
                Contact us today for watchman services with accommodation
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

export default Watchman

