import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../CartContext";
import { RiShoppingCart2Line } from "react-icons/ri";

export default function CartLink({ to, activeStyle }) {
  const { cartState } = useContext(CartContext);
  return (
    <NavLink to={to} activeStyle={activeStyle}>
      <RiShoppingCart2Line />({Object.entries(cartState).length})
    </NavLink>
  );
}
