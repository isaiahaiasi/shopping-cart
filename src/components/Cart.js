import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";
import storeData from "../store-data";
import Button from "../styled-components/Button";
import Main from "../styled-components/Main";
import { formatCurrency } from "../utilities";
import AddToCartInput from "./AddToCartInput";

export default function Cart() {
  const { cartState } = useContext(CartContext);

  if (Object.entries(cartState).length === 0) {
    return (
      <Main>
        <h1>Cart</h1>
        <h2>Hmmm... There doesn't seem to be anything here!</h2>
        <p>
          Head over to the <Link to="/shop">Shop</Link> page to start adding
          items to your cart!
        </p>
      </Main>
    );
  }

  const total = Object.entries(cartState).reduce(
    (acc, [id, quantity]) => acc + storeData[id].price * quantity,
    0
  );

  return (
    <Main>
      <h1>Cart</h1>
      <ul>
        {Object.entries(cartState).map(([id, quantity]) => {
          return (
            <li key={id}>
              <b>{storeData[id].title}</b> - {quantity} -{" "}
              {formatCurrency(storeData[id].price * quantity)}
              <AddToCartInput id={id} />
            </li>
          );
        })}
      </ul>
      <div>Total: {formatCurrency(total)}</div>
      <Button>
        <div>Proceed to checkout</div>
      </Button>
    </Main>
  );
}
