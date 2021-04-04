import React, { useContext } from "react";
import CartContext, { cartActions } from "../CartContext";

export default function AddToCartInput({ id }) {
  const { cartState, cartDispatch } = useContext(CartContext);
  const quantity = cartState[id] ?? 0;

  const handleInputChange = (e) => {
    cartDispatch({
      type: cartActions.set,
      id: id,
      quantity: Math.floor(e.target.value),
    });
  };

  const handleDecrement = () => {
    if (quantity <= 0) return;

    cartDispatch({ type: cartActions.decrement, id: id });
  };

  const handleIncrement = () => {
    cartDispatch({ type: cartActions.increment, id: id });
  };

  return (
    <div className="cart-input">
      <button onClick={handleDecrement}>-</button>
      <input type="number" value={quantity} onChange={handleInputChange} />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
