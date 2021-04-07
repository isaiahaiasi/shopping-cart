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
      id,
      quantity: Math.floor(Math.abs(e.target.value)),
    });
  };

  const handleDecrement = () => {
    if (quantity <= 0) return;

    cartDispatch({ type: cartActions.decrement, id });
  };

  const handleIncrement = () => {
    cartDispatch({ type: cartActions.increment, id });
  };

  const handleRemove = () => {
    cartDispatch({ type: cartActions.remove, id });
  };

  return (
    <CartInputGroup>
      <RoundBtn onClick={handleRemove}>
        <FaTrash />
      </RoundBtn>
      <RoundBtn onClick={handleDecrement}>
        <span style={{ fontSize: "1.6em" }}> - </span>
      </RoundBtn>
      <TextInput type="number" value={quantity} onChange={handleInputChange} />
      <RoundBtn onClick={handleIncrement}>
        <span style={{ fontSize: "1.6em" }}> + </span>
      </RoundBtn>
    </CartInputGroup>
  );
}
