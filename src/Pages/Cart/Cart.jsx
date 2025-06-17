import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import OrderCard from '../../Components/OrderCard/OrderCard';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Loading from '../../Components/Loading/Loading';
import { motion } from 'framer-motion';
import CartSidler from './CartSidler';

const Cart = () => {
  TabTitle('GlobalBazaar - Cart');
  const { user } = use(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure(`/getAllOrder/${user?.email}`)
      .then(res => {
        setOrders(res?.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, [user, axiosSecure]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <section className="bg-[#eef4ff] dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Your Orders
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              View and manage your recent orders
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
          >
            {/* Order content would go here */}
            <div className="w-full">
              <CartSidler orders={orders}></CartSidler>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6">
        {orders?.map(order => (
          <OrderCard
            key={order._id}
            order={order}
            orders={orders}
            setOrders={setOrders}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
