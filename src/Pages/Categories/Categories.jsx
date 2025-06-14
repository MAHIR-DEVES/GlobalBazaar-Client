import React from 'react';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';

const Categories = () => {
  TabTitle('GlobalBazaar - Categories');

  // Sample categories data - replace with your actual data
  const categories = [
    { id: 1, name: 'Electronics', products: 1250, icon: '💻' },
    { id: 2, name: 'Apparel', products: 3420, icon: '👕' },
    { id: 3, name: 'Home & Garden', products: 890, icon: '🏠' },
    { id: 4, name: 'Beauty & Personal Care', products: 1560, icon: '💄' },
    { id: 5, name: 'Industrial Equipment', products: 670, icon: '⚙️' },
    { id: 6, name: 'Food & Beverage', products: 2300, icon: '🍎' },
    { id: 7, name: 'Automotive', products: 980, icon: '🚗' },
    { id: 8, name: 'Health & Medical', products: 750, icon: '🏥' },
  ];

  return (
    <div className="min-h-screen bg-[#eef4ff] dark:bg-gray-800 transition-colors duration-300">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Global Wholesale Marketplace
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            Discover products from trusted suppliers worldwide. Source directly
            from manufacturers and wholesalers.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Browse Categories
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Explore our extensive range of wholesale product categories. Connect
            with global suppliers and streamline your procurement process.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <div
              key={category.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {category.products.toLocaleString()} products
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Wholesale Benefits Section */}
        <div className="mt-16 bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose GlobalBazaar?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mb-3">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                Global Suppliers
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Access verified suppliers from over 100 countries worldwide.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mb-3">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                Competitive Pricing
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Get wholesale prices directly from manufacturers and
                distributors.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mb-3">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                Verified Quality
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                All suppliers undergo strict verification for quality assurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
