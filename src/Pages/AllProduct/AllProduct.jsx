import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router';
import Cards from '../../Components/Cards/Cards';
import ProductTable from '../../Components/ProductTable/ProductTable';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';

const AllProduct = () => {
  TabTitle('GlobalBazaar - All Product');
  const products = useLoaderData();
  const [toggle, setToggle] = useState(false);

  return (
    <div className="">
      <div className="text-right py-5 cursor-pointer">
        <span
          onClick={() => setToggle(!toggle)}
          className=" bg-indigo-600 font-medium py-2 px-4 rounded-lg transition text-white"
        >
          {toggle ? 'Card View' : 'Table View'}
        </span>
      </div>
      {toggle ? (
        <div className="">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
            {/* Table Header */}
            <thead className="bg-gray-50 dark:bg-gray-600">
              <tr>
                {/* Image - always visible */}
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Image
                </th>

                {/* Name - hidden on mobile (since it appears next to image on mobile) */}
                <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Name
                </th>

                {/* Brand - hidden on mobile */}
                <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Brand
                </th>

                {/* Category - hidden on mobile */}
                <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Category
                </th>

                {/* Quantity - hidden on mobile */}
                <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Qty
                </th>

                {/* Price - hidden on mobile */}
                <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Price
                </th>

                {/* Description - hidden on tablet and below */}
                <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Description
                </th>

                {/* Details - always visible (but text hidden on mobile) */}
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  <span className="hidden sm:inline">Details</span>
                  <span className="sm:hidden">Action</span>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
              {products.map(product => (
                <ProductTable
                  key={product._id}
                  product={product}
                ></ProductTable>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full px-2 md:px-0 gap-2 md:gap-4 mt-10">
          {products.map(product => (
            <Cards product={product} key={product._id}></Cards>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProduct;
