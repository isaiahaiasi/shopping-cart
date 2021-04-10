import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import CartContext from "../CartContext";
import { RiShoppingCart2Fill, RiShoppingCart2Line } from "react-icons/ri";

export default function CartLink({ to, activeStyle }) {
  const loc = useLocation();
  const { cartState } = useContext(CartContext);

  const cartLinkStyle = {
    display: "flex",
    alignItems: "center",
  };
  return (
    <NavLink to={to} activeStyle={activeStyle} style={cartLinkStyle}>
      {loc.pathname === "/cart" ? (
        <RiShoppingCart2Fill />
      ) : (
        <RiShoppingCart2Line />
      )}
      ({Object.entries(cartState).length})
    </NavLink>
  );
}
