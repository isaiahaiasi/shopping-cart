import React, { useReducer } from "react";
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
import Main from "./styled-components/Main";

const cartReducer = (state, { type, id, quantity }) => {
  if (!state[id]) state[id] = 0;

  // Depending on state, I might want to change action type
  // ie, if decrementing, delete if qty <= 1
  let handledType = type;
  if (type === cartActions.decrement && state[id] <= 1) {
    handledType = cartActions.remove;
  }

  switch (handledType) {
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
    case cartActions.remove:
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      throw new Error(`Unhandled cart action type ${type}`);
  }
};

// TODO: add cart contents to localstorage!

function App() {
  const [cartState, cartDispatch] = useReducer(cartReducer, {});

  // TODO: figure out a place to put this... idk how to make NavLink active
  // work with styled-components yet
  const activeNavStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
  };

  //! apparently gh-pages is NOT compatible with SPAs
  //! so I need another solution to routing
  const BASE_URL = "/shopping-cart";

  return (
    <div className="App">
      <Router>
        <CartContext.Provider value={{ cartState, cartDispatch }}>
          <Nav>
            <ul className="nav">
              <li>
                <NavLink to={BASE_URL + "/"} activeStyle={activeNavStyle} exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={BASE_URL + "/shop"} activeStyle={activeNavStyle}>
                  Shop
                </NavLink>
              </li>
              <li>
                <CartLink to={BASE_URL + "/cart"} activeStyle={activeNavStyle}>
                  Cart
                </CartLink>
              </li>
            </ul>
          </Nav>
          <Main>
            <Switch>
              <Route path={BASE_URL + "/"} exact>
                <Home />
              </Route>
              <Route path={BASE_URL + "/shop"} exact>
                <Shop />
              </Route>
              <Route path={BASE_URL + "/shop/:productId"}>
                <Product />
              </Route>
              <Route path={BASE_URL + "/cart"}>
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
