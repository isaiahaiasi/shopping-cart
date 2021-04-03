import React from "react";
import storeData from "../store-data";
import ProductCard from "./ProductCard";

export default function Shop() {
  return (
    <div>
      <h1>Shop</h1>
      <ul>
        {storeData.map((product) => (
          <ProductCard product={product} />
        ))}
      </ul>
    </div>
  );
}
