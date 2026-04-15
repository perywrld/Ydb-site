import { useState } from "react";
import "./index.css";

export default function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "YDB OUTSIDER HOODIE", price: "$80", img: "/hoodie.png" },
    { id: 2, name: "YDB MISFIT TEE", price: "$40", img: "/tee.png" },
  ];

  const total = cart.reduce((acc, item) => {
    return acc + parseInt(item.price.replace("$", ""));
  }, 0);

  return (
    <div className="app">
      
      {/* HERO */}
      <section className="hero">
        <h1>YDB</h1>
        <p>You Don’t Belong.</p>
      </section>

      {/* PRODUCTS */}
      <section className="shop">
        <h2>Shop</h2>

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

      {/* CART */}
      <section className="cart">
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <p key={index}>
                {item.name} - {item.price}
              </p>
            ))}

            <h3>Total: ${total}</h3>

            <button>Checkout</button>
          </>
        )}
      </section>

    </div>
  );
}