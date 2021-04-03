// TODO:
// - shopping cart context. State needs iterable of [item id, quantity].
// (I don't *think* I need any other info in state, since if I have item id,
//  I can just query for its price, etc)
// - main nav switch: home, cart, route
// - routes, including item param route?
// - (I think that's it, for the main app component)

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
      return { ...state, [id]: state[id] > 0 ? state[id] - 1 : state[id] };
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
