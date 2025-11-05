import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, Home, Building2, CheckCircle, ArrowRight } from 'lucide-react'

const DeepCleaning = () => {
  useEffect(() => {
    document.title = 'Deep Cleaning Services - SV Manpower services | House & Commercial Office Cleaning'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional deep cleaning services for houses and commercial offices. SV Manpower provides thorough cleaning solutions. Contact us for deep cleaning services.')
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
                Deep Cleaning Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-primary-100 leading-relaxed"
              >
                Professional deep cleaning for houses and commercial offices
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
                    <Sparkles className="w-12 h-12 text-primary-600 mr-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
                      Thorough Deep Cleaning
                    </h2>
                  </div>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    SV Manpower services provides professional deep cleaning services for both residential houses and commercial offices. Our deep cleaning staff uses specialized equipment and cleaning techniques to ensure a thorough and hygienic cleaning.
                  </p>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    We offer comprehensive deep cleaning solutions including carpet cleaning, window cleaning, kitchen deep cleaning, bathroom sanitization, and complete office deep cleaning services.
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
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Deep Cleaning Services"
                  className="w-full rounded-lg"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Home className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">House Cleaning</h3>
                <ul className="space-y-2 text-secondary-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-600 mr-2" />Complete house deep cleaning</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-600 mr-2" />Kitchen deep cleaning</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-600 mr-2" />Bathroom sanitization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-600 mr-2" />Carpet and upholstery cleaning</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-600 mr-2" />Window cleaning</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Building2 className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Commercial Office Cleaning</h3>
                <ul className="space-y-2 text-secondary-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-600 mr-2" />Office deep cleaning</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-600 mr-2" />Desk and workstation cleaning</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-600 mr-2" />Carpet and floor deep cleaning</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-600 mr-2" />Restroom deep cleaning</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-600 mr-2" />Ventilation and AC cleaning</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary-600 rounded-lg p-8 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Need Deep Cleaning Services?</h3>
              <p className="text-xl text-primary-100 mb-6">
                Contact us today for professional deep cleaning solutions
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

export default DeepCleaning

