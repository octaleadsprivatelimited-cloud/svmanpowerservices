import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home as HomeIcon, Building2, Car, Shield, Stethoscope, Sparkles, Calculator, GraduationCap, Wrench, Truck, Package, Calendar, Users, Award, CheckCircle, MessageCircle } from 'lucide-react'
import HeroSlider from '../components/HeroSlider'
import SEO from '../components/SEO'

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Shrijaa Outsourcing Consultants - Professional Manpower Solutions",
    "description": "Professional manpower solutions provider in Hyderabad offering skilled, semi-skilled, and unskilled workforce through flexible staffing models.",
    "url": "https://shrijaaoutsourcing.com/",
    "mainEntity": {
      "@type": "Service",
      "serviceType": "Manpower Services",
      "provider": {
        "@type": "Organization",
        "name": "Shrijaa Outsourcing Consultants"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Manpower Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Housekeeping Services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Security & Watchman Services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Driver Services"
            }
          }
        ]
      }
    }
  }
  const stats = [
    { number: '1000+', label: 'Successful Placements' },
    { number: '200+', label: 'Happy Clients' },
    { number: '2024', label: 'Year of Establishment' },
    { number: '13+', label: 'Service Categories' }
  ]

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Watchman',
      description: 'Security personnel and watchman services with accommodation available.',
      image: 'https://paladinsecurity.com/wp-content/uploads/2022/06/TMi9Fj0hkNf3fV-1-scaled.jpg',
      href: '/services'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Office Boys/Girls',
      description: 'Reliable office support staff for various office tasks and maintenance.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      href: '/services'
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: 'Housekeeping',
      description: 'Professional housekeeping services for men and women - residential & commercial.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      href: '/services'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Drivers',
      description: 'Professional drivers for personal and commercial vehicles.',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
      href: '/services'
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Ward Boys/Girls',
      description: 'Hospital ward staff for patient care and hospital maintenance.',
      image: 'https://5.imimg.com/data5/ANDROID/Default/2023/9/348649045/AH/TN/PR/196043815/product-jpeg-500x500.jpg',
      href: '/services'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Delivery Boys',
      description: 'Delivery personnel for courier and food delivery services.',
      image: 'https://im.indiatimes.in/content/2020/Apr/Amazon-600x450_5e86d806d4c40.jpg',
      href: '/services'
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Accounting Jobs',
      description: 'Accounting professionals - any degree candidates available.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      href: '/services'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Car Washing',
      description: 'Professional car washing services for car service centers and facilities.',
      image: 'https://img.freepik.com/free-photo/professional-washer-blue-uniform-washing-luxury-car-with-water-gun-open-air-car-wash_496169-333.jpg',
      href: '/services'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Plumbing Works',
      description: 'Skilled plumbers for installation and repair works.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      href: '/services'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Any Degree Jobs',
      description: 'Job placement for candidates with any degree qualification.',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      href: '/services'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Deep Cleaning',
      description: 'Professional deep cleaning for houses and commercial offices.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      href: '/services'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Event Services',
      description: 'Complete staffing for events, functions, and marriage functions.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      href: '/services'
    }
  ]


  return (
    <div>
      <SEO
        title="Shrijaa Outsourcing Consultants - Professional Manpower Solutions | Hyderabad"
        description="Shrijaa Outsourcing Consultants offers professional manpower solutions in Hyderabad. WhatsApp/Call +91 7989308337 for reliable workforce support."
        keywords="manpower services Hyderabad, staffing agencies Hyderabad, recruitment services Hyderabad, housekeeping services, security guards Hyderabad, drivers Hyderabad, office staff, watchman services, ward boys, car washing services, delivery boys, event staff, manpower agency near me, job placement Hyderabad, staffing solutions, temporary staffing, permanent placement, HR services, employment agency Hyderabad, best manpower agency, reliable staffing services"
        url="https://shrijaaoutsourcing.com/"
        structuredData={structuredData}
      />
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Stats Section */}
      <section className="py-8 md:py-12 bg-zinc-900">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm md:text-base text-amber-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-[#f6f7f9]">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Manpower Services - Housekeeping, Security, Drivers & More
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Comprehensive manpower and staffing solutions for all your needs. Professional services for residential, commercial, and industrial requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-24 sm:h-36 lg:h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-2 sm:p-4 lg:p-5 flex flex-col flex-grow">
                  <div className="text-amber-700 mb-2 scale-75 sm:scale-100 origin-left">{service.icon}</div>
                  <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="hidden sm:block text-gray-600 mb-5 text-sm leading-relaxed flex-grow">{service.description}</p>
                  <div className="flex items-center justify-between gap-2 mt-auto">
                    <Link
                      to={service.href}
                      className="text-orange-600 hover:text-orange-700 font-semibold text-[11px] sm:text-sm transition-colors"
                    >
                      Read More »
                    </Link>
                    <a
                      href={`https://wa.me/917989308337?text=${encodeURIComponent(`Hello! I am interested in your ${service.title}. Please provide more information about your services.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded font-medium transition-colors text-[11px] sm:text-sm"
                    >
                      <MessageCircle className="w-3 h-3 mr-1 hidden sm:inline" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-stone-100">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose Shrijaa Outsourcing Consultants
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              We are committed to delivering reliable manpower solutions with professionalism, integrity, and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Verified Staff',
                description: 'All our staff members are background verified and properly trained for their roles.'
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: 'Quality Service',
                description: 'We maintain high standards and ensure quality in all our staffing solutions.'
              },
              {
                icon: <CheckCircle className="w-12 h-12" />,
                title: 'Reliable & Trustworthy',
                description: 'Years of experience in providing reliable manpower solutions to satisfied clients.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="text-amber-700 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-zinc-900 to-slate-900">
        <div className="container-max text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find the Right Manpower?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Contact us today and let us help you find the perfect staff for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-orange-600 text-white hover:bg-orange-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="border-2 border-orange-500 text-orange-100 hover:bg-orange-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
