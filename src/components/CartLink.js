import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../CartContext";

export default function CartLink() {
  const { cartState } = useContext(CartContext);
  return (
    <NavLink to="/cart">Cart ({Object.entries(cartState).length})</NavLink>
  );
}
