import React from 'react';
import BannerImage from '../../assets/banner.jpg';

const Slider = () => {
  return (
    <div className="relative w-full mx-auto overflow-hidden shadow-lg aspect-[16/9] md:aspect-[16/7] lg:aspect-[16/6]">
      {/* Responsive Image Container */}
      <div className="w-full h-full">
        <img
          src={BannerImage}
          alt="Special Offer"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Overlay (optional) */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        {/* Add your content here if needed */}
      </div>
    </div>
  );
};

export default Slider;
