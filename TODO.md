# TODO

(Honestly, the guidelines here are a little unclear. But I'm interpreting it as 3 main routes: home, shop, and cart.)

- **Home page**

  Basic splashscreen, I guess. No meaningful content required.

- **Shop page**

  Spec here is kind of unclear, but I think I want the main shop pages to display cards for every item with a picture, title, price, and "add to cart button".

  Then, clicking on a card will bring up a sub-route for that specific item, which displays all of the other information, as well as a description and inputs for adding multiple to the cart (number field + increment + decrement)

- **Cart page**

  Show everything in the cart, obviously, as well as the total price of cart and a "checkout" button that doesn't lead anywhere.

## Main features:

- A nav in a base component, which contains a router switch for the main pages (home, shop, cart), and the number of items in the cart (which means the shopping cart context needs to be above it)
- Subroutes that use routeparams for individual product pages.
- A shopping cart context hook that lets you add items to the cart, and get info on what's currently in the cart
- A dataset of product mocks, containing a link to an image, a product title, a price, a product description, and possibly other information like rating and technical details...

## Other considerations:

- Not yet sure how I want to handle styles. I am really, really sick of trying to write all of my css from scratch. So far, I've resisted using a css framework, but at the very least I should start experimenting with styled-components or something like that...
- Not sure how to handle images...
- Not sure what theme I want the shop to have yet. I kind of don't want to go super generic, but I don't think I'm interested in goofy either.
