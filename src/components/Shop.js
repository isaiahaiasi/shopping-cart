import React from "react";
import storeData from "../store-data";
import ProductCard from "./ProductCard";

export default function Shop() {
  return (
    <div>
      <h1>Shop</h1>
      <ul>
        {Object.entries(storeData).map(([id, product]) => (
          <ProductCard key={id} id={id} product={product} />
        ))}
      </ul>
    </div>
  );
}
