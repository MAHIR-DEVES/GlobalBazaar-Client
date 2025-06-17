import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
// import './slide.css';

import { EffectCards } from 'swiper/modules';

const ProductSlide = ({ data }) => {
  return (
    <div>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {data?.map(dat => (
          <SwiperSlide>
            <img src={dat?.imageUrl} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlide;
