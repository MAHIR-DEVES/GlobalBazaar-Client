import React from 'react';
import { motion } from 'framer-motion';

const SlidesCard = ({ slides = [] }) => {
  const marqueeItems = [...slides, ...slides, ...slides];

  return (
    <div className="relative overflow-hidden bg-[#eef4ff] dark:bg-gray-800 py-4 w-full">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ['0%', '-100%'],
        }}
        transition={{
          duration: 15,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {marqueeItems.map((slide, index) => (
          <motion.div
            key={`${slide._id || slide.id || index}`}
            className="inline-flex mx-4"
            whileHover={{ scale: 1.03 }}
          >
            <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm w-48 flex flex-col">
              <img
                src={slide.photo || slide.image}
                alt={slide.name || 'Slide image'}
                className="w-full h-32 object-cover rounded-md mb-2 flex-shrink-0"
              />
              <div className="flex-grow">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {slide.name || 'Slide'}
                </h3>
                {slide.price && (
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                    ${slide.price}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SlidesCard;
