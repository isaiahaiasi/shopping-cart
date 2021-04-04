import React, { useContext } from "react";
import CartContext, { cartActions } from "../CartContext";
import Button from "../styled-components/Button";

export default function AddToCart({ id }) {
  const { cartDispatch } = useContext(CartContext);

  return (
    <Button
      onClick={() => cartDispatch({ type: cartActions.increment, id: id })}
    >
      Add to cart
    </Button>
  );
}
