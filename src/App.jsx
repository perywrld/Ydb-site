import "./index.css";

export default function App() {
  const products = [
    { id: 1, name: "YDB Hoodie", price: "$80", img: "https://via.placeholder.com/300" },
    { id: 2, name: "YDB Classic Tee", price: "$40", img: "/tee.png.jpeg" },
    { id: 3, name: "YDB: You Dont Belong TEE ", price: "$25", img: "/teee.png.jpeg" },
    { id: 3, name: "YDB: You ", price: "$25", img: "/teee.png.jpeg" },
    { id: 3, name: "YDB: Misfit Beanie ", price: "$10", img: "/bean.jpeg" },
    { id: 3, name: "YDB: You're Unwanted Tee ", price: "$25", img: "/unwantedtee.jpeg" },
  ];

  return (
    <div className="app">
      {/* HERO */}
      <section className="hero">
        <h1>YOU DON’T BELONG</h1>
        <p>Made for the misfits.</p>
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
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About</h2>
        <p>
          YDB is for those who never fit in. The outsiders. The rule breakers.
          The ones who move different. You don’t belong — and that’s your power.
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
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
        </div>
      </footer>
    </div>
  );
}