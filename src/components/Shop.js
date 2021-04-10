import React from "react";
import storeData from "../store-data";
import ProductCard from "./ProductCard";
import Main from "../styled-components/Main";

export default function Shop() {
  return (
    <Main>
      <h1>Shop</h1>
      <ul style={{ paddingLeft: 0 }}>
        {Object.entries(storeData).map(([id, product]) => (
          <ProductCard key={id} id={id} product={product} />
        ))}
      </ul>
    </Main>
  );
}
