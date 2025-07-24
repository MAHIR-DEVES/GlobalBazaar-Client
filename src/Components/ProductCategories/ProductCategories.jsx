import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import ProductCategoriesCard from '../ProductCategorisesCard/ProductCategoriesCard';
import { IoChevronBack } from 'react-icons/io5';
import ProductSlide from './ProductSlide';
import Loading from '../Loading/Loading';

const ProductCategories = () => {
  const location = useLocation();
  const { category } = location.state;
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://b11-assignment-11.vercel.app/filterCategory', {
        params: { category },
      })
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, [category]);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="hero bg-[#f8fafc] dark:bg-gray-900 py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
            {/* Image Section - Responsive sizing */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="https://ep-blog.s3.ap-south-1.amazonaws.com/images/2024/04/05175105/Top-10-Online-Shopping-Sites-India.jpg"
                alt="Global business partners meeting"
                className="rounded-xl shadow-2xl w-full max-w-md lg:max-w-none object-cover h-auto"
              />
              {/* <ProductSlide data={data}></ProductSlide> */}
            </div>

            {/* Content Section - Responsive text sizing */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                <span className="block">Your Gateway to</span>
                <span className="text-blue-600 dark:text-blue-400">
                  Global Business
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Connect with 50,000+ verified B2B partners worldwide. Our
                intelligent platform streamlines cross-border commerce with
                integrated solutions for sourcing, logistics, and secure
                transactions.
              </p>

              {/* Responsive Button Group */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate(-1)}
                  className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    <IoChevronBack />
                    <p>Back</p>
                  </span>
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  {category} Product
                </button>
              </div>

              {/* Trust Indicators - Responsive layout */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-yellow-400 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    4.9/5 (2,500+ Reviews)
                  </span>
                </div>
                <div className="hidden sm:block text-gray-400">|</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Trusted by Fortune 500 companies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full px-2 md:px-0 gap-2 md:gap-4 mt-10 md:w-11/12 mx-auto mb-5">
        {data?.map(dat => (
          <ProductCategoriesCard
            key={dat._id}
            dat={dat}
            category={category}
          ></ProductCategoriesCard>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
