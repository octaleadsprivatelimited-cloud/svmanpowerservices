import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calculator, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react'

const AccountingJobs = () => {
  useEffect(() => {
    document.title = 'Accounting Jobs - SV Manpower services | Any Degree Accounting Professionals'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Accounting professionals for various accounting roles. SV Manpower provides accounting jobs for candidates with any degree. Contact us for accounting job placement.')
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
                Accounting Jobs
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-primary-100 leading-relaxed"
              >
                Accounting professionals for various roles - Any degree candidates accepted
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
                    <Calculator className="w-12 h-12 text-primary-600 mr-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
                      Accounting Job Placement
                    </h2>
                  </div>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    SV Manpower services provides accounting professionals for various accounting roles across different industries. We accept candidates with any degree qualification and match them with suitable accounting positions.
                  </p>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    Whether you're looking for accounting staff or seeking accounting job opportunities, we help connect qualified accounting professionals with the right positions. Quick placement and verified credentials guaranteed.
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
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Accounting Jobs"
                  className="w-full rounded-lg"
                />
              </motion.div>
            </div>

            <div className="bg-secondary-50 rounded-lg p-8 mb-8">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary-600 mr-2" />
                <h3 className="text-2xl font-bold text-secondary-900">Any Degree Accepted</h3>
              </div>
              <p className="text-secondary-700 leading-relaxed">
                We welcome candidates with any degree qualification for accounting positions. Our focus is on finding the right match based on skills, experience, and aptitude for accounting work, regardless of the specific degree field.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8" />,
                  title: 'Any Degree Accepted',
                  description: 'Accounting positions available for candidates with any degree qualification.'
                },
                {
                  icon: <Calculator className="w-8 h-8" />,
                  title: 'Accounting Expertise',
                  description: 'Placement in various accounting roles across different industries.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Quick Placement',
                  description: 'Fast placement of qualified accounting professionals in suitable roles.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Verified Credentials',
                  description: 'Thorough verification of qualifications and experience.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Multiple Sectors',
                  description: 'Accounting opportunities in various industries and sectors.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Career Guidance',
                  description: 'Support and guidance for accounting career development.'
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
              <h3 className="text-3xl font-bold mb-4">Looking for Accounting Jobs?</h3>
              <p className="text-xl text-primary-100 mb-6">
                Contact us today for accounting job opportunities or staffing
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

export default AccountingJobs

