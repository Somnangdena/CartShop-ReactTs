import React, { createContext, useState, useEffect } from "react";

// create context

export const ProductContext = createContext<any>(null);

const ProductProvider = ({ children }: {children: React.ReactNode} ) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const respone = await fetch("https://fakestoreapi.com/products");
      const data = await respone.json();
      setProducts(data)
    };
    fetchProducts();
  }, []);
  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
