import React, { useEffect, useReducer } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

// custom react elements (not components)
import CartContext, { cartActions } from "./CartContext";

// custom components
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Product from "./components/Product";
import CartLink from "./components/CartLink";

// styled components
import Nav from "./styled-components/Nav";

const cartReducer = (state, { type, id, quantity, data }) => {
  if (!state[id]) state[id] = 0;

  // Depending on state, I might want to change action type
  // ie, if decrementing, delete if qty <= 1
  let handledType = type;
  if (type === cartActions.decrement && state[id] <= 1) {
    handledType = cartActions.remove;
  }

  switch (handledType) {
    case cartActions.add:
      return { ...state, [id]: 1 };
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
      // TODO: this means 0 doesn't delete item from cart
      // but immediately deleting when typing a number is also bad
      // I might include a different action.type onBlur to delete if 0?
      return { ...state, [id]: quantity };
    // this is kind of a nightmare, actually
    case cartActions.setAll:
      return data;
    case cartActions.remove:
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      throw new Error(`Unhandled cart action type ${type}`);
  }
};

function App() {
  const [cartState, cartDispatch] = useReducer(cartReducer, {});

  // * Handle localStorage
  // Initialize cart from localstorage, if possible
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      cartDispatch({ type: cartActions.setAll, data: JSON.parse(cartData) });
    }
  }, []);

  // Update localStorage when cartState is updated
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));
  }, [cartState]);

  // TODO: figure out a place to put this...
  // idk how to make NavLink active work with styled-components yet
  const activeNavStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
  };

  return (
    <div className="App">
      {/* this should probably be an environment var or somethin */}
      <Router basename="shopping-cart">
        <CartContext.Provider value={{ cartState, cartDispatch }}>
          <Nav>
            <ul className="nav">
              <li>
                <NavLink to="/" activeStyle={activeNavStyle} exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" activeStyle={activeNavStyle}>
                  Shop
                </NavLink>
              </li>
              <li>
                <CartLink to="/cart" activeStyle={activeNavStyle}>
                  Cart
                </CartLink>
              </li>
            </ul>
          </Nav>
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
            <Route path="/cart" exact>
              <Cart />
            </Route>
          </Switch>
        </CartContext.Provider>
      </Router>
    </div>
  );
}

export default App;
