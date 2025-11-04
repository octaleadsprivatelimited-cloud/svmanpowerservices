import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, Users, CheckCircle, ArrowRight } from 'lucide-react'

const Housekeeping = () => {
  useEffect(() => {
    document.title = 'Housekeeping Services - SV Manpower services | Professional Cleaning Staff'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional housekeeping services for men and women. SV Manpower provides trained housekeeping staff for residential and commercial properties. Contact us today!')
    }
  }, [])

  return (
    <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Housekeeping Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-primary-100 leading-relaxed"
              >
                Professional housekeeping services for both men and women - Residential & Commercial
              </motion.p>
            </div>
          </div>
        </section>

        {/* Service Details */}
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
                    <Home className="w-12 h-12 text-primary-600 mr-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
                      Professional Housekeeping Solutions
                    </h2>
                  </div>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    SV Manpower services provides reliable and trained housekeeping staff for both residential and commercial properties. Our housekeeping professionals are carefully selected, background verified, and trained to maintain the highest standards of cleanliness and hygiene.
                  </p>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    Whether you need housekeeping services for your home, office, hotel, or any commercial establishment, we have the right staff members - both men and women - to meet your specific requirements.
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
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Housekeeping Services"
                  className="w-full rounded-lg"
                />
              </motion.div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Men & Women Staff',
                  description: 'We provide housekeeping staff for both men and women according to your preference and requirements.'
                },
                {
                  icon: <Home className="w-8 h-8" />,
                  title: 'Residential & Commercial',
                  description: 'Professional housekeeping services for homes, offices, hotels, and all commercial establishments.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Trained Professionals',
                  description: 'All our housekeeping staff are properly trained and experienced in maintaining cleanliness standards.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Background Verified',
                  description: 'Every staff member undergoes thorough background verification for your peace of mind.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Flexible Scheduling',
                  description: 'We offer flexible scheduling options to meet your specific timing and frequency requirements.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Quality Assurance',
                  description: 'We ensure quality service and maintain high standards in all our housekeeping assignments.'
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

            {/* Services Offered */}
            <div className="bg-secondary-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">What We Offer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Daily housekeeping services',
                  'Weekly deep cleaning',
                  'Monthly maintenance',
                  'Special event cleaning',
                  'Window cleaning',
                  'Floor care and maintenance',
                  'Bathroom and kitchen cleaning',
                  'Laundry and ironing services',
                  'Dusting and organizing',
                  'Waste management'
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-primary-600 rounded-lg p-8 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl text-primary-100 mb-6">
                Contact us today to find the perfect housekeeping staff for your needs
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

export default Housekeeping

