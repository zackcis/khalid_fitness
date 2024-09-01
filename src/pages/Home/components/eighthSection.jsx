import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
// import { Navigation } from 'swiper/modules';
// import { Autoplay} from "swiper";

import carou from '../../../assets/img/carou-2.png';
import carou1 from '../../../assets/img/carou-1.webp';
import carou2 from '../../../assets/img/carou-3.png';
import carou3 from '../../../assets/img/carou-5.png';
import carou4 from '../../../assets/img/carou-7.png';
import carou5 from '../../../assets/img/carou-8.png';
import carou6 from '../../../assets/img/carou-9.png';
import carou7 from '../../../assets/img/carou-10.png';
import carou8 from '../../../assets/img/carou-11.png';
import carou9 from '../../../assets/img/carou-12.png';
import carou10 from '../../../assets/img/carou-16.jpg';
import carou11 from '../../../assets/img/carou-14.jpg';
import carou12 from '../../../assets/img/carou-15.jpg';
import carou13 from '../../../assets/img/carousel-1.JPG';
import carou14 from '../../../assets/img/carou-17.jpg';
import carou15 from '../../../assets/img/carousel-4.jpeg';
import carou16 from '../../../assets/img/carou-19.png';
import { Autoplay } from "swiper/modules";

export const EighthSection = () => {
    const [carouse, setCarousel] = useState([carou14,carou13, carou11,carou10, carou15,carou12, carou14, carou16, carou, carou2, carou3, carou4, carou5, carou6]);
    // SwiperCore.use([Autoplay])
    return (
        <div className="flex flex-col gap-3 p-0 w-[100%] justify-center items-center bg-black">
            <p className="flex font-bold p-10 gap-3 text-center items-center text-[#5a5a5a]">
                <FaInstagram className="text-white text-3xl" /> FOLLOW ME ON @KHALIDMARDY.FIT
            </p>
            <div className="lg:w-[100%] max-[430px]:w-[90%] lg:h-[45vh] max-[430px]:h-[13vh] flex justify-center items-center">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={4}
                    autoplay={{
                        delay: 1400,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay]}
                    //   navigation
                    //   modules={[Navigation]} 
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {carouse.map((element, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <div className="swiper-slide-content flex justify-center items-center">
                                <img className="object-fill max-w-full max-h-full" src={element} alt={`carousel-img-${index}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
