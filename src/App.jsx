import { useState } from "react";
import "./index.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const total = cart.reduce((acc, item) => {
    return acc + parseInt(item.price.replace("$", ""));
  }, 0);

  const products = [
    { id: 1, name: "YDB Hoodie", price: "$80", img: "/hood.jpeg" },
    { id: 2, name: "YDB Classic Tee", price: "$40", img: "/tee.png.jpeg" },
    { id: 4, name: "YDB: You Dont Belong TEE", price: "$25", img: "/teee.png.jpeg" },
    { id: 5, name: "YDB: You", price: "$25", img: "/teee.png.jpeg" },
    { id: 6, name: "YDB: Misfit Beanie", price: "$10", img: "/bean.jpeg" },
    { id: 7, name: "YDB: You're Unwanted Tee", price: "$25", img: "/unwantedtee.jpeg" },
  ];

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <h1>YDB</h1>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>YOU DON’T BELONG</h1>
        <p>Made for the misfits.</p>

        <a href="#shop">
          <button>Shop Now</button>
        </a>
      </section>

      {/* SHOP */}
      <section id="shop" className="shop">
        <h2>Shop</h2>

        <div className="products">
          {products.map((item) => (
            <div key={item.id} className="card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>

              <button onClick={() => setCart([...cart, item])}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CART (ONLY ONCE!) */}
      <section className="cart">
        <h2>Cart ({cart.length})</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index}>
                <p>{item.name} - {item.price}</p>
              </div>
            ))}

            <h3>Total: ${total}</h3>

            <a href="https://paystack.shop/pay/mst2rykug8" target="_blank" rel="noreferrer">
              <button>Buy Now</button>
            </a>
          </>
        )}
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About</h2>
        <p>
          YDB is built for outsiders. The ones who never fit in,
          never followed rules, and never needed approval.
          You don’t belong — and that’s your power.
        </p>
      </section>

      {/* LOOKBOOK */}
      <section className="lookbook">
        <h2>Lookbook</h2>
        <div className="gallery">
          <img src="https://via.placeholder.com/300" alt="look1" />
          <img src="https://via.placeholder.com/300" alt="look2" />
          <img src="https://via.placeholder.com/300" alt="look3" />
        </div>
      </section>

      {/* EMAIL SIGNUP */}
      <section className="signup">
        <h2>Join the Movement</h2>
        <input type="email" placeholder="Enter your email" />
        <button>Sign Up</button>
      </section>

      {/* FOOTER */}
      <footer>
        <p>©️ 2026 YDB</p>
        <div>
          <a href="https://instagram.com/ydbwears">Instagram</a>
          <a href="https://tiktok.com/@ydb.wears">TikTok</a>
        </div>
      </footer>

    </div>
  );
}