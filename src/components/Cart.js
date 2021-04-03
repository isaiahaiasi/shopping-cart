import React, { useContext } from "react";
import CartContext from "../CartContext";

export default function Cart() {
  const cart = useContext(CartContext);
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
