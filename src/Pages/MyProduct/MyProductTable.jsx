import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import axios from 'axios';

const MyProductTable = ({ product, myProducts, setMyProducts }) => {
  const { _id, imageUrl, name, brand, category, quantity, price } = product;

  const handelDelete = id => {
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
        axios.delete(`http://localhost:3000/myProduct/${_id}`).then(res => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });

            const remainingProducts = myProducts.filter(
              product => product._id !== id
            );
            setMyProducts(remainingProducts);
          }
        });
      }
    });
  };
  return (
    <motion.tr
      key={_id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        backgroundColor: 'rgba(99, 102, 241, 0.05)',
      }}
      className="dark:hover:bg-gray-600/50"
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={imageUrl || 'https://via.placeholder.com/150'}
              alt={imageUrl.title}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {name.title}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {brand}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 dark:text-gray-100 font-medium">
          ${price || 'N/A'}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 dark:text-gray-100">
          {category || 'N/A'}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-gray-900 dark:text-gray-100">
          {quantity || 'unknown'}
        </span>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <Link>
          <button className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-4 cursor-pointer transition-colors">
            Update
          </button>
        </Link>
        <button
          onClick={() => handelDelete(_id)}
          className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 cursor-pointer transition-colors"
        >
          Delete
        </button>
      </td>
    </motion.tr>
  );
};

export default MyProductTable;
