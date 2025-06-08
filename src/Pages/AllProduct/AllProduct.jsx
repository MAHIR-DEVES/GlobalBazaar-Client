import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router';
import Cards from '../../Components/Cards/Cards';
import ProductTable from '../../Components/ProductTable/ProductTable';

const AllProduct = () => {
  const products = useLoaderData();
  const [toggle, setToggle] = useState(true);
  // console.log(products);
  console.log(toggle);

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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Brand
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Qty
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Price
                </th>

                <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Description
                </th>
                <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Details
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
