import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: ['H.no 12-5-52, Flat No 103, SP Nagar', 'Moosapet, kukatpally', 'Medchal (malkajgori)']
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+91 9441160049', '+91 9177587766']
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['y.damu264@gmail.com']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM', 'Sun: Closed']
    }
  ]

  return (
    <div>
      <SEO
        title="Contact Us - SV Manpower services | Hyderabad | +91 9441160049"
        description="Contact SV Manpower services in Hyderabad. Address: H.no 12-5-52, Flat No 103, SP Nagar, Moosapet, kukatpally. Call +91 9441160049 or +91 9177587766. Email: y.damu264@gmail.com"
        keywords="contact SV Manpower, manpower agency contact, staffing services contact Hyderabad, manpower agency address, contact number manpower services, SV Manpower phone number, manpower agency near me"
        url="https://svmanpower.com/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact SV Manpower services",
          "description": "Contact us for all your manpower and staffing needs",
          "mainEntity": {
            "@type": "Organization",
            "name": "SV Manpower services",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "H.no 12-5-52, Flat No 103, SP Nagar",
              "addressLocality": "Moosapet, kukatpally",
              "addressRegion": "Medchal (malkajgori)",
              "addressCountry": "IN"
            },
            "telephone": "+91-9441160049",
            "email": "y.damu264@gmail.com"
          }
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact SV Manpower services - Hyderabad</h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Ready to connect? We're here to help with all your manpower and staffing needs. Call +91 9441160049 or visit our office in Moosapet, Hyderabad.
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
                    src="https://www.google.com/maps?q=17.4687342,78.4272166&z=17&hl=en&output=embed"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SV Manpower Services Location"
                  ></iframe>
                </div>
                <div className="mt-4">
                  <a
                    href="https://www.google.com/maps?q=17.4687342,78.4272166&z=17&hl=en"
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
