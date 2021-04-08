import React from "react";
import { Link } from "react-router-dom";
import Card from "../styled-components/Card";
import { formatCurrency } from "../utilities";
import AddToCart from "./AddToCart";

export default function ProductCard({ id, product }) {
  return (
    <Link to={`/shop/${id}`}>
      <Card backgroundImage={product.image}>
        <div className="card-info">
          <h3>{product.title}</h3>
          <p>{formatCurrency(product.price)}</p>
          <AddToCart id={id} />
        </div>
      </Card>
    </Link>
  );
}
