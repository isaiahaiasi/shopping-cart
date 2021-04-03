// TODO:
// - shopping cart context. State needs iterable of [item id, quantity].
// (I don't *think* I need any other info in state, since if I have item id,
//  I can just query for its price, etc)
// - main nav switch: home, cart, route
// - routes, including item param route?
// - (I think that's it, for the main app component)

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import CartContext from "./CartContext";

function App() {
  const initialCartValue = {
    //! TEMP; Final will init with empty object.
    fancyBoots: 2,
    fancyCoat: 1,
    luckySocks: 4,
  };

  return (
    <div className="App">
      <Router>
        <ul className="nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>

        <CartContext.Provider value={initialCartValue}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/shop">
              <Shop />
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
