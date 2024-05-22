import React, { useEffect, useState, useCallback } from "react";
import ProductItem from "../ProductItem/index";
import "./index.css";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchProducts = useCallback(async () => {
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
              page: page,
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
      setProductList((prevList) => [
        ...prevList,
        ...data.data.getListingProducts.products,
      ]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      setPage((prevPage) => prevPage + 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="product-list">
      <ul className="productlist-container">
        {productList.map((product) => (
          <ProductItem key={product.id} prodItem={product} />
        ))}
      </ul>
      {loading && <p>Loading more products...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default ProductList;
