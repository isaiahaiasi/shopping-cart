import React from "react";
import { Link, useParams } from "react-router-dom";
import { formatCurrency } from "../utilities";
import storeData from "../store-data";
import AddToCartButton from "./AddToCartButton";
import ProductContainer from "../styled-components/ProductContainer";

export default function Product() {
  const { productId } = useParams();

  const product = storeData[productId];

  // TODO: this should probably be a redirect
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
    <ProductContainer>
      <Link to="/shop">Back to shop</Link>

      <img src={product.image} alt={product.title} />

      <div>
        <h2>{product.title}</h2>
        <p>{productId}</p>
        <p>{formatCurrency(product.price)}</p>
        {product.weight && <p>{product.weight} lb</p>}
        <ul>
          {product.category.map((cat) => (
            <li key={cat}>{cat}</li>
          ))}
        </ul>
        <AddToCartButton id={productId} />
      </div>
    </ProductContainer>
  );
}
