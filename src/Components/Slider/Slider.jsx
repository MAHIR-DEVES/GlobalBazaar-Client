import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import slide1 from '../../assets/slide-1.jpg';
import slide2 from '../../assets/slide-2.jpg';
import slide3 from '../../assets/slide-3.jpg';
export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <div className="absolute inset-0 bg-black/40"></div>
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute inset-0 bg-black/40"></div>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute inset-0 bg-black/40"></div>
          <img src={slide3} alt="" />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
