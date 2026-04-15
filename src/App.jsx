import "./index.css";

export default function App() {
  const products = [
    { id: 1, name: "YDB OUTSIDER HOODIE", price: "$80", img: "/hoodie.png" },
    { id: 2, name: "YDB MISFIT TEE", price: "$40", img: "/tee.png" },
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
        <h1>YOU DON’T BELONG</h1>
        <p>For the outsiders.</p>
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
              <button>Buy</button>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <p>
          YDB is for those who never fit in. Built for outsiders,
          misfits, and those who move different.
        </p>
      </section>
      

      {/* FOOTER */}
      <footer id="contact">
        <p>© 2026 YDB</p>
      </footer>

    </div>
  );
}