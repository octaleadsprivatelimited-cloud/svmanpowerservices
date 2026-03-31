import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageCircle, MapPin, Mail, ExternalLink } from 'lucide-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-800 text-white py-1 px-3 sm:py-1.5 sm:px-4">
        <div className="container-max flex justify-between items-center text-[11px] sm:text-sm">
          <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span className="text-xs sm:text-sm">+91 7989308337</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 ml-auto">
            <a
              href="mailto:info@shrijaaoutsorcing.com"
              className="flex items-center space-x-1 sm:space-x-2 hover:text-primary-100 transition-colors"
            >
              <Mail size={16} />
              <span className="text-xs sm:text-sm">info@shrijaaoutsorcing.com</span>
            </a>
            {/* WhatsApp for Desktop */}
            <a 
              href="https://wa.me/917989308337" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:flex items-center space-x-2 hover:text-primary-100 transition-colors"
            >
              <MessageCircle size={16} />
              <span className="text-xs sm:text-sm">WhatsApp</span>
            </a>
            <a 
              href="tel:+917989308337" 
              className="hidden md:inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 px-3 py-1 rounded text-xs sm:text-sm transition-colors"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 relative">
        <div className="container-max">
          <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                      <img
                        src="/shrijaa-outsourcing-logo.png"
                        alt="Shrijaa Outsourcing Consultants"
                        className="h-10 w-auto scale-[1.75] origin-left"
                      />
                    </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-secondary-700 hover:text-primary-600 hover:bg-secondary-100 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Dropdown Menu */}
              <motion.div
                initial={{ opacity: 0, y: -10, scaleY: 0.96 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -10, scaleY: 0.96 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                style={{ transformOrigin: 'top' }}
                className="lg:hidden absolute left-0 right-0 top-full mt-0 bg-white shadow-xl z-50 max-h-[85vh] overflow-y-auto border-t border-secondary-200"
              >
                {/* Navigation Links */}
                <div className="py-2 px-2">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center py-2.5 px-3 rounded-md text-secondary-700 hover:bg-primary-50 hover:text-primary-600 font-medium transition-all duration-200 text-sm"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-secondary-200"></div>

                {/* Contact Information Section - Medium Size */}
                <div className="bg-gradient-to-br from-secondary-50 to-primary-50 p-3 border-t border-secondary-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-1 h-4 bg-primary-600 rounded-full"></div>
                    <h4 className="font-semibold text-secondary-900 text-xs">Quick Contact</h4>
                  </div>
                  
                  <div className="space-y-2">
                    {/* Phone Numbers - Medium */}
                    <div className="grid grid-cols-1 gap-1.5">
                      <a
                        href="tel:+917989308337"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group border border-secondary-100"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                          <Phone size={16} className="text-primary-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-secondary-500 mb-0.5">Phone</p>
                          <p className="text-xs font-semibold text-secondary-900">+91 7989308337</p>
                        </div>
                      </a>
                      
                    </div>

                    {/* WhatsApp - Medium */}
                    <a
                      href="https://wa.me/917989308337"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center space-x-2 p-2 bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group border border-green-200"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center group-hover:bg-[#20BA5A] transition-colors">
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="white" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-secondary-500 mb-0.5">WhatsApp</p>
                        <p className="text-xs font-semibold text-secondary-900">Chat with us</p>
                      </div>
                    </a>

                    {/* Email - Medium */}
                    <a
                      href="mailto:shrijaaoutsourcing@gmail.com"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group border border-secondary-100"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                        <Mail size={16} className="text-primary-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-secondary-500 mb-0.5">Email</p>
                        <p className="text-xs font-semibold text-secondary-900 truncate">shrijaaoutsourcing@gmail.com</p>
                      </div>
                    </a>

                    {/* Map Location - Medium */}
                    <a
                      href="https://maps.app.goo.gl/rucz9KUjk6FW7JH19"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group border border-secondary-100"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                        <MapPin size={16} className="text-primary-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-secondary-500 mb-0.5">Location</p>
                        <p className="text-xs font-semibold text-secondary-900">View on Maps</p>
                      </div>
                      <ExternalLink size={14} className="text-secondary-400 flex-shrink-0" />
                    </a>
                  </div>
                </div>

                {/* CTA Button - Compact */}
                <div className="p-3 border-t border-secondary-200 bg-white">
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary w-full text-center block py-2 text-sm font-semibold"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default Header
