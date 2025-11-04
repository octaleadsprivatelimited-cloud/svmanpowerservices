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
    <>
      {/* Mobile Hero Section - Full Page */}
      <div className="lg:hidden relative h-screen w-full overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: '.mobile-swiper-pagination',
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
              <div className="relative h-full w-full">
                {/* Background Image - Full Coverage */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ 
                    backgroundImage: `url(${slide.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
                </div>

                {/* Content - Centered */}
                <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
                  <div className="max-w-sm mx-auto space-y-4">
                    <h1 className="text-3xl font-bold text-white leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-base text-gray-200 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <div className="pt-2">
                      <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg text-base transition-colors duration-200 shadow-lg">
                        {slide.cta}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile Pagination */}
        <div className="mobile-swiper-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"></div>
      </div>

      {/* Desktop Hero Section */}
      <div className="hidden lg:block relative lg:h-[62.5vh] lg:min-h-[440px] overflow-visible">
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
                      <h1 className="text-2xl md:text-4xl font-bold mb-2">
                        {slide.title}
                      </h1>
                      <p className="text-base md:text-xl mb-4 text-gray-200">
                        {slide.subtitle}
                      </p>
                      <div>
                        <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-5 rounded-lg text-sm md:text-base transition-colors duration-200">
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
    </>
  )
}

export default HeroSlider
