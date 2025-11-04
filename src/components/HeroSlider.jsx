import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Find Your Dream Career",
      subtitle: "Connect with top employers and discover exciting opportunities",
      image: "/hero.webp",
      cta: "Explore Jobs"
    },
    {
      id: 2,
      title: "Hire Top Talent",
      subtitle: "Access a pool of qualified professionals for your business needs",
      image: "/home-2.webp",
      cta: "Find Talent"
    },
    {
      id: 3,
      title: "Professional HR Services",
      subtitle: "Comprehensive human resources solutions for growing businesses",
      image: "/hero.webp",
      cta: "Learn More"
    }
  ]

  return (
    <div className="relative lg:h-[70vh] lg:min-h-[500px] h-auto overflow-visible">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: 'center 15%'
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>

              {/* Content */}
              <div className="relative lg:h-full flex items-center py-8">
                <div className="container-max px-4 w-full">
                  <div className="max-w-2xl text-white">
                    <h1 className="text-3xl md:text-5xl font-bold mb-3">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-2xl mb-6 text-gray-200">
                      {slide.subtitle}
                    </p>
                    <div>
                      <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg text-base md:text-lg transition-colors duration-200">
                        {slide.cta}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200">
        <ChevronLeft size={24} />
      </button>
      <button className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200">
        <ChevronRight size={24} />
      </button>

      {/* Custom Pagination */}
      <div className="swiper-pagination absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"></div>
    </div>
  )
}

export default HeroSlider
