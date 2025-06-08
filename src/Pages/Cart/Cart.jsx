import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import axios from 'axios';

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

  console.log(orders);

  return (
    <div>
      <p>cart</p>
    </div>
  );
};

export default Cart;
