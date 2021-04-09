import React, { useContext } from "react";
import CartContext, { cartActions } from "../CartContext";
import Button from "../styled-components/Button";

export default function AddToCartButton({ id }) {
  const { cartState, cartDispatch } = useContext(CartContext);

  const handleClick = (e) => {
    e.stopPropagation();
    cartDispatch({ type: cartActions.add, id: id });
  };

  return !cartState[id] ? (
    <Button onClick={handleClick}>
      <div>Add to cart</div>
    </Button>
  ) : (
    <Button disabled>
      <div>Added to cart</div>
    </Button>
  );
}
