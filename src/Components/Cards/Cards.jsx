import React from 'react';
import { Link, useNavigate } from 'react-router';
import { GrUpdate } from 'react-icons/gr';

const Cards = ({ product }) => {
  const { _id, imageUrl, name, brand, category, rating, quantity, price } =
    product;

  const navigate = useNavigate();

  const handelUpdate = () => {
    navigate(`/updatedProduct/${_id}`);
  };
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:-translate-y-1 group/card">
      {/* Product Image with Hover Effects */}
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-10"></div>
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
          loading="lazy"
        />

        {/* Top Badges Container */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-20">
          {/* New Arrival Ribbon */}
          <div className="bg-rose-500 text-white text-xs px-2 py-1 rounded-md font-bold shadow-md">
            NEW
          </div>

          {/* Rating Badge */}
          {rating && (
            <div className="bg-white/90 dark:bg-gray-700/90 text-amber-500 px-2 py-1 rounded-full flex items-center text-sm font-semibold backdrop-blur-sm shadow-sm">
              <svg className="w-4 h-4 mr-1 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {rating}
            </div>
          )}
        </div>

        {/* Quick View Button (shown on hover) */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center opacity-0 group-hover/card:opacity-100 translate-y-2 group-hover/card:translate-y-0 transition-all duration-300 pb-3 z-20">
          <Link to={`/productDetails/${_id}`}>
            <button className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              Quick View
            </button>
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            {name}
          </h3>
          <span className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full">
            {brand}
          </span>
        </div>

        {/* Price Section */}
        <div className="flex items-center mb-2">
          <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mr-2">
            ${price}
          </span>
          <span className="text-sm text-gray-400 line-through">${price}</span>
          <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-1.5 py-0.5 rounded-full">
            10% OFF
          </span>
        </div>

        {/* Category and Stock Status */}
        <div className="flex justify-between items-center text-sm mb-4">
          <p className="text-gray-500 dark:text-gray-400 flex items-center">
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
          {quantity ? (
            <span className="text-green-600 dark:text-green-400 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              In Istok
            </span>
          ) : (
            <span className="text-red-600 dark:text-red-400 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Out of Istok
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {/* Details Button */}
          <Link to={`/productDetails/${_id}`} className="flex-1">
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
              <span className=" hidden lg:flex">View</span> Details
            </button>
          </Link>
          {/* <Link to={`/updatedProduct/${_id}`}> */}
          <button
            onClick={handelUpdate}
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <GrUpdate />
          </button>
          {/* </Link> */}

          {/* Wishlist Button */}
          <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
