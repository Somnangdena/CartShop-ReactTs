import { createContext, useEffect, useState, type ReactNode } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string;
}

interface ProductContextType {
  products: Product[];
}

export const ProductContext = createContext<ProductContextType>({
  products: [],
});

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const respone = await fetch("https://dummyjson.com/products?limit=0");
      const data = await respone.json();
      setProducts(data.products)
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
