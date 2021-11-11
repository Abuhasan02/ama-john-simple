import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee,faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (Props) => {
  const { img, name, seller, price, stock } = Props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt=""></img>
      </div>
      <div>
        <h3 className="product-name">{name}</h3>
        <br />
        <p>
          <small>by:{seller}</small>
        </p>
        <p>${price}</p>
        <br />
        <p>Only {stock} left in stock - order soon</p>
        <button className="main-button" onClick={() => Props.handleAddProduct(Props.product)}>
          <FontAwesomeIcon icon={faShoppingCart} />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
