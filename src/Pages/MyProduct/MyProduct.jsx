import React, { use, useEffect, useState } from 'react';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import axios from 'axios';
import MyProductTable from './MyProductTable';

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
    </div>
  );
};

export default MyProduct;
