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
        });
      }
    });
  };

  return (
    <div className="bg-[#eef4ff] dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto my-4">
      <div className="p-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img
              className="h-32 w-32 object-cover rounded-lg border-2 border-white dark:border-gray-700 shadow-sm"
              src={photo || 'https://via.placeholder.com/150'}
              alt={name}
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {name}
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Order ID: {orderId}
            </p>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Email: {customerEmail}
            </p>
            <div className="mt-2">
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                Qty: {quantity}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-4 bg-white dark:bg-gray-700 bg-opacity-50 dark:bg-opacity-30 border-t border-gray-100 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            #{_id?.slice(-6)}
          </span>
          <span
            onClick={() => handelDeleteOrder(_id)}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 cursor-pointer"
          >
            Remove
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
