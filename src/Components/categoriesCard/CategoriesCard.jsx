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
    <div
      key={category.id}
      className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-6 text-center">
        <div className="text-4xl mb-4">{category.icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {category.category} product
        </h3>

        <button
          onClick={handelNavigate}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          View Product
        </button>
      </div>
    </div>
  );
};

export default CategoriesCard;
