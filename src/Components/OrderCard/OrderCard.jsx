import axios from 'axios';
import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const OrderCard = ({ order, setOrders, orders }) => {
  const { _id, orderId, name, customerEmail, quantity, photo } = order || {};

  const handelDeleteOrder = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/orders/${_id}`).then(res => {
          if (res?.data?.deletedCount) {
            const remainingData = orders.filter(pot => pot._id !== id);
            setOrders(remainingData);
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          }
          axios.patch(`http://localhost:3000/addUpdateQuantity/${orderId}`, {
            updateQuantity: { quantity },
          });
        });
      }
    });
  };

  return (
    <div className="bg-[#eef4ff] dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-md mx-auto my-4 border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="px-6 py-3 bg-white dark:bg-gray-700 bg-opacity-70 dark:bg-opacity-50 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Order #{orderId}
          </span>
          <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
            #{_id?.slice(-6)}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-shrink-0">
            <img
              className="h-32 w-32 object-cover rounded-lg border-2 border-white dark:border-gray-700 shadow-md"
              src={photo || 'https://via.placeholder.com/150'}
              alt={name}
              onError={e => {
                e.target.src = 'https://via.placeholder.com/150';
              }}
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              {name}
            </h3>

            <div className="flex items-center justify-center md:justify-start mb-3">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full font-medium">
                Qty: {quantity}
              </span>
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <p className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {customerEmail}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Functional Buttons */}
      <div className="px-6 py-4 bg-white dark:bg-gray-700 bg-opacity-50 dark:bg-opacity-30 border-t border-gray-100 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            <button
              onClick={() => handelDeleteOrder(_id)}
              className="px-4 py-2 bg-red-50 dark:bg-red-900 hover:bg-red-100 dark:hover:bg-red-800 text-red-600 dark:text-red-300 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
