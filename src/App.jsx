import "./index.css";

export default function App() {
  const products = [
    { id: 1, name: "YDB Hoodie", price: "$80", img: "https://via.placeholder.com/300" },
    { id: 2, name: "YDB Classic Tee", price: "$40", img: "https://tee.png.joeg" },
    { id: 3, name: "YDB: You Dont Belong Tee", price: "$25", img: "https://teee.png.jpeg" },
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
      </section><form 
  action="https://e45f8d25.sibforms.com/serve/MUIFAAuwLS9c6uu-nfzPdeMKCojGZ3DeE2E8dUqx3HMhajZulVKbzWrkwRYWFkgzwI3ATOAX4F50iwCDQpC6IbQu7g1doqU0WqQ2upMiW1zjhNvUUwLc4XUKTcrDyDj0E-dneUmvAo71uOGKJ_AKIDe546Z1Sbr5oAIYj_VrfQfK4sHyZ4ox7r8UYocFcK2eh5pDEw6HlFziVJCoIA==" 
  method="POST"
  target="_blank"
  className="signup"
>
  <h2>Join YDB</h2>
  <p>Be the first to access new drops</p>

  <input 
    type="email" 
    name="EMAIL" 
    placeholder="Enter your email" 
    required 
  />

  <button type="submit">
    Join the outsiders
  </button>
</form>

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