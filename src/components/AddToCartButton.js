import React, { useContext, useState } from "react";
import CartContext, { cartActions } from "../CartContext";
import Button from "../styled-components/Button";
import { RiCheckLine } from "react-icons/ri";
export default function AddToCartButton({ id }) {
  const { cartState, cartDispatch } = useContext(CartContext);
  const [mouseHover, setMouseHover] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    if (!mouseHover) {
      cartDispatch({ type: cartActions.add, id });
    } else {
      cartDispatch({ type: cartActions.remove, id });
      console.log("removing...");
      setMouseHover(false);
    }
  };

  return !cartState[id] ? (
    <Button onClick={handleClick}>
      <div>Add to cart</div>
    </Button>
  ) : (
    <Button
      added
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      onClick={handleClick}
    >
      {!mouseHover ? (
        <div>
          Added to cart <RiCheckLine />
        </div>
      ) : (
        <div>Remove from cart?</div>
      )}
    </Button>
  );
}
