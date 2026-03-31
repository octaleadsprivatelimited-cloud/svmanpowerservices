import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: ['H No 7-1-309/6, BK Guda', 'SR Nagar, Hyderabad - 500038']
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+91 7989308337']
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['shrijaaoutsourcing@gmail.com']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hours',
      details: ['Year of Establishment: 2024', 'Tagline: Your partner in workforce growth']
    }
  ]

  return (
    <div>
      <SEO
        title="Contact Us - Shrijaa Outsourcing Consultants | Hyderabad"
        description="Contact Shrijaa Outsourcing Consultants in Hyderabad. Address: H No 7-1-309/6, BK Guda, SR Nagar, Hyderabad - 500038. WhatsApp/Call +91 7989308337. Email: shrijaaoutsourcing@gmail.com"
        keywords="Shrijaa Outsourcing Consultants contact, manpower outsourcing Hyderabad, staffing services Hyderabad, workforce solutions contact"
        url="https://shrijaaoutsourcing.com/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Shrijaa Outsourcing Consultants",
          "description": "Contact us for all your manpower and staffing needs",
          "mainEntity": {
            "@type": "Organization",
            "name": "Shrijaa Outsourcing Consultants",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "H No 7-1-309/6, BK Guda",
              "addressLocality": "SR Nagar, Hyderabad",
              "postalCode": "500038",
              "addressRegion": "Telangana",
              "addressCountry": "IN"
            },
            "telephone": "+91-7989308337",
            "email": "shrijaaoutsourcing@gmail.com"
          }
        }}
      />
      {/* Hero Section */}
      <section className="relative text-white py-20 lg:pt-32 bg-cover bg-center bg-no-repeat hero-bg-position" style={{ backgroundImage: 'url(/hero.webp)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/80 to-primary-800/80"></div>
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Shrijaa Outsourcing Consultants</h1>
            <p className="text-xl md:text-2xl text-primary-100">
              WhatsApp or call us at +91 7989308337 for manpower outsourcing support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-secondary-600 mb-8 leading-relaxed">
                Whether you're looking for talent or opportunities, our experienced team is ready to help. 
                Reach out to us through any of the channels below, and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="text-primary-600 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-secondary-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Find Us
                </h3>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps?q=7-1-309/6+BK+Guda+SR+Nagar+Hyderabad+500038&output=embed"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shrijaa Outsourcing Consultants Location"
                  ></iframe>
                </div>
                <div className="mt-4">
                  <a
                    href="https://maps.app.goo.gl/rucz9KUjk6FW7JH19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
