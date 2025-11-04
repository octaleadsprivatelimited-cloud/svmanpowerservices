import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Briefcase, Users, ArrowRight, CheckCircle } from 'lucide-react'

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior Recruitment Consultant',
      location: 'New York, NY',
      type: 'Full-time',
      department: 'Recruitment',
      experience: '3-5 years',
      description: 'Join our team as a Senior Recruitment Consultant and help connect top talent with exceptional opportunities.',
      requirements: [
        'Bachelor\'s degree in HR, Business, or related field',
        '3-5 years of recruitment experience',
        'Strong communication and interpersonal skills',
        'Experience with ATS and CRM systems',
        'Proven track record of successful placements'
      ],
      posted: '2 days ago'
    },
    {
      title: 'HR Business Partner',
      location: 'Remote',
      type: 'Full-time',
      department: 'HR Consulting',
      experience: '5-7 years',
      description: 'Provide strategic HR support to our clients and help them build strong organizational cultures.',
      requirements: [
        'Master\'s degree in HR or related field preferred',
        '5-7 years of HR experience',
        'SHRM or PHR certification preferred',
        'Strong analytical and problem-solving skills',
        'Experience with HRIS systems'
      ],
      posted: '1 week ago'
    },
    {
      title: 'Talent Acquisition Specialist',
      location: 'Chicago, IL',
      type: 'Full-time',
      department: 'Recruitment',
      experience: '2-4 years',
      description: 'Focus on sourcing and attracting top talent for our diverse client base across multiple industries.',
      requirements: [
        'Bachelor\'s degree preferred',
        '2-4 years of talent acquisition experience',
        'Excellent sourcing and networking skills',
        'Strong attention to detail',
        'Ability to work in a fast-paced environment'
      ],
      posted: '3 days ago'
    },
    {
      title: 'Executive Search Consultant',
      location: 'San Francisco, CA',
      type: 'Full-time',
      department: 'Executive Search',
      experience: '7+ years',
      description: 'Lead executive search assignments for C-level and senior leadership positions.',
      requirements: [
        'Bachelor\'s degree required, MBA preferred',
        '7+ years of executive search experience',
        'Strong network in executive circles',
        'Excellent presentation and negotiation skills',
        'Experience with retained search'
      ],
      posted: '1 week ago'
    }
  ]

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative Environment',
      description: 'Work with a team of experienced professionals who support and mentor each other.'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Career Development',
      description: 'Access to training programs, conferences, and opportunities for professional growth.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Competitive Benefits',
      description: 'Comprehensive health insurance, retirement plans, and performance-based bonuses.'
    }
  ]

  const companyCulture = [
    'Work-life balance and flexible schedules',
    'Remote work opportunities',
    'Professional development budget',
    'Team building events and activities',
    'Recognition and reward programs',
    'Innovation and creativity encouraged'
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Build your career with a company that values growth, innovation, and making a difference
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Join a team that's passionate about connecting people with opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Company Culture */}
          <div className="bg-secondary-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
              Our Company Culture
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {companyCulture.map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-secondary-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-secondary-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-secondary-600">
              Explore current opportunities to join our team
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:flex md:items-start md:justify-between">
                  <div className="md:flex-1">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                      {position.title}
                    </h3>
                    <p className="text-secondary-600 mb-4">
                      {position.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center text-secondary-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center text-secondary-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center text-secondary-600">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {position.department}
                      </div>
                      <div className="flex items-center text-secondary-600">
                        <Users className="w-4 h-4 mr-1" />
                        {position.experience}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-secondary-900 mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="flex items-start text-sm text-secondary-700">
                            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-sm text-secondary-500">
                      Posted {position.posted}
                    </p>
                  </div>

                  <div className="md:ml-6 mt-4 md:mt-0">
                    <button className="btn-primary w-full md:w-auto flex items-center justify-center">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-secondary-600 mb-4">
              Don't see a position that matches your skills?
            </p>
            <button className="btn-secondary">
              Submit Your Resume
            </button>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-secondary-600">
              Here's what to expect when you apply
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Apply Online',
                description: 'Submit your resume and cover letter through our online application system.'
              },
              {
                step: '02',
                title: 'Initial Screening',
                description: 'Our team will review your application and may conduct a brief phone screening.'
              },
              {
                step: '03',
                title: 'Interview Process',
                description: 'Meet with our team through video or in-person interviews to discuss the role.'
              },
              {
                step: '04',
                title: 'Decision & Onboarding',
                description: 'We\'ll make our decision and guide you through the onboarding process.'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-secondary-600">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join a team that's making a difference in people's careers and businesses' success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Learn More About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers
