import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import CartContext, { cartActions } from "./CartContext";
import Product from "./components/Product";
import CartLink from "./components/CartLink";

const cartReducer = (state, { type, id, quantity }) => {
  if (!state[id]) state[id] = 0;
  switch (type) {
    case cartActions.increment:
      return { ...state, [id]: state[id] + 1 };
    case cartActions.decrement:
      if (state[id] > 1) {
        return { ...state, [id]: state[id] - 1 };
      } else {
        // TODO: add confirmation modal before filtering out
        const newState = { ...state };
        delete newState[id];
        return newState;
      }
    case cartActions.set:
      return { ...state, [id]: quantity };
    default:
      throw new Error(`Unhandled cart action type ${type}`);
  }
};

function App() {
  const [cartState, cartDispatch] = useReducer(cartReducer, {});

  return (
    <div className="App">
      <Router>
        <CartContext.Provider value={{ cartState, cartDispatch }}>
          <ul className="nav">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <CartLink to="/cart">Cart</CartLink>
            </li>
          </ul>

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/shop" exact>
              <Shop />
            </Route>
            <Route path="/shop/:productId">
              <Product />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </CartContext.Provider>
      </Router>
    </div>
  );
}

export default App;
