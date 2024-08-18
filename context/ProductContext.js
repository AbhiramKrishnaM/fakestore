// context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";

// API
import Product from "../api/product.js";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await Product.getProducts();

      const allProducts = response.data;

      setProducts(allProducts);

      // Slice the first 5 products for trending
      const trending = allProducts.slice(0, 5);
      setTrendingProducts(trending);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, isLoading, trendingProducts, fetchProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
