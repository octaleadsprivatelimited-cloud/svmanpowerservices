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
        { name: 'About Us', href: '/about' },
        { name: 'News & Updates', href: '/blog' },
        { name: 'Testimonials', href: '/testimonials' }
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
        { name: 'Job Search Tips', href: '/blog/job-search-tips' },
        { name: 'Career Advice', href: '/blog/career-advice' },
        { name: 'Industry Insights', href: '/blog/industry-insights' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Contact Us', href: '/contact' }
      ]
    }
  ]

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/hrstaffing', icon: 'facebook' },
    { name: 'Twitter', href: 'https://twitter.com/hrstaffing', icon: 'twitter' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/hrstaffing', icon: 'linkedin' },
    { name: 'Instagram', href: 'https://instagram.com/hrstaffing', icon: 'instagram' }
  ]

  return (
    <footer className="bg-secondary-900 text-white relative">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{ backgroundImage: 'url(/hero.webp)' }}></div>
      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
                      <Link to="/" className="flex items-center space-x-2 mb-4">
                        <span className="text-xl font-bold">SV Manpower services</span>
                      </Link>
              <p className="text-secondary-300 mb-6 leading-relaxed">
                Connecting top talent with exceptional opportunities. Your trusted partner in manpower and staffing solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold mb-1.5 text-sm">Contact Information</h4>
                  <div className="text-secondary-300 space-y-0.5 text-xs">
                    <p>H.no 12-5-52, Flat No 103, SP Nagar</p>
                    <p>Moosapet, kukatpally</p>
                    <p>Medchal (malkajgori)</p>
                    <p>Phone: +91 9441160049</p>
                    <p>Phone: +91 9177587766</p>
                    <p>Email: y.damu264@gmail.com</p>
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
              <p>&copy; 2024 SV Manpower services. All rights reserved.</p>
              <p className="mt-1">
                Designed and developed by{' '}
                <a 
                  href="https://www.octaleads.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Octaleads Pvt Ltd
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <div className="w-8 h-8 bg-secondary-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <span className="text-sm font-bold">{social.icon[0].toUpperCase()}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
