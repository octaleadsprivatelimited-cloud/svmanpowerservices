import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Building2, Users, CheckCircle, ArrowRight } from 'lucide-react'

const OfficeBoys = () => {
  useEffect(() => {
    document.title = 'Office Boys & Girls Services - SV Manpower services | Office Support Staff'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Reliable office boys and girls for office support tasks. SV Manpower provides trained office staff for men and women. Contact us for office maintenance and support staff.')
    }
  }, [])

  return (
    <div>
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
                Office Boys & Girls Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-primary-100 leading-relaxed"
              >
                Reliable office support staff for various office tasks and maintenance
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
                    <Building2 className="w-12 h-12 text-primary-600 mr-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
                      Professional Office Support
                    </h2>
                  </div>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    SV Manpower services provides reliable office boys and girls to help with various office tasks and maintenance. Our office support staff is trained to handle document handling, office maintenance, and other essential office duties.
                  </p>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    We offer both men and women office support staff to meet your specific office requirements. Quick deployment and professional service guaranteed.
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
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Office Support Staff"
                  className="w-full rounded-lg"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Men & Women Available',
                  description: 'Office boys and girls available according to your preference and requirements.'
                },
                {
                  icon: <Building2 className="w-8 h-8" />,
                  title: 'Office Maintenance',
                  description: 'Handling office maintenance tasks, cleaning, and organizing workspace.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Document Handling',
                  description: 'Assisting with document organization, filing, and distribution tasks.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Quick Deployment',
                  description: 'Fast placement of office support staff to meet urgent requirements.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Professional Service',
                  description: 'Well-trained and professional office support staff for your organization.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Reliable Staff',
                  description: 'Background verified and reliable office support personnel.'
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
              <h3 className="text-3xl font-bold mb-4">Need Office Support Staff?</h3>
              <p className="text-xl text-primary-100 mb-6">
                Contact us today to find reliable office boys and girls for your office
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

export default OfficeBoys

