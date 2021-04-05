import React, { useContext } from "react";
import CartContext, { cartActions } from "../CartContext";
import { FaTrash } from "react-icons/fa";
import RoundBtn from "../styled-components/RoundBtn";
import CartInputGroup from "../styled-components/CartInputGroup";
import TextInput from "../styled-components/TextInput";

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

  const handleRemove = () => {
    cartDispatch({ type: cartActions.remove, id: id });
  };

  return (
    <CartInputGroup>
      <RoundBtn onClick={handleRemove}>
        <FaTrash />
      </RoundBtn>
      <RoundBtn onClick={handleDecrement}>
        <span> - </span>
      </RoundBtn>
      <TextInput type="number" value={quantity} onChange={handleInputChange} />
      <RoundBtn onClick={handleIncrement}>
        <span> + </span>
      </RoundBtn>
    </CartInputGroup>
  );
}
