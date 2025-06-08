import React from 'react';
import { Link } from 'react-router';

const ProductTable = ({ product }) => {
  const { _id, imageUrl, name, brand, category, quantity, price } = product;
  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-150">
      <td className="px-6 py-4 whitespace-nowrap">
        <img
          className="h-10 w-10 rounded-full object-cover border-2 border-gray-100 dark:border-gray-500"
          src={imageUrl}
          alt="Product"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
        {name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
        {brand}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          {category}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
        {quantity}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 dark:text-green-400">
        {price}
      </td>

      <td className="hidden lg:table-cell px-6 py-4 text-sm text-gray-500 dark:text-gray-300 max-w-xs truncate">
        Hey this product is good
      </td>
      <td>
        <Link to={`/productDetails/${_id}`}>
          <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-400">
            Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ProductTable;
