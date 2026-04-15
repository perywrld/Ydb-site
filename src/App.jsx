import "./index.css";

export default function App() {
  const products = [
    { id: 1, name: "YDB OUTSIDER HOODIE", price: "$80", img: "/hoodie.png" },
    { id: 2, name: "YDB MISFIT TEE", price: "$40", img: "/tee.png" },
  ];

  return (
    <div className="app"><nav className="navbar">
  <h2>YDB</h2>

  <div className="links">
    <a href="#home">Home</a>
    <a href="#shop">Catalog</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

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

              <button>Buy Now</button>
            </div>
          ))}
        </div>
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
          <img src="/model1.png" alt="look1" />
          <img src="/model2.png" alt="look2" />
        </div>
      </section>

      {/* SIGNUP */}
      <section className="signup">
        <h2>Join the Movement</h2>
        <input type="email" placeholder="Enter your email" />
        <button>Sign Up</button>
      </section>

      {/* FOOTER */}
      <footer>
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