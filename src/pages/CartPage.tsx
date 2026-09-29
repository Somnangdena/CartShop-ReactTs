import { Link } from "react-router-dom";
import { LuChevronLeft, LuZap } from "react-icons/lu";
import { useCart } from "../contexts/CartContext";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const { cart, totalItems, totalPrice  } = useCart();

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 p-8">
        <div className="flex items-center mb-5 ">
          <Link
            to={"/"}
            className="flex items-center text-black hover:text-orange-400 transition duration-150 font-semibold text-lg"
          >
            <LuChevronLeft className="w-6 h-6 mr-1" />
            <span>Back to Store</span>
          </Link>
        </div>
        <h2 className="text-4xl font-extrabold text-gray-700 mb-10 tracking-tight">
          Shopping Cart ({totalItems})
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="lg:col-span-1 p-8 rounded-2xl sticky top-20 h-fit border">
            <h3 className="text-3xl font-bold text-black mb-5 border-b border-y-gray-700 pb-3 flex items-center space-x-2">
              <div className="flex justify-between">
                <span className="w-6 h-6 text-primary">$</span>
                <span>Order Total</span>
              </div>
            </h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex justify-between text-xl">
                <span>SubTotal :</span>
                <span className="font-semibold">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-xl">
                <span>Shipping (Express):</span>
                <span className="font-semibold text-green-400">Free</span>
              </div>
              <div className="flex justify-between pt-6 border-t border-gray-700 gap-5">
                <span className="text-2xl font-extrabold text-white">
                  Estimated Total:
                </span>
                <span className="text-2xl font-extrabold text-orange-400">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
            <a
            href="/"
              className="mt-8 py-3 bg-orange-600 text-white font-extrabold text-xl rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider"
            >
                <LuZap className="w-6 h-6" />
                <span>Proceed Securely</span>
            </a>
            <p className="text-xs text-gray-500 text-center mt-4">
              All transactions are encrypted and secure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
