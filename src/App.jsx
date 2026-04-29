import { useState } from "react";
import "./index.css";

export default function App() {

  // ✅ STATE FIRST
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // ✅ ADD TO CART FUNCTION
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(cart.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // ✅ TOTAL
  const total = cart.reduce((acc, item) => {
    return acc + parseInt(item.price.replace("$", "")) * item.qty;
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

  <div className="cart-icon" onClick={() => setCartOpen(true)}>
    🛍️
    <span className="cart-count">{cart.length}</span>
  </div>
</header>
      {/* SIDE MENU */}
<div className={`side-menu ${menuOpen ? "open" : ""}`}>
  <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>

  <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a>
  <a href="#shop" onClick={() => setMenuOpen(false)}>All Products</a>
  <a href="#lookbook" onClick={() => setMenuOpen(false)}>Gallery</a>
  <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
</div>
{menuOpen && (
  <div className="overlay" onClick={() => setMenuOpen(false)}></div>
)}
      {/* HERO */}
      <section className="hero">
  <div className="hero-overlay"></div>

  <div className="hero-content">
    <h1>YOU DON’T BELONG</h1>
    <p>For the outsiders.</p>

    <a href="#shop">
      <button className="hero-btn">SHOP NOW</button>
    </a>
  </div>
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

              <button onClick={() => addToCart(item)}>
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

            <h3>Total: ₦{total.toLocaleString()}</h3>

            <a href="https://paystack.shop/pay/mst2rykug8" target="_blank" rel="noreferrer">
              <button>Buy Now</button>
            </a>
          </>
        )}
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>About</h2>
        <p>
          YDB is built for outsiders. The ones who never fit in,
          never followed rules, and never needed approval.
          You don’t belong — and that’s your power.
        </p>
      </section>

      {/* LOOKBOOK */}
      <section id="lookbook" className="lookbook">
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

      {/* CART DRAWER */}
<div className={`cart-drawer ${cartOpen ? "open" : ""}`}>
  <div className="cart-header">
    <h2>Your Cart ({cart.length})</h2>
    <button onClick={() => setCartOpen(false)}>✕</button>
  </div>

<div className="cart-items">
  {cart.length === 0 ? (
    <p>Your cart is empty</p>
  ) : (
    cart.map((item) => (
      <div key={item.id} className="cart-item">
        <img src={item.img} alt={item.name} />

        <div className="cart-info">
          <p>{item.name}</p>
          <span>{item.price}</span>

          <div className="qty">
            <button onClick={() => {
              if (item.qty === 1) {
                setCart(cart.filter(i => i.id !== item.id));
              } else {
                setCart(cart.map(i =>
                  i.id === item.id ? { ...i, qty: i.qty - 1 } : i
                ));
              }
            }}>-</button>

            <span>{item.qty}</span>

            <button onClick={() => {
              setCart(cart.map(i =>
                i.id === item.id ? { ...i, qty: i.qty + 1 } : i
              ));
            }}>+</button>
          </div>
        </div>
      </div>
    ))
  )}
</div>

  {cart.length > 0 && (
    <div className="cart-footer">
      <h3>Total: ${total}</h3>
<div className="checkout-form">
  <input type="text" placeholder="Full Name" />
  <input type="email" placeholder="Email Address" />
</div>
      <button
  className="checkout-btn"
  onClick={() => {
    window.location.href = "https://paystack.shop/pay/mst2rykug8";
  }}
>
  PAY ₦{total.toLocaleString()}
</button>
    </div>
  )}
</div>

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