import React from "react";

export default function ProductCard({ product }) {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>&#36;{product.price / 100}</p>
      <ul>
        {product.category.map((cat) => (
          <li>{cat}</li>
        ))}
      </ul>
    </div>
  );
}
