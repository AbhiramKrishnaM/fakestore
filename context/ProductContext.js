// context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";

// API
import Product from "../api/product.js";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await Product.getProducts();
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProductContext.Provider value={{ products, isLoading, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
