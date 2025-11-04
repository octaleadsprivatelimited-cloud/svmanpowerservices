import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react'
import SEO from '../components/SEO'

const FAQ = () => {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What services do you offer?',
          answer: 'We offer comprehensive manpower services including housekeeping (men & women), office boys/girls, car washing, security & watchman services (with accommodation), ward boys/girls for hospitals, deep cleaning services, accounting jobs, any degree jobs, plumbing works, drivers, delivery boys, and event/function staffing. We also provide specialized services for car service centers.'
        },
        {
          question: 'How long has your company been in business?',
          answer: 'We have been serving clients for over 15 years, establishing ourselves as a trusted partner in manpower and staffing solutions.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve various sectors including residential, commercial offices, hospitals, car service centers, events & functions, and many more. Our services are available across multiple industries and sectors.'
        },
        {
          question: 'Do you work with both job seekers and employers?',
          answer: 'Yes, we work with both job seekers looking for opportunities and employers seeking top talent. We facilitate connections between both parties.'
        }
      ]
    },
    {
      category: 'For Employers',
      questions: [
        {
          question: 'How quickly can you provide staff?',
          answer: 'Our response time varies by service type, but we typically can provide qualified staff within 24-48 hours for most positions. For urgent requirements, we can arrange staff even faster.'
        },
        {
          question: 'Do you provide accommodation for watchman/security staff?',
          answer: 'Yes, we provide accommodation for watchman and security staff as part of our service. This ensures reliable 24/7 security coverage for your premises.'
        },
        {
          question: 'Do you conduct background checks?',
          answer: 'Yes, we conduct comprehensive background checks, reference verification, and skills assessments for all our candidates to ensure quality and reliability.'
        },
        {
          question: 'What are your fees?',
          answer: 'Our fees vary based on the service and position level. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your needs.'
        }
      ]
    },
    {
      category: 'For Job Seekers',
      questions: [
        {
          question: 'Is there a fee for job seekers?',
          answer: 'No, our services are completely free for job seekers. Employers pay our fees when we successfully place candidates.'
        },
        {
          question: 'How do I apply for positions?',
          answer: 'You can apply through our website, submit your resume to our career portal, or contact us directly. We\'ll review your profile and match you with suitable opportunities.'
        },
        {
          question: 'Do you help with resume preparation?',
          answer: 'Yes, our career consultants can help you optimize your resume, prepare for interviews, and provide career guidance to improve your job search success.'
        },
        {
          question: 'What types of positions do you fill?',
          answer: 'We provide staff for various positions including housekeeping, office support, security, hospital staff, drivers, delivery personnel, accounting roles, plumbing works, event staffing, and many more. We serve both temporary and permanent staffing needs.'
        }
      ]
    },
    {
      category: 'Process & Support',
      questions: [
        {
          question: 'What is your recruitment process?',
          answer: 'Our process includes discovery consultation, candidate sourcing and screening, presentation of qualified candidates, interview coordination, and ongoing support through onboarding.'
        },
        {
          question: 'Do you provide ongoing support after placement?',
          answer: 'Yes, we provide ongoing support to ensure successful placements. We check in regularly and offer assistance with any issues that may arise.'
        },
        {
          question: 'Can you help with contract negotiations?',
          answer: 'Our experienced team can assist with salary negotiations and contract discussions to ensure fair and competitive offers for all parties.'
        },
        {
          question: 'What makes you different from other staffing agencies?',
          answer: 'Our personalized approach, industry expertise, comprehensive screening process, and commitment to long-term relationships set us apart. We focus on quality matches over quick placements.'
        }
      ]
    }
  ]

  return (
    <div>
      <SEO
        title="FAQ - Frequently Asked Questions | SV Manpower services Hyderabad"
        description="Find answers to frequently asked questions about SV Manpower services. Learn about our housekeeping, security, drivers, office staff, and other manpower services. Get information about our recruitment process, pricing, and support."
        keywords="manpower services FAQ, staffing questions, recruitment FAQ, housekeeping services questions, security services FAQ, manpower agency questions, staffing solutions FAQ, employment services FAQ"
        url="https://svmanpower.com/faq"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Find answers to common questions about our services and processes
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Get Your Questions Answered
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Browse through our frequently asked questions organized by category
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-secondary-900 mb-6 flex items-center">
                  <HelpCircle className="w-6 h-6 text-primary-600 mr-3" />
                  {category.category}
                </h3>

                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex
                    return (
                      <motion.div
                        key={questionIndex}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary-50 transition-colors"
                        >
                          <span className="text-lg font-semibold text-secondary-900">
                            {faq.question}
                          </span>
                          <div className="flex-shrink-0 ml-4">
                            {openItems[globalIndex] ? (
                              <Minus className="w-5 h-5 text-primary-600" />
                            ) : (
                              <Plus className="w-5 h-5 text-primary-600" />
                            )}
                          </div>
                        </button>

                        <AnimatePresence>
                          {openItems[globalIndex] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 pt-2">
                                <p className="text-secondary-700 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-secondary-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-xl p-8 md:p-12"
            >
              <MessageCircle className="w-16 h-16 text-primary-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-secondary-600 mb-8">
                Our team is here to help. Contact us for personalized assistance with your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Contact Us
                </button>
                <button className="btn-secondary">
                  Schedule a Call
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
