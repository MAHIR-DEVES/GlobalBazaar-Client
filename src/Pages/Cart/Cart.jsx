import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import axios from 'axios';
import OrderCard from '../../Components/OrderCard/OrderCard';

const Cart = () => {
  const { user } = use(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios(`http://localhost:3000/getAllOrder/${user?.email}`)
      .then(res => {
        setOrders(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [user]);

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
