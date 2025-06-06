import React, { use } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const ProductDetails = () => {
  const { user } = use(AuthContext);

  const singleData = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    imageUrl,
    name,
    mainQuantity,
    minSellingQuantity,
    brand,
    category,
    shortDescription,
    productContent,
    price,
    rating,
  } = singleData;

  // Generate star rating display
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <defs>
              <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path
              fill="url(#half-star)"
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-gray-300 dark:text-gray-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    return stars;
  };

  //  handel order
  const handleOrder = () => {
    const modal = document.getElementById('my_modal_4');
    if (modal) {
      modal.showModal(); // this will open the modal
    }
  };
  return (
    <div className="bg-[#eef4ff] dark:bg-gray-800 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="flex flex-col">
              <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mb-4">
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded">
                    {category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    SKU: {_id.slice(-6).toUpperCase()}
                  </span>
                </div>

                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {name}
                </h1>

                <div className="flex items-center mb-4">
                  <div className="flex mr-2">{renderStars()}</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {rating} ({Math.floor(rating * 10)} reviews)
                  </span>
                </div>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${price}
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Description
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {shortDescription}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Product Details
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex">
                      <span className="font-medium mr-2">Brand:</span>
                      <span>{brand}</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium mr-2">Category:</span>
                      <span>{category}</span>
                    </li>
                    <li>
                      <span className="font-medium mr-2">Quantity :</span>
                      <span className="text-gray-500 dark:text-gray-400 ">
                        {mainQuantity}
                      </span>
                    </li>
                    <li className="flex">
                      <span className="font-medium mr-2">Minimum Order:</span>
                      <span>{minSellingQuantity}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleOrder}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Buy Now
                  </button>
                  <div className="">
                    <dialog id="my_modal_4" className="modal">
                      <div className="modal-box w-11/12 max-w-5xl bg-[#eef4ff] dark:bg-gray-800 rounded-xl shadow-xl">
                        <div className="flex flex-col space-y-6">
                          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                              Confirm Your Order
                            </h3>
                            <form method="dialog">
                              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg ">
                                close
                              </button>
                            </form>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                                Email
                              </label>
                              <input
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 dark:text-gray-200 cursor-not-allowed"
                                type="email"
                                value={user.email}
                                name="email"
                                readOnly
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                                Full Name
                              </label>
                              <input
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 dark:text-gray-200 cursor-not-allowed"
                                type="text"
                                value={user.displayName}
                                name="displayName"
                                readOnly
                              />
                            </div>
                          </div>

                          <div className="modal-action pt-4 border-t border-gray-200 dark:border-gray-700">
                            <button
                              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.01] shadow-md hover:shadow-lg"
                              onClick={() => {
                                /* Add purchase logic here */
                              }}
                            >
                              Complete Purchase
                            </button>
                          </div>
                        </div>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <button
                    onClick={() => navigate(-1)}
                    className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Content */}
          {productContent && (
            <div className="border-t border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Product Information
              </h3>
              <div
                className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: productContent }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
