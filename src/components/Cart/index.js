import React from "react";
import "./index.css";

function Cart() {
  return (
    <div className="wishlist-container">
      <div className="wishlist-top">
        <img
          className="empty-cart"
          alt="empty"
          width="263"
          height="200"
          src="https://furrl.in/_next/static/media/emptyBag.317aed26.svg"
        />
        <p className="empty-para">
          Looks like your shopping bag <br /> is empty
        </p>
      </div>
      <div className="wishlist-bottom">
        <button className="common-button1">CONTINUE SHOPPING</button>

        <button className="common-button">LOGIN</button>
      </div>
    </div>
  );
}

export default Cart;
