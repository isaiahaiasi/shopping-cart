import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";
import storeData from "../store-data";

export default function Cart() {
  const { cartState, cartDispatch } = useContext(CartContext);

  if (Object.entries(cartState).length === 0) {
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
        {Object.entries(cartState).map(([id, quantity]) => (
          <li key={id}>
            <b>{id}</b> - {quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
