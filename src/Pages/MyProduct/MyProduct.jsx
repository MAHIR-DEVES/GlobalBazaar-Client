import React, { use, useEffect, useState } from 'react';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import axios from 'axios';
import MyProductTable from './MyProductTable';
import { Link } from 'react-router';

const MyProduct = () => {
  TabTitle('GlobalBazaar - MyProduct');

  const { user } = use(AuthContext);
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    axios(`http://localhost:3000/my-products/`, {
      params: { email: user?.email },
    })
      .then(res => {
        setMyProducts(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [user]);

  return (
    <div>
      {myProducts.length === 0 ? (
        <div className="min-h-screen bg-[#eef4ff] dark:bg-gray-800 transition-colors duration-300 p-4 md:p-6">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
            {/* Empty State */}
            <div className="p-12 text-center">
              <svg
                className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-500 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                No Product Yet
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                You haven't added any posts. Create your first post to get
                started!
              </p>
              <Link to={'/addProduct'}>
                <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-300">
                  Add New Post
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600 my-5">
          {/* Table Header */}
          <thead className="bg-gray-50 dark:bg-gray-600">
            <tr>
              {/* Image - always visible */}
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Image
              </th>

              {/* Name - hidden on mobile (since it appears next to image on mobile) */}
              <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                price
              </th>

              {/* Brand - hidden on mobile */}
              <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Category
              </th>

              {/* Category - hidden on mobile */}
              <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Quantity
              </th>

              {/* Quantity - hidden on mobile */}
              <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
            {myProducts.map(product => (
              <MyProductTable
                key={product._id}
                product={product}
                myProducts={myProducts}
                setMyProducts={setMyProducts}
              ></MyProductTable>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyProduct;
