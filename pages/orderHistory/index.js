import React, { useEffect, useState } from 'react';
import ClosedOrderCards from '../../components/cards/ClosedOrderCards';
import { useAuth } from '../../utils/context/authContext';
import { getUserClosedOrders } from '../../utils/data/orderData';

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  // const [productDetails, setProductDetails] = useState([]);
  // orderDetails.map((order) => {
  //   console.warn(order)
  // })

  const getClosedOrder = () => {
    getUserClosedOrders(user.id).then(setOrders);
  };

  useEffect(() => {
    getClosedOrder();
  }, []);

  return (
    <div>
      <h2>Your Order History</h2>
      <section>
        {orders?.map((order) => (
          <ClosedOrderCards key={order.id} orderDetails={order} />
        ))}
      </section>
    </div>
  );
}
