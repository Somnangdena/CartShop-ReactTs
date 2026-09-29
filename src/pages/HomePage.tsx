import { useContext } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";

const HomePage = () => {
  const {products} = useContext(ProductContext);
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "mens-shirts" || item.category === "womens-dresses"
    );
  });
  return (
    <main className="container mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
