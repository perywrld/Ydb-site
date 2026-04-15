import "./index.css";

export default function App() {
  const products = [
  { id: 1, name: "YDB OUTSIDER HOODIE", price: "$40", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" },
  { id: 2, name: "YDB YOU DONT BELONG TEE", price: "$25", img: "/tee.png.jpeg" },
  { id: 3, name: "YDB CLASSC TEE", price: "$30", img: "/teee.png.jpeg" },
];

  return (
    <div className="app">
      {/* HERO */}
      <section className="hero">
        <h1>YDB</h1>
        <p>You Don’t Belong.</p>
        <button>Shop Now</button>
      </section>

      {/* SHOP */}
      <section className="shop">
        <h2>Shop</h2>
        <div className="products">
          {products.map((item) => (
            <div key={item.id} className="card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <a href="https://paystack.shop/pay/mst2rykug8" target="_blank">
  <button>Buy Now</button>
</a>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About</h2>
        <p>
          YDB is a streetwear brand for outsiders, rebels, and misfits.
          If you’ve ever felt different, this is for you.
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
        <p>© 2026 YDB</p>
        <div>
          <a href="https://instagram.com/ydb.wears">Instagram</a>
<a href="https://tiktok.com/@ydb.wears">TikTok</a>
        </div>
      </footer>
    </div>
  );
}