import React, { useContext } from "react";
import CartContext, { cartActions } from "../CartContext";
import Button from "../styled-components/Button";

export default function AddToCart({ id }) {
  const { cartDispatch } = useContext(CartContext);

  const handleClick = (e) => {
    e.stopPropagation();
    cartDispatch({ type: cartActions.increment, id: id });
  };

  return <Button onClick={handleClick}>Add to cart</Button>;
}
