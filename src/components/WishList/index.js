import React from "react";
import "./index.css";

function WishList() {
  return (
    <div className="wishlist-container">
      <div className="wishlist-top">
        <img
          className="empty-wishlist"
          alt=""
          width="263"
          height="200"
          src="https://furrl.in/_next/static/media/emptyWishlist.c12c0656.svg"
        />
        <p className="empty-para">
          Looks like your wishlist is <br /> empty
        </p>
      </div>
      <div className="wishlist-bottom">
        <button className="common-button">CONTINUE SHOPPING</button>

        <button className="common-button">LOGIN</button>
      </div>
    </div>
  );
}

export default WishList;
