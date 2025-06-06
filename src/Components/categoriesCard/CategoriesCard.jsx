import React from 'react';
import { Link } from 'react-router';

const CategoriesCard = ({ category }) => {
  return (
    <div className="bg-[#eef4ff] dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col ">
      <div className=" w-50">
        {/* Full-width image container */}
        <div className="w-full aspect-square bg-gray-100 dark:bg-gray-700 overflow-hidden">
          <img
            src={category.img}
            alt={category.category}
            className="w-full h-50 object-cover"
          />
        </div>

        {/* Content area with consistent padding */}
        <div className="p-6 flex flex-col items-center gap-4">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white text-center">
            {category.category}
          </h2>

          <Link to={`/category/${category._id}`}>
            <button className="w-full py-2 bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 text-sm font-medium hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors duration-200">
              View all products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
