// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './index.css';

// function ProductItemDetail() {
//   const [productList, setProductList] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch('https://api.furrl.in/api/v2/listing/getListingProducts', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             input: {
//               page: 1,
//               pageSize: 10,
//               filters: [],
//               id: '#HomeHunts',
//               entity: 'vibe',
//             },
//           }),
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         setProductList(data.data.getListingProducts.products);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const product = productList.find(item => item.id === id);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const { title, MRP, price, discountPercent, images } = product;

//   return (
//     <div className="product-details-success-view">
//       <div className="product-details-container">
//         <img src={images[0].src} alt={title} className="product-image" />
//         <div className="product">
//           <h3 className="product-name">{title}</h3>
//           <p>
//             <span className="price">Rs.{price.value}</span>
//             <span className="mrp">Rs.{MRP.value}</span>
//             <span className="discount">{discountPercent}% off</span>
//           </p>
//           <button type="button" className="button add-to-cart-btn">
//             ADD TO CART
//           </button>
//         </div>
//         <hr className="horizontal-line" />
//       </div>
//     </div>
//   );
// }

// export default ProductItemDetail;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";

function ProductItemDetail() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://api.furrl.in/api/v2/listing/getListingProducts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              input: {
                page: 1,
                pageSize: 10,
                filters: [],
                id: "#HomeHunts",
                entity: "vibe",
              },
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const foundProduct = data.data.getListingProducts.products.find(
          (item) => item.id === id
        );
        setProduct(foundProduct);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); 

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const { title, MRP, price, discountPercent, images } = product;

  const discountedPrice = MRP.value - (MRP.value * discountPercent) / 100;

  const total = Math.round(discountedPrice);

  return (
    <div className="product-details-success-view">
      <div className="product-details-container">
        <img src={images[0].src} alt={title} className="product-image" />
        <div className="product">
          <h3 className="product-name">{title}</h3>
          <p>
            <span className="price">Rs.{price.value}</span>
            <span className="mrp">Rs.{MRP.value}</span>
            <span className="discount">{discountPercent}% </span>
          </p>
        </div>
        <hr className="horizontal-line" />

        <button className="common-button2">
          Get it at just <span className="price-total">Rs.{total}/-</span>
        </button>
      </div>
    </div>
  );
}

export default ProductItemDetail;
