import React from "react";
import { Link } from "react-router-dom";
import Card from "../styled-components/Card";
import { formatCurrency } from "../utilities";
import AddToCartButton from "./AddToCartButton";

//! I want the whole card to be a link, EXCEPT the button
// but stopPropagation isn't working

export default function ProductCard({ id, product }) {
  return (
    <Card backgroundImage={product.image}>
      <Link to={`/shop/${id}`} className="background-image" />
      <div className="card-info">
        <Link to={`/shop/${id}`}>
          <h3 className="product-title">{product.title}</h3>
        </Link>
        <p className="product-price">{formatCurrency(product.price)}</p>
        <AddToCartButton id={id} />
      </div>
    </Card>
  );
}
