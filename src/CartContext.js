import React from "react";

const CartContext = React.createContext({});

const cartActions = {
  increment: "increment",
  decrement: "decrement",
  set: "set",
};

export default CartContext;
export { cartActions };
