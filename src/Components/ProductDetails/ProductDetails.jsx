import React, { useState, use, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const ProductDetails = () => {
  TabTitle('GlobalBazaar - Product Details');
  const { user } = use(AuthContext);
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  // const token = user.accessToken;

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure(
      `https://b11-assignment-11.vercel.app/singleProduct/${params.id}`
    )
      .then(res => {
        setData(res?.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [axiosSecure, params]);

  const {
    _id,
    imageUrl,
    name,
    quantity,
    minSellingQuantity,
    brand,
    category,
    shortDescription,
    productContent,
    price,
    rating,
  } = data || {};

  // const convertQn = parseInt(minSellingQuantity);
  const [sellQuantity, setSellQuantity] = useState(0);

  useEffect(() => {
    if (minSellingQuantity) setSellQuantity(parseFloat(minSellingQuantity));
  }, [minSellingQuantity]);
  console.log(minSellingQuantity);

  console.log(sellQuantity);

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

  // Handle modal open
  const handleModalOpen = () => {
    const modal = document.getElementById('order_modal');
    if (modal) {
      modal.showModal();
    }
  };

  // handelAddQuantity
  const handelSumQuantity = () => {
    setSellQuantity(sellQuantity => sellQuantity + 1);
  };
  // handelSubQuantity
  const handelSubQuantity = () => {
    setSellQuantity(sellQuantity => sellQuantity - 1);
  };

  // Handle order submission
  const handleOrderSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');

    if (sellQuantity < parseFloat(minSellingQuantity)) {
      return toast.error(`Minimum Quantity ${minSellingQuantity}`);
    }
    if (sellQuantity > parseFloat(quantity)) {
      return toast.error('Not available Quantity ');
    }

    const orderData = {
      orderId: _id,
      name: name,
      customerEmail: email,
      quantity: sellQuantity,
    };

    axios
      .post('https://b11-assignment-11.vercel.app/orders', orderData)
      .then(res => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/cart');
      })
      .catch(error => {
        console.log(error);
      });

    // update quantity

    axios
      .patch(`https://b11-assignment-11.vercel.app/updateQuantity/${_id}`, {
        updateQuantity: { sellQuantity },
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
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
                    SKU: {_id?.slice(-6).toUpperCase()}
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
                      <span className="font-medium mr-2">
                        Available Quantity:
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {quantity}
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
                    onClick={handleModalOpen}
                    disabled={
                      parseFloat(minSellingQuantity) > parseFloat(quantity)
                    }
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 disabled:cursor-not-allowed"
                  >
                    {parseFloat(minSellingQuantity) > parseFloat(quantity)
                      ? 'Out of stock'
                      : ' Buy Now'}
                  </button>
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

      {/* Order Modal */}
      <dialog id="order_modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-[#eef4ff] dark:bg-gray-800 rounded-xl shadow-xl">
          <div className="flex flex-col space-y-6">
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Confirm Your Order
              </h3>
              <form method="dialog">
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold rounded-lg transition-colors duration-200">
                  Close
                </button>
              </form>
            </div>

            <form onSubmit={handleOrderSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 dark:text-gray-200 cursor-not-allowed"
                    type="email"
                    name="email"
                    value={user?.email || ''}
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 dark:text-gray-200"
                    type="text"
                    name="name"
                    value={user?.displayName || ''}
                    required
                  />
                </div>
              </div>
              <div class="flex flex-col items-center">
                <label class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                  Order Quantity
                </label>
                <div class="flex items-center gap-4">
                  <button
                    onClick={handelSubQuantity}
                    type="button"
                    class="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    -
                  </button>
                  <span class="text-xl font-medium w-12 text-center text-gray-600 dark:text-gray-300">
                    {sellQuantity}
                  </span>
                  <button
                    onClick={handelSumQuantity}
                    type="button"
                    class="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    +
                  </button>
                </div>
              </div>
              <div class="modal-action pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  type="submit"
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Order
                </button>
              </div>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ProductDetails;
