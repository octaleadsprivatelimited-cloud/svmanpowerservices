import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Car, CheckCircle, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'

const CarWashing = () => {

  return (
    <div>
      <SEO
        title="Car Washing Services - Professional Car Cleaners | SV Manpower services Hyderabad"
        description="Professional car washing boys for car service centers and facilities in Hyderabad. Expert car cleaners available for quick and quality service. Call +91 9441160049"
        keywords="car washing services Hyderabad, car cleaners, car washing staff, car service center staff, professional car washing, car wash boys, automobile cleaning staff, car cleaning services"
        url="https://svmanpower.com/services/car-washing"
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
                Car Washing Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-primary-100 leading-relaxed"
              >
                Professional car washing boys for car service centers and facilities
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
                      Expert Car Cleaning
                    </h2>
                  </div>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    SV Manpower services provides professional car washing boys for car service centers and automotive facilities. Our car cleaning staff is trained in proper car washing techniques and ensures quality results.
                  </p>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    We offer quick service, flexible schedules, and quality assurance for all car washing needs. Perfect for car service centers, dealerships, and automotive businesses.
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
                  src="https://img.freepik.com/free-photo/professional-washer-blue-uniform-washing-luxury-car-with-water-gun-open-air-car-wash_496169-333.jpg"
                  alt="Car Washing Services"
                  className="w-full rounded-lg"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Car className="w-8 h-8" />,
                  title: 'Expert Car Cleaners',
                  description: 'Trained professionals with expertise in car washing and detailing.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Quick Service',
                  description: 'Efficient and fast car cleaning service for high-volume operations.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Quality Assurance',
                  description: 'Maintaining high standards of cleanliness and quality results.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Flexible Schedules',
                  description: 'Available for various shifts and schedules to meet your needs.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Car Service Centers',
                  description: 'Specialized staff for car service centers and automotive facilities.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Reliable Staff',
                  description: 'Background verified and reliable car washing professionals.'
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
              <h3 className="text-3xl font-bold mb-4">Need Car Washing Staff?</h3>
              <p className="text-xl text-primary-100 mb-6">
                Contact us today for professional car washing services
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

export default CarWashing

