import { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/admin/orders"
      );

      setOrders(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // UPDATE STATUS
  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/admin/orders/${id}`,
        { status }
      );

      fetchOrders();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <h1>YDB Admin Dashboard</h1>

      {orders.map((order) => (
        <div
          key={order._id}
          style={{
            border: "1px solid #333",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <h3>{order.customer}</h3>

          <p>{order.email}</p>

          <p>
            ₦{order.total.toLocaleString()}
          </p>

          <p>Status: {order.status}</p>

          <select
            value={order.status}
            onChange={(e) =>
              updateStatus(order._id, e.target.value)
            }
          >
            <option>Paid</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>
        </div>
      ))}
    </div>
  );
}