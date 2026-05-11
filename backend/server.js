const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const Order = require("./models/Order");

console.log(process.env.MONGO_URI);



// CONNECT MONGODB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const app = express();

app.use(cors());
app.use(express.json());

// REAL PRODUCTS + PRICES
const products = [
  { id: 1, name: "YDB Hoodie", price: 57000, img: "/hood.jpeg" },
  { id: 2, name: "YDB Classic Tee", price: 35000, img: "/tee.png.jpeg" },
  { id: 3, name: "YDB: You Dont Belong Tee", price: 22000, img: "/teee.png.jpeg" },
  { id: 4, name: "YDB Denim", price: 50000, img: "/teee.png.jpeg" },
  { id: 5, name: "YDB Beanie", price: 9000, img: "/bean.jpeg" },
  { id: 6, name: "YDB Unwanted Tee", price: 25000, img: "/unwantedtee.jpeg" },
];

// CREATE PAYMENT
app.post("/create-payment", async (req, res) => {
  try {
    const { cart, email } = req.body;

    let total = 0;
    app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    res.json(orders);

  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch orders",
    });
  }
});
app.get("/admin/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch orders",
    });
  }
});
    // CALCULATE TOTAL FROM SERVER
    cart.forEach((item) => {
      const product = products.find((p) => p.id === item.id);

      if (product) {
        total += product.price * item.qty;
      }
    });

    // PAYSTACK REQUEST
    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email,
        amount: total * 100, // kobo
        currency: "NGN",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({
      paymentUrl: response.data.data.authorization_url,
    });

  } catch (error) {
    console.log(error.response?.data || error.message);

    res.status(500).json({
      error: "Payment failed",
    });
  }
});

// START SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
