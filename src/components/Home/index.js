import React from "react";
import { useState } from "react";
import "./index.css";
import ProductList from "../ProductList";

const Home = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleBackgroundColor = () => {
    setIsToggled(!isToggled);
  };
  const categoryListButtons = ["All", "Home", "Apparel", "Accessories"];

  const [isToggleBgColor, setIsToggleBgColor] = useState(
    categoryListButtons.map((_, index) => index === 0)
  );

  const toggleBgColor = (index) => {
    const newToggleButtons = categoryListButtons.map((_, i) => i === index);
    setIsToggleBgColor(newToggleButtons);
  };

  return (
    <div className="home-bg-container">
      <div className="home-top-container">
        <p className="home-top-heading">#HomeHunts</p>
      </div>
      <div className="home-bottom-container">
        <div className="home-bottom-first">
          <button
            className={`home-button ${isToggled ? "" : "toggled"}`}
            onClick={toggleBackgroundColor}
          >
            Products
          </button>
        </div>
        <p className="para">486 Products</p>
        <div className="category-buttons-container">
          {categoryListButtons.map((each, index) => (
            <button
              key={index}
              className={`category-button ${
                isToggleBgColor[index] ? "toggled1" : ""
              }`}
              onClick={() => toggleBgColor(index)}
            >
              {each}
            </button>
          ))}
        </div>
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
