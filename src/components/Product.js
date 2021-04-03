import React from "react";
import { Link, useParams } from "react-router-dom";
import { formatCurrency } from "../utilities";
import storeData from "../store-data";

export default function Product() {
  const { productId } = useParams();
  console.log(productId);
  // TODO: clearly an array is not the right data structure here, lol
  const product = storeData.find((prod) => {
    console.log(prod.id);
    return prod.id === productId;
  });

  // TODO: this should be a redirect
  if (!product) {
    return (
      <div>
        <h2>Oops! Sorry about that...</h2>
        <p>Could not find product id {productId}</p>
        <Link to="/shop">Back to shop</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/shop">Back to shop</Link>

      <div>
        <h2>{product.title}</h2>
        <p>{product.id}</p>
        <p>{formatCurrency(product.price)}</p>
        {product.weight && <p>{product.weight} lb</p>}
        <ul>
          {product.category.map((cat) => (
            <li>{cat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
