import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home as HomeIcon, Building2, Car, Shield, Stethoscope, Sparkles, Calculator, GraduationCap, Wrench, Truck, Package, Calendar, Users, Award, CheckCircle, Star, MessageCircle } from 'lucide-react'
import HeroSlider from '../components/HeroSlider'
import SEO from '../components/SEO'

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SV Manpower services - Professional Recruitment & Staffing Solutions",
    "description": "Leading manpower and staffing agency in Hyderabad offering housekeeping, security, drivers, office staff, and more. 15+ years of experience.",
    "url": "https://svmanpower.com/",
    "mainEntity": {
      "@type": "Service",
      "serviceType": "Manpower Services",
      "provider": {
        "@type": "Organization",
        "name": "SV Manpower services"
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
    { number: '15+', label: 'Years Experience' },
    { number: '13+', label: 'Service Categories' }
  ]

  const services = [
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: 'Housekeeping',
      description: 'Professional housekeeping services for men and women - residential & commercial.',
      href: '/services'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Office Boys/Girls',
      description: 'Reliable office support staff for various office tasks and maintenance.',
      href: '/services'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Car Washing',
      description: 'Professional car washing services for car service centers and facilities.',
      href: '/services'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Watchman',
      description: 'Security personnel and watchman services with accommodation available.',
      href: '/services'
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Ward Boys/Girls',
      description: 'Hospital ward staff for patient care and hospital maintenance.',
      href: '/services'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Deep Cleaning',
      description: 'Professional deep cleaning for houses and commercial offices.',
      href: '/services'
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Accounting Jobs',
      description: 'Accounting professionals - any degree candidates available.',
      href: '/services'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Any Degree Jobs',
      description: 'Job placement for candidates with any degree qualification.',
      href: '/services'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Plumbing Works',
      description: 'Skilled plumbers for installation and repair works.',
      href: '/services'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Drivers',
      description: 'Professional drivers for personal and commercial vehicles.',
      href: '/services'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Delivery Boys',
      description: 'Delivery personnel for courier and food delivery services.',
      href: '/services'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Event Services',
      description: 'Complete staffing for events, functions, and marriage functions.',
      href: '/services'
    }
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Business Owner',
      company: 'Commercial Complex',
      content: 'SV Manpower services provided us with excellent housekeeping and security staff. Very reliable and professional service.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Priya Sharma',
      position: 'Hospital Administrator',
      company: 'City Hospital',
      content: 'They helped us find qualified ward boys and girls quickly. The staff is well-trained and dependable.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Amit Patel',
      position: 'Facility Manager',
      company: 'Office Complex',
      content: 'Outstanding service! They provided us with office boys, security, and cleaning staff. All very professional.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ]

  return (
    <div>
      <SEO
        title="SV Manpower services - Professional Recruitment & Staffing Solutions | Hyderabad | +91 9441160049"
        description="Leading manpower and staffing agency in Hyderabad. Professional housekeeping, security guards, drivers, office staff, ward boys, and more. 15+ years of experience. Call +91 9441160049 or WhatsApp us for quick staffing solutions."
        keywords="manpower services Hyderabad, staffing agencies Hyderabad, recruitment services Hyderabad, housekeeping services, security guards Hyderabad, drivers Hyderabad, office staff, watchman services, ward boys, car washing services, delivery boys, event staff, manpower agency near me, job placement Hyderabad, staffing solutions, temporary staffing, permanent placement, HR services, employment agency Hyderabad, best manpower agency, reliable staffing services"
        url="https://svmanpower.com/"
        structuredData={structuredData}
      />
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Stats Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Comprehensive manpower and staffing solutions for all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary-600 mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-4 text-sm">{service.description}</p>
                <a
                  href={`https://wa.me/919441160049?text=${encodeURIComponent(`Hello! I am interested in your ${service.title}. Please provide more information about your services.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg font-medium transition-colors text-sm"
                >
                  <MessageCircle className="w-3 h-3 mr-1" />
                  WhatsApp Us
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose SV Manpower Services?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              We are committed to providing the best manpower solutions
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
                <div className="text-primary-600 mb-4 flex justify-center">
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

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-secondary-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-secondary-900">{testimonial.name}</h4>
                    <p className="text-secondary-600 text-sm">
                      {testimonial.position} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-secondary-700 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find the Right Manpower?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today and let us help you find the perfect staff for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
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
