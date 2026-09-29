import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import { ProductContext, type Product } from "../contexts/ProductContext";
import { LuChevronLeft, LuShoppingCart, LuTag, } from "react-icons/lu";


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>();

  const {addToCart} = useCart();
  const {products} = useContext(ProductContext);

  useEffect(() => {
    setProduct(products.find((data) => data.id == Number(id)));
  }, [id]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>

        <Link
          to="/"
          className="inline-block mt-4 text-orange-600"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 min-h-screen rounded-2xl shadow-2xl my-8 p-6 md:p-12 border">
        <Link to={"/"}
        className="inline-block"
        >
          <button className="flex items-center cursor-pointer text-gray-900 hover:text-orange-400 transition duration-150 mb-12 font-semibold text-lg">
            <LuChevronLeft className="w-6 h-6 mr-1" />
            <span>Back to All Products</span>
          </button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
          <div className="w-full ">
            <img
              src={product?.images[0]}
              alt={product?.title}
              className="w-100 h-100 object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-extrabold text-black mb-4 leading-tight tracking-tighter">
                {product?.title}
              </h1>
            </div>
            <p className="text-3xl font-extrabold text-primary mb-4">
              $ {product?.price.toFixed(2)}
            </p>
            <h2 className="text-xl font-bold mb-2 border-b pb-2 flex items-center space-x-2">
              <LuTag className="w-5 h-5 text-orange-500" />
              <span>Product Overview</span>
            </h2>
            <p className="text-black text-lg leading-relaxed mb-3">
              {product?.description}
            </p>
            <div className="mt-5 space-y-4 flex justify-center items-center flex-col">
              <button 
              onClick={() => addToCart(product)}
              className="w-full py-3 bg-orange-600 text-white font-bold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider">
                <LuShoppingCart className="w-6 h-6" />
                <span>Add to Cart</span>
              </button>
              <Link to={'/'} className="w-full py-3 border-2 border-orange-600 text-orange-400 font-bold rounded-full cursor-pointer hover:bg-primary/10 transition duration-300 text-center uppercase tracking-wider">Keep Shopping</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
