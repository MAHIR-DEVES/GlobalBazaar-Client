import React, { useEffect } from 'react';
import { useState } from 'react';
import Cards from '../../Components/Cards/Cards';
import ProductTable from '../../Components/ProductTable/ProductTable';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Loading from '../../Components/Loading/Loading';

const AllProduct = () => {
  TabTitle('GlobalBazaar - All Product');
  const [products, setProducts] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [asc, setAsc] = useState('asc');
  const [loading, setLoading] = useState(true);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure('https://b11-assignment-11.vercel.app/get-allProduct')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [axiosSecure]);

  const handelFilter = () => {
    setLoading(true);
    axiosSecure('https://b11-assignment-11.vercel.app/filter-product')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handelAllProduct = () => {
    setLoading(true);
    axiosSecure('https://b11-assignment-11.vercel.app/get-allProducts')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handelShorting = () => {
    setLoading(true);
    axiosSecure(
      `https://b11-assignment-11.vercel.app/sort-by-price?order=${asc}`
    )
      .then(res => {
        setProducts(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="md:w-11/12 mx-auto">
      <div className="text-right py-5 cursor-pointer space-x-2 flex items-center">
        <div className="dropdown z-10">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#eef4ff] dark:bg-gray-800 hover:bg-[#e0eaff] dark:hover:bg-gray-700 border border-[#d0d9f0] dark:border-gray-600 text-gray-800 dark:text-gray-200 "
          >
            Filter
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-[#eef4ff] dark:bg-gray-800 rounded-box z-1 w-52 p-2 shadow-lg border border-[#d0d9f0] dark:border-gray-600"
          >
            <li>
              <a className="hover:bg-[#e0eaff] dark:hover:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200">
                <span onClick={handelAllProduct} className="font-medium">
                  All product
                </span>
              </a>
            </li>
            <li>
              <a className="hover:bg-[#e0eaff] dark:hover:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200">
                <span onClick={handelFilter} className="font-medium">
                  Minimum order 100
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <span
            onClick={() => setToggle(!toggle)}
            className=" bg-indigo-600 font-medium py-3 px-4 rounded-lg transition text-white "
          >
            {toggle ? 'Card View' : 'Table View'}
          </span>
        </div>
        <div>
          <span
            onClick={() => {
              setAsc(prev => (prev === 'asc' ? 'desc' : 'asc'));
              handelShorting();
            }}
            className="bg-indigo-600 font-medium py-3 px-4 rounded-lg transition text-white cursor-pointer"
          >
            {asc === 'asc' ? 'Low Price' : 'High Price'}
          </span>
        </div>
      </div>
      <h2 className="font-semibold bg-[#eef4ff] dark:bg-gray-800 hover:bg-[#e0eaff] dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200  pb-2 ml-2">
        All products
      </h2>
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
