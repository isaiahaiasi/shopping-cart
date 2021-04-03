import React, { useContext } from "react";
import CartContext, { cartActions } from "../CartContext";

export default function AddToCart({ id }) {
  const { cartDispatch } = useContext(CartContext);

  return (
    <button
      onClick={() => cartDispatch({ type: cartActions.increment, id: id })}
    >
      Add to cart
    </button>
  );
}
