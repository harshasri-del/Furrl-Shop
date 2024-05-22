import React, { useState } from "react";
import "./index.css";
import Model from "../Model/index";
import { RiShare2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function ProductItem(props) {
  const { prodItem } = props;
  const { id, title, MRP, price, discountPercent, brand, images } = prodItem;
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  return (
    <li className="product-container">
      <Link to={`/products/${id}`} className="link-item">
        <div className="card">
          <div className="image-with-button-container">
            <img src={images[0].src} alt={title} className="image" />
            <button className="button" onClick={toggleModal}>
              <RiShare2Line />
            </button>
            {modalOpen && (
              <Model closeModal={toggleModal} prodDetails={prodItem} />
            )}
          </div>
          <div className="card-body">
            <p className="brand">{brand[0].name}</p>
            <h6 className="title">{title}</h6>
            <p>
              <span className="price1">Rs.{price.value} </span>
              <span className="mrp1">Rs.{MRP.value} </span>
              <span className="discount1">{discountPercent}%</span>
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ProductItem;
