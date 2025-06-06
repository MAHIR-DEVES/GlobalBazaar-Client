import React from 'react';
import Slider from '../../Components/Slider/Slider';
import { useLoaderData, useNavigate } from 'react-router';

import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import CategoriesCard from '../../Components/categoriesCard/CategoriesCard';

const Home = () => {
  TabTitle('GlobalBazaar - Home');
  const navigate = useNavigate();
  const categories = useLoaderData();
  // console.log(categories);

  return (
    <div className="  bg-white dark:bg-gray-800 ">
      <Slider />

      <section className="py-12 lg:px-4 sm:px-6  lg:w-10/12 mx-auto ">
        <div className="text-center mb-12  bg-white dark:bg-gray-800">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-red-600 bg-red-100 rounded-full mb-4">
            Posts Events
          </span>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-black mb-4">
            Available Post Section
          </h2>
          <p className="text-lg dark:text-white text-blackmax-w-2xl mx-auto">
            Explore the most popular restaurant posts in your area
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {categories.map(category => (
            <CategoriesCard
              category={category}
              key={category._id}
            ></CategoriesCard>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button
            onClick={() => navigate('/allProduct')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
          >
            Browse All Product
            <svg
              className="ml-3 -mr-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>
      <section>
        <div className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold dark:text-white text-black sm:text-4xl">
                Available Rooms
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl dark:text-white text-black sm:mt-4">
                Find your perfect shared living space with compatible roommates
              </p>
            </div>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Room Card 1 */}
              <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Modern apartment living room"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium dark:text-white text-black">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        Downtown Loft
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      $1200/mo • 2 roommates • Private bath
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-600">4.8</span>
                  </div>
                </div>
              </div>

              {/* Room Card 2 */}
              <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Cozy bedroom"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium dark:text-white text-black">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        University District
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      $850/mo • 3 roommates • Shared bath
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-600">4.5</span>
                  </div>
                </div>
              </div>

              {/* Room Card 3 */}
              <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Modern shared kitchen"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium dark:text-white text-black">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        Riverside Apartment
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      $950/mo • 1 roommate • Private bath
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-600">4.9</span>
                  </div>
                </div>
              </div>

              {/* Room Card 4 */}
              <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Spacious shared house"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium dark:text-white text-black">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        Suburban House
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      $700/mo • 4 roommates • Shared bath
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-600">4.3</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => navigate('/browseListing')}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
              >
                View All Post
                <svg
                  className="ml-3 -mr-1 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="relative my-10 overflow-hidden bg-gray-900 min-h-[70vh] flex items-center">
        {/* Background with apartment image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Modern shared apartment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
          <div className="lg:flex items-center justify-between gap-12">
            {/* Text Content */}
            <div className="max-w-2xl lg:max-w-3xl w-full">
              <div className="text-blue-400 font-medium text-lg mb-4 tracking-wider uppercase">
                Find Your Perfect Match
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white">FIND YOUR</span>
                <span className="block text-blue-400 bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  IDEAL ROOMMATE
                </span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
                Connect with compatible roommates who share your lifestyle,
                habits, and budget. Our smart matching system helps you avoid
                conflicts and find the perfect living situation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={navigate('/browseListing')}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 text-lg font-bold rounded-md transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/20"
                >
                  Browse Roommates →
                </button>
                <button
                  onClick={navigate('/')}
                  className="border-2 border-white text-white hover:bg-white/10 py-3 px-8 text-lg font-medium rounded-md transition-all duration-300"
                >
                  List Your Room
                </button>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <p className="text-blue-400 font-bold text-lg tracking-wider mb-2">
                  TRUSTED BY 50,000+ USERS
                </p>
                <p className="text-gray-300">
                  "Found my perfect roommate in just 3 days!" – Sarah, NYC
                </p>
              </div>
            </div>

            {/* Side Image - Roommate profile cards */}
            <div className="hidden lg:block flex-1 max-w-xl space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-gray-600/30 animate-float">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                    alt="Roommate profile"
                  />
                  <div>
                    <h3 className="text-white font-bold">Alex, 28</h3>
                    <p className="text-blue-200">
                      Software Engineer • Clean • $1,200 budget
                    </p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaRegStarHalfStroke
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-gray-600/30 animate-float-delay ml-8">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                    alt="Roommate profile"
                  />
                  <div>
                    <h3 className="text-white font-bold">Jamal, 25</h3>
                    <p className="text-blue-200">
                      Grad Student • Social • $900 budget
                    </p>
                    <div className="flex mt-1">
                      {[...Array(4)].map((_, i) => (
                        <FaRegStarHalfStroke
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes float-delay {
          0% {
            transform: translateY(-5px);
          }
          50% {
            transform: translateY(5px);
          }
          100% {
            transform: translateY(-5px);
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
