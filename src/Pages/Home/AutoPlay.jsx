import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import axios from 'axios';
import SlidesCard from './SlidesCard';

function AutoPlay() {
  const [slides, setSlides] = useState([]);
  console.log(slides);

  useEffect(() => {
    axios('https://b11-assignment-11.vercel.app/get-allProducts-forSlide')
      .then(res => {
        setSlides(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-[#eef4ff] dark:bg-gray-800 py-12  sm:px-6 lg:px-8">
      <div className="w-full">
        <h2 className="text-3xl font-bold dark:text-white text-black mb-8 text-center">
          Featured Collections
        </h2>
        <div className="flex ">
          <SlidesCard slides={slides}></SlidesCard>
        </div>
      </div>
    </div>
  );
}

export default AutoPlay;
