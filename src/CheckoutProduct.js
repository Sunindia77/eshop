import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="productProduct">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
        alt=""
        className="checkoutProduct__image"
      />
      <div className="product__info">
        <p className="checkoutProduct__title"></p>
        <p className="checkoutProduct__price">
          Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag,
          Water Repellent Fabric for Men and Women (Blue)
        </p>
        <p>
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className="checkoutProduct__rating">⭐⭐</div>
        <button>Remove from Basket </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
