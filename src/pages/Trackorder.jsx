import { useState } from "react";
import axios from "axios";

export default function TrackOrder() {
  const [email, setEmail] = useState("");
  const [orders, setOrders] = useState([]);

  const searchOrders = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/orders/${email}`
      );

      setOrders(response.data);

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
      <h1>Track Order</h1>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: "12px",
          width: "300px",
          marginRight: "10px",
        }}
      />

      <button onClick={searchOrders}>
        Search
      </button>

      <div style={{ marginTop: "30px" }}>
        {orders.map((order) => (
          <div
            key={order._id}
            style={{
              border: "1px solid #333",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h3>
              ₦{order.total.toLocaleString()}
            </h3>

            <p>Status: {order.status}</p>

            <p>
              Ordered:
              {" "}
              {new Date(order.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}