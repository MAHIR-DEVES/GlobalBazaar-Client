import React from 'react';
import { Link, useNavigate } from 'react-router';

const CategoriesCard = ({ category }) => {
  const navigate = useNavigate();
  const handelNavigate = () => {
    navigate(`/category/${category._id}`, {
      state: { category: category.category },
    });
  };

  return (
    <div className="bg-[#eef4ff] dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 flex flex-col h-full">
      {/* Image container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden group">
        <img
          src={category.img}
          alt={category.category}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Content area */}
      <div className="p-4 flex flex-col items-center">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white text-center mb-2 line-clamp-2">
          {category.category}
        </h2>

        <button
          onClick={handelNavigate}
          className="w-full py-2 px-3 bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-md hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors duration-200 border border-blue-50 dark:border-gray-600 flex items-center justify-center gap-1"
        >
          <span>View products</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CategoriesCard;
