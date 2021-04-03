import React from "react";
import storeData from "../store-data";
import ProductCard from "./ProductCard";

export default function Shop() {
  return (
    <div>
      <h1>Shop</h1>
      <ul>
        {storeData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
