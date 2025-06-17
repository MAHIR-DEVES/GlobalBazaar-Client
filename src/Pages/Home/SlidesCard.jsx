import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router';

const SlidesCard = ({ slides }) => {
  console.log(slides);

  // const { imageUrl, name, category, subtitle, bgColor, price, _id } =
  //   slide || {};

  return (
    <p>helllo</p>
    // <div className="px-2 h-full">
    //   <div
    //     className={`bg-[#eef4ff] dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full flex flex-col border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
    //   >
    //     {/* Image Container */}
    //     <div className="h-48 overflow-hidden bg-white">
    //       <img
    //         src={
    //           imageUrl ||
    //           'https://via.placeholder.com/400x300?text=Product+Image'
    //         }
    //         alt={name || 'Product'}
    //         className="w-full h-full object-contain p-4"
    //       />
    //     </div>

    //     {/* Content Container */}
    //     <div className="p-4 flex-1 flex flex-col">
    //       {/* Category Badge */}
    //       <div className="mb-2">
    //         <span
    //           className={`${
    //             bgColor || 'bg-indigo-100 dark:bg-indigo-900'
    //           } text-indigo-800 dark:text-indigo-200 text-xs font-medium px-2.5 py-0.5 rounded`}
    //         >
    //           {category || 'Category'}
    //         </span>
    //       </div>

    //       {/* Product Name */}
    //       <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-1">
    //         {name || 'Product Name'}
    //       </h3>

    //       {/* Subtitle/Description */}
    //       <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
    //         {subtitle || 'Product description goes here'}
    //       </p>

    //       {/* Button and Price */}
    //       <div className="mt-auto flex items-center justify-between">
    //         <span className="text-lg font-bold text-gray-900 dark:text-white">
    //           ${price || '00.00'}
    //         </span>
    //         <Link to={`/productDetails/${_id}`}>
    //           <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
    //             Shop Now
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SlidesCard;
