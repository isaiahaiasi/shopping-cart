import React from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utilities";
import AddToCart from "./AddToCart";

export default function ProductCard({ product }) {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>{formatCurrency(product.price)}</p>
      <ul>
        {product.category.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <Link to={`/shop/${product.id}`}>Learn more</Link>
      <AddToCart id={product.id} />
    </div>
  );
}
