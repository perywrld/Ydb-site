import { useState } from "react";
import "./index.css";

export default function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "YDB YOU DONT BELONG TEE", price: "$40", img: "/tee.png.jpeg" },
    { id: 2, name: "YDB CLASSIC TEE", price: "$25", img: "/teee.png.jpeg" },
  ];

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>YDB</h2>
        <div className="links">
          <a href="#shop">Catalog</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>YDB</h1>
        <p>You Don’t Belong.</p>
      </section>

      {/* SHOP */}
      <section id="shop" className="shop">
        <h2>Catalog</h2>

        <div className="grid">
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

      {/* ABOUT */}
      <section id="about" className="about">
        <p>
          YDB is built for outsiders. The ones who never fit in,
          never followed rules, and never needed approval.
        </p>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <p>© 2026 YDB</p>

        <div className="socials">
          <a href="https://instagram.com/ydbwears" target="_blank">
            Instagram
          </a>

          <a href="https://tiktok.com/@ydb.wears" target="_blank">
            TikTok
          </a>
        </div>
      </footer>

    </div>
  );
}