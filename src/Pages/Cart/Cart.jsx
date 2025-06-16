import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import OrderCard from '../../Components/OrderCard/OrderCard';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Cart = () => {
  TabTitle('GlobalBazaar - Cart');
  const { user } = use(AuthContext);
  const [orders, setOrders] = useState([]);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure(`/getAllOrder/${user?.email}`)
      .then(res => {
        setOrders(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [user, axiosSecure]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {orders.map(order => (
          <OrderCard
            key={order._id}
            order={order}
            orders={orders}
            setOrders={setOrders}
          ></OrderCard>
        ))}
      </div>
    </div>
  );
};

export default Cart;
