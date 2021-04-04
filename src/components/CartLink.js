import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import CartContext from "../CartContext";
import { RiShoppingCart2Fill, RiShoppingCart2Line } from "react-icons/ri";

export default function CartLink({ to, activeStyle }) {
  const loc = useLocation();
  const { cartState } = useContext(CartContext);

  return (
    <NavLink to={to} activeStyle={activeStyle}>
      {loc.pathname === "/cart" ? (
        <RiShoppingCart2Fill />
      ) : (
        <RiShoppingCart2Line />
      )}
      ({Object.entries(cartState).length})
    </NavLink>
  );
}
