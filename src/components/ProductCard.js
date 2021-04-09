import React from "react";
import { Link } from "react-router-dom";
import Card from "../styled-components/Card";
import { formatCurrency } from "../utilities";
import AddToCart from "./AddToCart";

//! I want the whole card to be a link, EXCEPT the button
// but stopPropagation isn't working

export default function ProductCard({ id, product }) {
  return (
    <Card backgroundImage={product.image}>
      <Link to={`/shop/${id}`} className="background-image" />
      <div className="card-info">
        <h3>{product.title}</h3>
        <p>{formatCurrency(product.price)}</p>
        <AddToCart id={id} />
      </div>
    </Card>
  );
}
