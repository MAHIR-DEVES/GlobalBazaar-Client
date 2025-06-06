import React from 'react';
import { Link } from 'react-router';

const Cards = ({ product }) => {
  const { _id, imageUrl, name, brand, category, rating } = product;

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative h-48 w-full overflow-hidden group">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Rating Badge */}
        {rating && (
          <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-700/90 text-amber-500 px-2 py-1 rounded-full flex items-center text-sm font-semibold backdrop-blur-sm">
            <svg className="w-4 h-4 mr-1 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {rating}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">
            {name}
          </h3>
          <span className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full">
            {brand}
          </span>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center">
          <svg
            className="w-4 h-4 mr-1 text-gray-400 dark:text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          {category}
        </p>

        {/* Details Button */}
        <Link to={`/productDetails/${_id}`}>
          <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
