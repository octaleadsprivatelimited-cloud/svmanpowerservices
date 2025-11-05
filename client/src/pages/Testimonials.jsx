import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import SEO from '../components/SEO'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [playingVideo, setPlayingVideo] = useState(null)
  const videoRefs = useRef({})

  // Pause all videos when switching
  useEffect(() => {
    Object.values(videoRefs.current).forEach((video) => {
      if (video && video !== videoRefs.current[playingVideo]) {
        video.pause()
        video.currentTime = 0
      }
    })
  }, [playingVideo])

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'HR Director',
      company: 'TechCorp Solutions',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      content: 'SV Manpower services transformed our hiring process. Their attention to detail and understanding of our culture resulted in placements that exceeded our expectations. We\'ve reduced our time-to-hire by 40% and improved retention rates significantly.',
      project: 'Technology Team Expansion'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CEO',
      company: 'InnovateLab',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      content: 'Outstanding service! They helped us find the perfect CTO and built our entire engineering team. The candidates they presented were not just qualified but also aligned with our company values. Highly recommended for any growing tech company.',
      project: 'Executive Search & Team Building'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Operations Manager',
      company: 'Global Solutions Inc.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      content: 'Professional, reliable, and results-driven. They made our hiring process seamless during our rapid expansion. The temporary staff they provided was exceptional, and many became permanent employees. A true partnership.',
      project: 'Rapid Expansion Support'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'VP of Finance',
      company: 'FinanceFirst',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      content: 'Their expertise in finance recruitment is unmatched. They understand the nuances of our industry and consistently deliver candidates who not only meet technical requirements but also fit our corporate culture perfectly.',
      project: 'Finance Team Development'
    },
    {
      id: 5,
      name: 'Lisa Park',
      position: 'Chief Medical Officer',
      company: 'HealthCare Plus',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      content: 'During the healthcare crisis, SV Manpower services provided us with qualified medical professionals quickly and efficiently. Their understanding of healthcare requirements and urgency saved lives. Truly exceptional service.',
      project: 'Healthcare Crisis Response'
    },
    {
      id: 6,
      name: 'Robert Martinez',
      position: 'Plant Manager',
      company: 'Manufacturing Pro',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      content: 'They helped us staff our new manufacturing facility with skilled workers who were safety-conscious and productive from day one. Their background checks and skills assessments gave us confidence in every hire.',
      project: 'Manufacturing Facility Staffing'
    }
  ]

  const stats = [
    { number: '98%', label: 'Client Satisfaction Rate' },
    { number: '85%', label: 'Repeat Business Rate' },
    { number: '40%', label: 'Average Time-to-Hire Reduction' },
    { number: '95%', label: 'Candidate Retention Rate' }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div>
      <SEO
        title="Client Testimonials - Success Stories | SV Manpower services Hyderabad"
        description="Read testimonials from satisfied clients about SV Manpower services. Real success stories from businesses who have used our housekeeping, security, drivers, and staffing solutions. See why clients trust us for their manpower needs."
        keywords="manpower services testimonials, client reviews, staffing agency reviews, manpower services feedback, customer testimonials Hyderabad, staffing success stories, satisfied clients, manpower agency reviews"
        url="https://svmanpower.com/testimonials"
      />
      {/* Hero Section */}
      <section className="relative text-white py-20 lg:pt-32 bg-cover bg-center bg-no-repeat hero-bg-position" style={{ backgroundImage: 'url(/hero.webp)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/80 to-primary-800/80"></div>
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Hear from our satisfied clients about their success stories
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Success Metrics
            </h2>
            <p className="text-xl text-secondary-600">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-700 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-secondary-600">
              Real stories from real clients
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-lg shadow-xl p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <Quote className="w-12 h-12 text-primary-200 mx-auto mb-6" />
                  
                  <p className="text-lg md:text-xl text-secondary-700 leading-relaxed mb-8 italic">
                    "{testimonials[currentSlide].content}"
                  </p>

                  <div className="flex items-center justify-center mb-6">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-secondary-900">
                        {testimonials[currentSlide].name}
                      </h3>
                      <p className="text-secondary-600">
                        {testimonials[currentSlide].position}
                      </p>
                      <p className="text-primary-600 font-medium">
                        {testimonials[currentSlide].company}
                      </p>
                      <p className="text-sm text-secondary-500">
                        Project: {testimonials[currentSlide].project}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-secondary-50 p-2 rounded-full shadow-md transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-secondary-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-secondary-50 p-2 rounded-full shadow-md transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-secondary-600" />
              </button>

              {/* Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-primary-600' : 'bg-secondary-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="section-padding bg-secondary-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-secondary-600">
              Hear directly from our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Security Services',
                video: '/video/security.mp4',
                description: 'Professional security guard services'
              },
              {
                title: 'Cleaning Services',
                video: '/video/cleaning.mp4',
                description: 'Expert housekeeping and cleaning solutions'
              },
              {
                title: 'Any Job Placement',
                video: encodeURI('/video/any job.mp4'),
                description: 'Versatile staffing for all job types'
              },
              {
                title: 'Driving Services',
                video: '/video/driving.mp4',
                description: 'Professional drivers and chauffeurs'
              },
              {
                title: 'Deep Cleaning',
                video: encodeURI('/video/deep cleaning.mp4'),
                description: 'Thorough deep cleaning services'
              },
              {
                title: 'Car Washing',
                video: encodeURI('/video/car washing.mp4'),
                description: 'Professional car washing and detailing'
              },
              {
                title: 'Event Services',
                video: '/video/events.mp4',
                description: 'Event staff and management services'
              }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => {
                  setPlayingVideo(playingVideo === index ? null : index)
                }}
              >
                <div className="relative">
                  {playingVideo === index ? (
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={video.video}
                      controls
                      autoPlay
                      className="w-full h-64 object-cover bg-black"
                      onClick={(e) => e.stopPropagation()}
                      onEnded={() => setPlayingVideo(null)}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <>
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={video.video}
                        className="w-full h-64 object-cover"
                        muted
                        preload="metadata"
                        playsInline
                      >
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/40 flex items-center justify-center hover:from-black/70 hover:via-black/50 hover:to-black/50 transition-all">
                        <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 hover:scale-110 transition-all shadow-lg">
                          <div className="w-0 h-0 border-l-8 border-l-primary-600 border-y-8 border-y-transparent ml-1"></div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-secondary-600">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let us help you achieve the same level of success that our clients have experienced.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Start Your Success Story
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
