import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const [openSections, setOpenSections] = useState({})

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Temporary Staffing', href: '/services/temporary-staffing' },
        { name: 'Permanent Placement', href: '/services/permanent-placement' },
        { name: 'Executive Search', href: '/services/executive-search' },
        { name: 'Payroll Services', href: '/services/payroll-services' },
        { name: 'HR Consulting', href: '/services/hr-consulting' },
        { name: 'Training & Development', href: '/services/training-development' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Technology Staffing', href: '/solutions/technology-staffing' },
        { name: 'Healthcare Staffing', href: '/solutions/healthcare-staffing' },
        { name: 'Finance Staffing', href: '/solutions/finance-staffing' },
        { name: 'Manufacturing Staffing', href: '/solutions/manufacturing-staffing' },
        { name: 'Retail Staffing', href: '/solutions/retail-staffing' },
        { name: 'Industry Solutions', href: '/solutions/industry-solutions' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Contact Us', href: '/contact' }
      ]
    }
  ]

  return (
    <footer className="bg-secondary-900 text-white relative">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15" style={{ backgroundImage: 'url(/footer-bg.jpg)' }}></div>
      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
                      <Link to="/" className="flex items-center space-x-2 mb-4">
                        <img
                          src="/shrijaa-outsourcing-logo.png"
                          alt="Shrijaa Outsourcing Consultants"
                          className="h-14 w-auto"
                        />
                      </Link>
              <p className="text-secondary-300 mb-6 leading-relaxed">
                Your partner in workforce growth.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold mb-1.5 text-sm">Contact Information</h4>
                  <div className="text-secondary-300 space-y-0.5 text-xs">
                    <p>H No 7-1-309/6, BK Guda,</p>
                    <p>SR Nagar, Hyderabad - 500038</p>
                    <p>WhatsApp / Call: +91 7989308337</p>
                    <p>Email: shrijaaoutsourcing@gmail.com</p>
                    <p>Established: 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Links - Desktop */}
            <div className="lg:col-span-4 hidden lg:grid grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-secondary-300 hover:text-white transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer Links - Mobile Accordion */}
            <div className="lg:hidden col-span-1 space-y-4">
              {footerSections.map((section) => (
                <div key={section.title} className="border-b border-secondary-700 pb-4">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h3 className="text-lg font-semibold">{section.title}</h3>
                    {openSections[section.title] ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openSections[section.title] ? 'auto' : 0,
                      opacity: openSections[section.title] ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="pt-3 space-y-2">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            to={link.href}
                            className="text-secondary-300 hover:text-white transition-colors duration-200 block py-1"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-secondary-400 text-sm text-center md:text-left">
              <p>&copy; 2024 Shrijaa Outsourcing Consultants. All rights reserved.</p>
              <p className="mt-1">
                Designed and developed by{' '}
                <a 
                  href="https://www.octaleads.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary-200 transition-colors"
                >
                  Octaleads Pvt Ltd
                </a>
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/rucz9KUjk6FW7JH19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-300 hover:text-white text-sm transition-colors duration-200"
            >
              View business location on Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
