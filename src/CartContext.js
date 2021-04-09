import React from "react";

const CartContext = React.createContext({});

const cartActions = {
  add: "add",
  increment: "increment",
  decrement: "decrement",
  set: "set",
  remove: "remove",
};

export default CartContext;
export { cartActions };
