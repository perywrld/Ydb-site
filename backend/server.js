const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const Order = require("./models/Order");

const app = express();

app.use(cors());
app.use(express.json());


// CONNECT MONGODB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));


// PRODUCTS
const products = [
  { id: 1, name: "YDB Hoodie", price: 200, img: "/hood.jpeg" },
  { id: 2, name: "YDB Classic Tee", price: 300, img: "/tee.png.jpeg" },
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

    // CALCULATE TOTAL
    cart.forEach((item) => {
      const product = products.find((p) => p.id === item.id);

      if (product) {
        total += product.price * item.qty;
      }
    });

    // SAVE ORDER
    const newOrder = await Order.create({
      email,
      cart,
      total,
      status: "Pending",
    });

    // PAYSTACK
    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email,
        amount: total * 100,
        currency: "NGN",
        metadata: {
          orderId: newOrder._id,
        },
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


// GET ALL ORDERS (ADMIN)
app.get("/admin/orders", async (req, res) => {
  try {
    const orders = await Order.find()
      .sort({ createdAt: -1 });

    res.json(orders);

  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch orders",
    });
  }
});


// UPDATE ORDER STATUS
app.put("/admin/orders/:id", async (req, res) => {
  try {
    const { status } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(updatedOrder);

  } catch (error) {
    res.status(500).json({
      error: "Failed to update order",
    });
  }
});


// GET CUSTOMER ORDERS
app.get("/orders/:email", async (req, res) => {
  try {
    const orders = await Order.find({
      email: req.params.email,
    }).sort({ createdAt: -1 });

    res.json(orders);

  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch orders",
    });
  }
});


// ROOT ROUTE
app.get("/", (req, res) => {
  res.send("YDB Backend Running");
});


// START SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});