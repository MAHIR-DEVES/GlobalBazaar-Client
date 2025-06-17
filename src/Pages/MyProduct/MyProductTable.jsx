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
        axios
          .delete(`https://b11-assignment-11.vercel.app/myProduct/${_id}`)
          .then(res => {
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
      {/* Product Info - Responsive Stack on Mobile */}
      <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10">
            <img
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
              src={imageUrl || 'https://via.placeholder.com/150'}
              alt={name?.title || 'Product image'}
            />
          </div>
          <div className="ml-3 sm:ml-4">
            <div className="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-1">
              {name?.title || 'No name'}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {brand || 'No brand'}
            </div>
          </div>
        </div>
      </td>

      {/* Price - Hidden on smallest screens */}
      <td className="px-2 py-3 sm:px-6 sm:py-4 whitespace-nowrap hidden xs:table-cell">
        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {price ? `$${price}` : 'N/A'}
        </div>
      </td>

      {/* Category - Hidden on small screens */}
      <td className="px-2 py-3 sm:px-6 sm:py-4 whitespace-nowrap hidden sm:table-cell">
        <div className="text-sm text-gray-900 dark:text-gray-100 capitalize">
          {category || 'N/A'}
        </div>
      </td>

      {/* Quantity - Hidden on medium screens */}
      <td className="px-2 py-3 sm:px-6 sm:py-4 whitespace-nowrap hidden md:table-cell">
        <span className="text-sm text-gray-900 dark:text-gray-100">
          {quantity ?? 'Unknown'}
        </span>
      </td>

      {/* Actions - Responsive Button Group */}
      <td className="px-2 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
        <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2">
          <Link
            to={`/updatedProduct/${_id}`}
            className="inline-flex items-center justify-center"
          >
            <button className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-md text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors">
              Update
            </button>
          </Link>
          <button
            onClick={() => handelDelete(_id)}
            className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-md text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
          >
            Delete
          </button>
        </div>
      </td>
    </motion.tr>
  );
};

export default MyProductTable;
