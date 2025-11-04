import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, Briefcase, CheckCircle, ArrowRight } from 'lucide-react'

const AnyDegreeJobs = () => {
  useEffect(() => {
    document.title = 'Any Degree Jobs - SV Manpower services | Job Placement for All Degrees'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Job placement services for candidates with any degree qualification. SV Manpower provides job opportunities across various sectors. Contact us for job placement.')
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
                Any Degree Jobs
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-primary-100 leading-relaxed"
              >
                Job placement services for candidates with any degree qualification across various sectors
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
                    <GraduationCap className="w-12 h-12 text-primary-600 mr-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
                      Job Placement for All Degrees
                    </h2>
                  </div>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    SV Manpower services provides job placement services for candidates with any degree qualification. We believe that opportunities should be available to all degree holders, and we match candidates with suitable positions based on their skills and interests.
                  </p>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    We offer job placement across multiple sectors and industries, providing career guidance and placement support to help candidates find the right opportunities regardless of their degree field.
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
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Any Degree Jobs"
                  className="w-full rounded-lg"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8" />,
                  title: 'All Degree Types',
                  description: 'Job placement services for candidates with any degree qualification.'
                },
                {
                  icon: <Briefcase className="w-8 h-8" />,
                  title: 'Multiple Sectors',
                  description: 'Opportunities across various industries and sectors.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Career Guidance',
                  description: 'Professional career guidance and counseling services.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Placement Support',
                  description: 'Comprehensive support throughout the job placement process.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Skill Matching',
                  description: 'Matching candidates with positions based on skills and interests.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Quick Placement',
                  description: 'Fast placement of qualified candidates in suitable positions.'
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
              <h3 className="text-3xl font-bold mb-4">Looking for Job Opportunities?</h3>
              <p className="text-xl text-primary-100 mb-6">
                Contact us today for job placement services
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

export default AnyDegreeJobs

