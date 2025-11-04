import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Users, CheckCircle, ArrowRight } from 'lucide-react'

const EventServices = () => {
  useEffect(() => {
    document.title = 'Event & Function Services - SV Manpower services | Event Staffing Solutions'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete staffing solutions for events, functions, marriage functions, and all types of functions. SV Manpower provides event staffing. Contact us for event services.')
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
                Event & Function Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-primary-100 leading-relaxed"
              >
                Complete staffing solutions for events, functions, and marriage functions
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
                    <Calendar className="w-12 h-12 text-primary-600 mr-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
                      Complete Event Staffing
                    </h2>
                  </div>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    SV Manpower services provides complete staffing solutions for events, functions, marriage functions, and all types of functions. We provide trained staff for various event roles including serving, setup, cleanup, and management.
                  </p>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    Whether you're organizing a wedding, corporate event, birthday party, or any other function, we have the right staff to make your event successful.
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
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Event Services"
                  className="w-full rounded-lg"
                />
              </motion.div>
            </div>

            <div className="bg-secondary-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Types of Events We Serve</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Marriage functions and weddings',
                  'Corporate events and conferences',
                  'Birthday parties and celebrations',
                  'Anniversary celebrations',
                  'Religious functions and ceremonies',
                  'Cultural events and festivals',
                  'Exhibition and trade shows',
                  'Corporate seminars and workshops'
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700">{event}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Calendar className="w-8 h-8" />,
                  title: 'Event Staffing',
                  description: 'Complete staffing solutions for all types of events and functions.'
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Marriage Functions',
                  description: 'Specialized staff for wedding ceremonies and marriage functions.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'All Function Types',
                  description: 'Staffing services for all types of functions and celebrations.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Complete Staffing',
                  description: 'End-to-end staffing solutions for successful event management.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Trained Staff',
                  description: 'Professional event staff trained in event management and service.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Flexible Scheduling',
                  description: 'Staff available for various event timings and durations.'
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
              <h3 className="text-3xl font-bold mb-4">Planning an Event?</h3>
              <p className="text-xl text-primary-100 mb-6">
                Contact us today for complete event staffing solutions
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

export default EventServices

