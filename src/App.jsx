import { useState } from "react";
import "./index.css";

export default function App() {
  // STATE
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [email, setEmail] = useState("");

  // PRODUCTS (✅ prices are now numbers)
  const products = [
    { id: 1, name: "YDB Hoodie", price: 57000, img: "/hood.jpeg" },
    { id: 2, name: "YDB Classic Tee", price: 35000, img: "/tee.png.jpeg" },
    { id: 3, name: "YDB: You Dont Belong Tee", price: 22000, img: "/teee.png.jpeg" },
    { id: 4, name: "YDB Denim", price: 50000, img: "/teee.png.jpeg" },
    { id: 5, name: "YDB Beanie", price: 9000, img: "/bean.jpeg" },
    { id: 6, name: "YDB Unwanted Tee", price: 25000, img: "/unwantedtee.jpeg" },
  ];

  // ADD TO CART
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // TOTAL
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  // PAYSTACK
  const payWithPaystack = () => {
  if (!email) {
    alert("Please enter your email");
    return;
  }

  const handler = window.PaystackPop.setup({
    key: "pk_live_d3492d65642a0841c7b8cc1ec659dc24ce31d275",
    email: email,
    amount: total * 100,
    currency: "NGN",

    callback: function (response) {
      alert("Payment successful!");
      setCart([]);
      setCartOpen(false);
    },

    onClose: function () {
      alert("Payment cancelled");
    }
  });

  handler.openIframe();
};

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
        <a href="#lookbook" onClick={() => setMenuOpen(false)}>Gallery</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
      </div>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}

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
              <p>₦{item.price.toLocaleString()}</p>

              <button onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
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
          <img src="https://via.placeholder.com/300" alt="1" />
          <img src="https://via.placeholder.com/300" alt="2" />
          <img src="https://via.placeholder.com/300" alt="3" />
        </div>
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
                  <span>₦{item.price.toLocaleString()}</span>

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
            <h3>Total: ₦{total.toLocaleString()}</h3>

            <div className="checkout-form">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button className="checkout-btn" onClick={payWithPaystack}>
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