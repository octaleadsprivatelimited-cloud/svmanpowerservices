import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Building2, Car, Shield, Stethoscope, Sparkles, Calculator, GraduationCap, Wrench, Truck, Package, Calendar, MessageCircle } from 'lucide-react'
import SEO from '../components/SEO'

const Services = () => {
  // WhatsApp message generator based on service title
  const getWhatsAppMessage = (serviceTitle) => {
    const messages = {
      'Housekeeping Services': 'Hello! I am interested in your Housekeeping Services. I need professional housekeeping staff for my property. Please provide more details about availability and pricing.',
      'Office Boys & Girls': 'Hello! I am interested in your Office Boys & Girls services. I need reliable office support staff. Please share details about your services.',
      'Car Washing Services': 'Hello! I am interested in your Car Washing Services. I need professional car washing staff for my car service center. Please provide information about your services.',
      'Watchman & Security Services': 'Hello! I am interested in your Watchman & Security Services. I need security personnel with accommodation. Please share details and availability.',
      'Ward Boys & Girls (Hospital)': 'Hello! I am interested in your Ward Boys & Girls services for hospitals. I need hospital ward staff for patient care. Please provide more information.',
      'Security Services': 'Hello! I am interested in your Security Services. I need trained security personnel for my facility. Please share details about your services.',
      'Deep Cleaning Services': 'Hello! I am interested in your Deep Cleaning Services. I need professional deep cleaning for my property. Please provide more details.',
      'Accounting Jobs': 'Hello! I am interested in your Accounting Jobs services. I need accounting professionals for my business. Please share details about available candidates.',
      'Any Degree Jobs': 'Hello! I am interested in your Any Degree Jobs placement services. I am looking for job opportunities. Please provide more information.',
      'Plumbing Works': 'Hello! I am interested in your Plumbing Works services. I need skilled plumbers for installation and repair works. Please share details.',
      'Drivers': 'Hello! I am interested in your Driver services. I need professional drivers for my vehicles. Please provide information about availability.',
      'Delivery Boys': 'Hello! I am interested in your Delivery Boys services. I need delivery personnel for my business. Please share details about your services.',
      'Event & Function Services': 'Hello! I am interested in your Event & Function Services. I need complete staffing for an upcoming event. Please provide more details.'
    }
    return encodeURIComponent(messages[serviceTitle] || `Hello! I am interested in your ${serviceTitle}. Please provide more information about your services.`)
  }

  const whatsappNumber = '919177587766'

  const videoByTitle = {
    'Housekeeping Services': '/video/cleaning.mp4',
    'Office Boys & Girls': encodeURI('/video/any job.mp4'),
    'Car Washing Services': encodeURI('/video/car washing.mp4'),
    'Watchman & Security Services': '/video/security.mp4',
    'Ward Boys & Girls (Hospital)': '/video/boys.mp4',
    'Security Services': '/video/securityy.mp4',
    'Deep Cleaning Services': encodeURI('/video/deep cleaning.mp4'),
    'Accounting Jobs': '/video/accounting.mp4',
    'Any Degree Jobs': encodeURI('/video/any degree.mp4'),
    'Plumbing Works': undefined,
    'Drivers': '/video/driving.mp4',
    'Delivery Boys': '/video/delivery.mp4',
    'Event & Function Services': '/video/events.mp4'
  }

  const mainServices = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Housekeeping Services',
      description: 'Professional housekeeping services for both men and women. We provide trained and reliable housekeeping staff for residential and commercial properties.',
      features: ['Men & Women staff available', 'Residential & Commercial', 'Trained professionals', 'Background verified'],
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      href: '/services/housekeeping'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Office Boys & Girls',
      description: 'Reliable office support staff including office boys and girls for various office tasks and maintenance.',
      features: ['Men & Women available', 'Office maintenance', 'Document handling', 'Quick deployment'],
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      href: '/services/office-boys'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Car Washing Services',
      description: 'Professional car washing boys for maintaining and cleaning vehicles at car service centers and facilities.',
      features: ['Expert car cleaners', 'Quick service', 'Quality assurance', 'Flexible schedules'],
      image: 'https://img.freepik.com/free-photo/professional-washer-blue-uniform-washing-luxury-car-with-water-gun-open-air-car-wash_496169-333.jpg',
      href: '/services/car-washing'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Watchman & Security Services',
      description: 'Security personnel and watchman services with accommodation provided. Available for both men and women.',
      features: ['With accommodation', '24/7 security', 'Trained guards', 'Background verified'],
      image: 'https://paladinsecurity.com/wp-content/uploads/2022/06/TMi9Fj0hkNf3fV-1-scaled.jpg',
      href: '/services/watchman'
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Ward Boys & Girls (Hospital)',
      description: 'Hospital ward boys and girls for patient care and hospital maintenance services.',
      features: ['Men & Women available', 'Hospital trained', 'Patient care', 'Reliable service'],
      image: 'https://5.imimg.com/data5/ANDROID/Default/2023/9/348649045/AH/TN/PR/196043815/product-jpeg-500x500.jpg',
      href: '/services/ward-boys'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Services',
      description: 'Comprehensive security services with trained security personnel for both men and women.',
      features: ['Men & Women guards', 'Trained professionals', '24/7 coverage', 'Verified staff'],
      image: 'https://tse2.mm.bing.net/th/id/OIP.QzBCk5J5HaErvVyFmM143wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
      href: '/services/security'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Deep Cleaning Services',
      description: 'Professional deep cleaning services for houses and commercial offices. Thorough cleaning solutions.',
      features: ['House cleaning', 'Commercial cleaning', 'Deep cleaning', 'Regular maintenance'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      href: '/services/deep-cleaning'
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Accounting Jobs',
      description: 'Accounting professionals for various accounting roles. Any degree candidates available.',
      features: ['Any degree accepted', 'Accounting expertise', 'Quick placement', 'Verified credentials'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      href: '/services/accounting-jobs'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Any Degree Jobs',
      description: 'Job placement services for candidates with any degree qualification across various sectors.',
      features: ['All degree types', 'Multiple sectors', 'Career guidance', 'Placement support'],
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      href: '/services/any-degree-jobs'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Plumbing Works',
      description: 'Skilled plumbers and plumbing professionals for various plumbing installation and repair works.',
      features: ['Expert plumbers', 'Installation & repair', 'Quick response', 'Quality work'],
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      href: '/services/plumbing'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Drivers',
      description: 'Professional drivers for various vehicle types including personal drivers and commercial drivers.',
      features: ['Licensed drivers', 'All vehicle types', 'Background verified', 'Reliable service'],
      image: 'https://www.elements.org/media/3130/istock-653102446.jpg?width=515&height=316&quality=90&v=1dae8364d1a53e0',
      href: '/services/drivers'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Delivery Boys',
      description: 'Delivery personnel for various delivery services including courier and food delivery.',
      features: ['Quick delivery', 'Reliable service', 'Multiple locations', 'Flexible schedules'],
      image: 'https://im.indiatimes.in/content/2020/Apr/Amazon-600x450_5e86d806d4c40.jpg',
      href: '/services/delivery-boys'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Event & Function Services',
      description: 'Complete staffing solutions for events, functions, marriage functions, and all types of functions.',
      features: ['Event staffing', 'Marriage functions', 'All function types', 'Complete staffing'],
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      href: '/services/event-services'
    }
  ]

  const carServices = [
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Car Washing Boys',
      description: 'Professional car washing services for car service centers.',
      features: ['Expert cleaners', 'Quick service', 'Quality results']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Services',
      description: 'Security personnel for car service centers - men and women available.',
      features: ['Men & Women guards', '24/7 security', 'Trained professionals']
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Housekeeping Services',
      description: 'Housekeeping staff for car service centers - women staff available.',
      features: ['Women staff', 'Maintenance', 'Clean facilities']
    }
  ]

  return (
    <div>
      <SEO
        title="Our Services - Housekeeping, Security, Drivers & More | SV Manpower services Hyderabad"
        description="Comprehensive manpower services in Hyderabad: Housekeeping, Security Guards, Drivers, Office Staff, Ward Boys, Car Washing, Delivery Boys, Event Staff, and more. Professional staffing solutions. Call +91 9441160049"
        keywords="manpower services Hyderabad, housekeeping services, security guards, drivers, office staff, watchman services, ward boys, car washing services, delivery boys, event staff, plumbing services, accounting jobs, deep cleaning services, temporary staffing, permanent placement, staffing solutions Hyderabad"
        url="https://svmanpower.com/services"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Manpower Services",
          "provider": {
            "@type": "Organization",
            "name": "SV Manpower services"
          },
          "areaServed": "Hyderabad",
          "description": "Professional manpower and staffing services including housekeeping, security, drivers, office staff, and more."
        }}
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
              Professional Manpower & Staffing Services in Hyderabad
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-primary-100 leading-relaxed"
            >
              Comprehensive manpower and staffing solutions for all your business and personal needs. Housekeeping, Security, Drivers, Office Staff, and more.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              We provide skilled and reliable manpower for various sectors and services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    {videoByTitle[service.title] ? (
                      <video
                        src={videoByTitle[service.title]}
                        className="w-full h-48 md:h-full object-cover bg-black"
                        muted
                        autoPlay
                        loop
                        playsInline
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="md:w-1/2 p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-primary-600 mr-3">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-secondary-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-secondary-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-secondary-700">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${getWhatsAppMessage(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Services Center Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Car Services Center
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Specialized staffing solutions for car service centers and automotive facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {carServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-secondary-700">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello! I am interested in your ${service.title} for Car Service Center. Please provide more details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              How we ensure the perfect match every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Contact Us',
                description: 'Get in touch with us to discuss your staffing requirements and needs.'
              },
              {
                step: '02',
                title: 'Screening',
                description: 'We identify and screen qualified candidates matching your requirements.'
              },
              {
                step: '03',
                title: 'Selection',
                description: 'We present you with pre-screened candidates for your approval.'
              },
              {
                step: '04',
                title: 'Deployment',
                description: 'We ensure smooth onboarding and provide ongoing support.'
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today to find the perfect manpower solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Contact Us Today
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
