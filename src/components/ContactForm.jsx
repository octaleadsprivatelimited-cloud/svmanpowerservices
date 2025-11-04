import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const ContactForm = ({ size = 'normal' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null

  const isCompact = size === 'compact'

  const services = [
    'General Inquiry',
    'Temporary Staffing',
    'Permanent Placement',
    'Executive Search',
    'Payroll Services',
    'HR Consulting',
    'Training & Development'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-lg shadow-xl ${isCompact ? 'p-4' : 'p-6 md:p-8'}`}
    >
      <div className="text-center mb-6"></div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={`grid grid-cols-1 md:grid-cols-2 ${isCompact ? 'gap-3' : 'gap-4'}`}>
          <div>
            <label htmlFor="name" className={`block ${isCompact ? 'text-xs' : 'text-sm'} font-medium text-secondary-700 mb-1`}>
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full ${isCompact ? 'px-2 py-2 text-sm' : 'px-3 py-2'} border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className={`block ${isCompact ? 'text-xs' : 'text-sm'} font-medium text-secondary-700 mb-1`}>
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full ${isCompact ? 'px-2 py-2 text-sm' : 'px-3 py-2'} border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${isCompact ? 'gap-3' : 'gap-4'}`}>
          <div>
            <label htmlFor="phone" className={`block ${isCompact ? 'text-xs' : 'text-sm'} font-medium text-secondary-700 mb-1`}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full ${isCompact ? 'px-2 py-2 text-sm' : 'px-3 py-2'} border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label htmlFor="service" className={`block ${isCompact ? 'text-xs' : 'text-sm'} font-medium text-secondary-700 mb-1`}>
              Service Interest
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full ${isCompact ? 'px-2 py-2 text-sm' : 'px-3 py-2'} border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className={`block ${isCompact ? 'text-xs' : 'text-sm'} font-medium text-secondary-700 mb-1`}>
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={isCompact ? 3 : 4}
            className={`w-full ${isCompact ? 'px-2 py-2 text-sm' : 'px-3 py-2'} border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
            placeholder="Tell us about your requirements..."
          />
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-md"
          >
            <CheckCircle size={20} />
            <span>Thank you! Your message has been sent successfully.</span>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md"
          >
            <AlertCircle size={20} />
            <span>Sorry, there was an error sending your message. Please try again.</span>
          </motion.div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-primary-600 hover:bg-primary-700 disabled:bg-secondary-400 text-white font-semibold ${isCompact ? 'py-2 px-4 text-sm' : 'py-3 px-6'} rounded-md transition-colors duration-200 flex items-center justify-center space-x-2`}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </motion.div>
  )
}

export default ContactForm
