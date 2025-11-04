import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, Target, Award, Heart, CheckCircle, TrendingUp } from 'lucide-react'
import SEO from '../components/SEO'

const About = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'People-First Approach',
      description: 'We prioritize the human element in every interaction, ensuring both clients and candidates feel valued and supported.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision Matching',
      description: 'Our thorough screening process ensures the perfect fit between talent and opportunity, every time.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence in Service',
      description: 'We maintain the highest standards in recruitment, delivering exceptional results that exceed expectations.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Community Impact',
      description: 'We believe in building stronger communities by connecting people with meaningful career opportunities.'
    }
  ]

  const milestones = [
    { year: '1999', event: 'Company Founded', description: 'Started with a vision to transform recruitment' },
    { year: '2005', event: 'First 1000 Placements', description: 'Reached our first major milestone' },
    { year: '2010', event: 'Industry Recognition', description: 'Awarded Best Staffing Agency' },
    { year: '2015', event: 'Digital Transformation', description: 'Launched innovative online platform' },
    { year: '2020', event: 'Remote Revolution', description: 'Pioneered remote staffing solutions' },
    { year: '2024', event: 'Future Forward', description: 'Leading with AI-powered matching' }
  ]


  return (
    <div>
      <SEO
        title="About Us - SV Manpower services | 15+ Years Experience | Hyderabad"
        description="Learn about SV Manpower services - Leading manpower and staffing agency in Hyderabad with 15+ years of experience. We provide reliable staffing solutions for housekeeping, security, drivers, and more."
        keywords="about SV Manpower, manpower agency history, staffing company Hyderabad, recruitment agency experience, reliable staffing services, best manpower agency Hyderabad, professional staffing solutions"
        url="https://svmanpower.com/about"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              About SV Manpower services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-primary-100 leading-relaxed"
            >
              For over 25 years, we've been connecting exceptional talent with outstanding opportunities, 
              building careers and strengthening businesses across diverse industries.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-secondary-700 leading-relaxed">
              <p className="text-lg">
                Founded in 1999, SV Manpower services began as a small recruitment firm with a big vision: 
                to revolutionize how companies find talent and how professionals discover career opportunities.
              </p>
              <p>
                What started as a local operation has grown into a trusted partner for businesses nationwide, 
                helping over 10,000 professionals find their dream jobs and supporting 500+ companies in 
                building exceptional teams.
              </p>
              <p>
                Today, we combine traditional recruitment expertise with cutting-edge technology, 
                ensuring that every placement is not just a match, but a perfect fit that drives success 
                for both our clients and candidates.
              </p>
              <div className="mt-8 p-6 bg-secondary-50 rounded-lg">
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">Our Mission</h3>
                <p className="text-secondary-700">
                  To bridge the gap between talented professionals and exceptional opportunities, 
                  creating meaningful connections that drive career growth and business success. 
                  We are committed to providing reliable, professional, and efficient manpower solutions 
                  that meet the diverse needs of our clients across various industries.
                </p>
              </div>
              <div className="mt-6 p-6 bg-primary-50 rounded-lg border-l-4 border-primary-600">
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">Our Commitment</h3>
                <p className="text-secondary-700 mb-4">
                  At SV Manpower services, we understand that every business has unique staffing needs. 
                  Whether you require housekeeping staff, security personnel, office support, drivers, 
                  or specialized professionals, we are dedicated to finding the right talent for your organization.
                </p>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive background verification for all candidates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Quick deployment of qualified staff to meet urgent requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ongoing support and follow-up to ensure client satisfaction</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Flexible staffing solutions tailored to your business needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-secondary-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-secondary-600">
              Milestones that shaped our success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-secondary-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {milestone.year}
                  </div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-primary-100">
              Our impact speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-primary-100">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-primary-100">Successful Placements</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
