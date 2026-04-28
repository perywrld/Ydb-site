import { useState } from "react";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Mifit Beanie",
      price: "$15",
      image: "/bean.jpeg",
    },
    {
      id: 2,
      name: "You're Unwanted Tee",
      price: "$30",
      image: "/unwantedtee.jpeg",
    },
    {
      id: 3,
      name: "YDB Hoode",
      price: "$60",
      image: "/hood.jpeg",
    },
    {
      id: 4,
      name: "You Dont Belong TEE",
      price: "$30",
      image: "/teee.png.jpeg",
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">

      {/* HERO */}
      <section className="hero">
        <div className="overlay">
          <div className="nav">
            <span>☰</span>
            <h1>YDB</h1>
            <div className="icons">
              <span>👤</span>
              <span>🛍️ ({cart.length})</span>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST */}
      <section className="latest">
        <h2>LATEST</h2>
        <button className="shop-btn">SHOP NOW →</button>

        <div className="grid">
          {products.map((p) => (
            <div key={p.id} className="card">
              <span className="tag">New</span>
              <img src={p.image} />
              <div className="line"></div>
              <p className="name">YDB {p.name}</p>
              <p className="price">{p.price}</p>

              <button onClick={() => addToCart(p)} className="add">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <h2>SIGN UP FOR 10% OFF YOUR FIRST ORDER</h2>
        <p>
          Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
        </p>

        <div className="form">
          <input placeholder="Email" />
          <button>SIGN UP</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>SOCIALS</h3>
        <div className="socials">
          <span>Instagram</span>
          <span>X</span>
          <span>TikTok</span>
        </div>

        <h3>RESOURCES</h3>
        <ul>
          <li>FAQ</li>
          <li>Shipping Policy</li>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
          <li>Terms of Service</li>
        </ul>

        <p className="copyright">© YDB 2026</p>
      </footer>
    </div>
  );
}