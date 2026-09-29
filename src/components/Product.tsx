import type {Product as ProductType} from "../contexts/ProductContext"
import {  useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";
interface ProductProps {
  product: ProductType;
}
const Product = ({product}: ProductProps) => {
  const {addToCart} = useCart();
  
 return (
    <section className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="aspect-square cursor-pointer">
        <Link to={`/products/${product.id}`}>
        <img
          height={400}
          width={400}
          src= {product.images[0]}
          alt= {product.title}
          className="w-full h-full rounded-md object-cover"
        />
        </Link>
      </div>

      <div className="mt-4 flex flex-col">
        <p className="text-lg font-semibold">{product.title}</p>
        <p className="mt-1 text-gray-600">${product.price}</p>

        <button 
        onClick={() => addToCart(product)}
        className="mt-4 w-full rounded-md self-end bg-primary px-4 py-2 text-white hover:bg-primary/70 cursor-pointer">
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default Product;
