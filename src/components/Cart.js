import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";

export default function Cart() {
  const cart = useContext(CartContext);

  if (Object.entries(cart).length === 0) {
    return (
      <div>
        <h1>Cart</h1>
        <h2>Hmmm... There doesn't seem to be anything here!</h2>
        <p>
          Head over to the <Link to="/shop">Shop</Link> page to start adding
          items to your cart!
        </p>
      </div>
    );
  }
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {Object.entries(cart).map(([id, quantity]) => (
          <li>
            <b>{id}</b> - {quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
