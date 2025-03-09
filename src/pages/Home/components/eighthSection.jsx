import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

// Import images
import carou from "../../../assets/img/carou-2.png";
import carou2 from "../../../assets/img/carou-3.png";
import carou3 from "../../../assets/img/carou-5.png";
import carou4 from "../../../assets/img/carou-7.png";
import carou5 from "../../../assets/img/carou-8.png";
import carou6 from "../../../assets/img/carou-9.png";
import carou10 from "../../../assets/img/carou-16.jpg";
import carou11 from "../../../assets/img/carou-14.jpg";
import carou12 from "../../../assets/img/carou-15.jpg";
import carou14 from "../../../assets/img/carou-17.jpg";
import carou15 from "../../../assets/img/carousel-4.jpeg";
import carou16 from "../../../assets/img/carou-19.png";

// Keyframes & animation
const flipAnimation = `
  @keyframes flipAndGlow {
    0% { transform: rotateY(0deg) scale(0.95); box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); }
    50% { transform: rotateY(90deg) scale(1.02); box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3); }
    100% { transform: rotateY(0deg) scale(1); box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); }
  }
  .card-active {
    animation: flipAndGlow 1.2s ease-in-out;
  }
`;

export const EighthSection = () => {
  const carousel = [
    carou14, carou11, carou10, carou15, carou12,
    carou14, carou16, carou, carou2, carou3,
    carou4, carou5, carou6,
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full justify-center items-center bg-black py-6 sm:py-8 md:py-10">
      <style>{flipAnimation}</style>

      {/* Instagram Section */}
      <p className="
        flex font-bold items-center justify-center 
        gap-2 sm:gap-3 md:gap-4 
        px-4 sm:px-6 md:px-10 
        py-6 sm:py-8 md:py-10 
        text-[#5a5a5a] text-center
        text-sm sm:text-base md:text-lg lg:text-xl
      ">
        <FaInstagram className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl" /> 
        FOLLOW ME ON @KHALIDMARDY.FIT
      </p>

      {/* Carousel */}
      <div className="w-full max-w-[100vw] px-2 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
        <Swiper
          spaceBetween={10} // Responsive base spacing
          slidesPerView={1.5} // Default for smallest screens
          centeredSlides={false}
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 8 },
            480: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 2.5, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 25 },
            1280: { slidesPerView: 5, spaceBetween: 30 },
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Better UX for desktop
          }}
          speed={4000} // Slightly slower for smoother effect
          loop={true}
          freeMode={true}
          modules={[Autoplay, FreeMode]}
          className="w-full"
          onSlideChange={handleSlideChange}
        >
          {carousel.concat(carousel).map((element, index) => (
            <SwiperSlide 
              key={index} 
              className="flex justify-center items-center"
            >
              <div className={`
                relative rounded-lg overflow-hidden
                w-[160px] h-[200px] 
                sm:w-[180px] sm:h-[225px]
                md:w-[200px] md:h-[250px]
                lg:w-[220px] lg:h-[275px]
                ${index === activeIndex ? 'card-active' : ''}
              `}>
                <img 
                  className="object-cover w-full h-full" 
                  src={element} 
                  alt={`carousel-img-${index}`} 
                  loading="lazy" // Performance optimization
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};