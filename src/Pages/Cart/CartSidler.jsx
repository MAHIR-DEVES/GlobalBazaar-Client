import React from 'react';
import { motion } from 'framer-motion';

const CompactCartMarquee = ({ orders = [] }) => {
  const marqueeItems = [...orders, ...orders, ...orders];

  return (
    <div className="relative overflow-hidden bg-[#eef4ff] dark:bg-gray-800 py-4 w-full">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ['0%', '-100%'],
        }}
        transition={{
          duration: 15,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {marqueeItems.map((order, index) => (
          <motion.div
            key={`${order._id || order.id || index}`}
            className="inline-flex mx-4"
            whileHover={{ scale: 1.03 }}
          >
            <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm w-48 flex flex-col">
              <img
                src={order.photo}
                alt={order.name || 'Product image'}
                className="w-full h-32 object-cover rounded-md mb-2 flex-shrink-0"
              />
              <div className="flex-grow">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {order.name || 'Product'}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                  ${order.price || '0.00'}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CompactCartMarquee;
