/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import ClosedOrderCards from '../../components/cards/ClosedOrderCards';
import { useAuth } from '../../utils/context/authContext';
import { getUserClosedOrders } from '../../utils/data/orderData';

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const getClosedOrder = () => {
    getUserClosedOrders(user.id).then(setOrders);
  };

  useEffect(() => {
    getClosedOrder();
  }, [user]);

  return (
    <div>
      <h2>Your Order History</h2>
      <section>
        <table>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Product Details</th>
              <th>Total Cost</th>
              <th>Product Image</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <ClosedOrderCards key={order.id} orderDetails={order} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
