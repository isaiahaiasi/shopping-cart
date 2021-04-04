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
import Nav from "./styled-components/Nav";
import Main from "./styled-components/Main";

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

  // TODO: figure out a place to put this... idk how to make NavLink active
  // work with styled-components yet
  const navStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
  };

  return (
    <div className="App">
      <Router>
        <CartContext.Provider value={{ cartState, cartDispatch }}>
          <Nav>
            <ul className="nav">
              <li>
                <NavLink to="/" activeStyle={navStyle} exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" activeStyle={navStyle}>
                  Shop
                </NavLink>
              </li>
              <li>
                <CartLink to="/cart" activeStyle={navStyle}>
                  Cart
                </CartLink>
              </li>
            </ul>
          </Nav>
          <Main>
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
          </Main>
        </CartContext.Provider>
      </Router>
    </div>
  );
}

export default App;
