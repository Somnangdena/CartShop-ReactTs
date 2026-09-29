import { LuX } from "react-icons/lu";
import { type CartItem as CartItemType, useCart } from "../contexts/CartContext";

const CartItem = ({ item }: { item: CartItemType }) => {
  const {
    addToCart,
    removeFromCart,
    decreaseQuantity,
  } = useCart();

  const increaseQ = () => {
    addToCart(item);
  };

  const decreaseQ = () => {
    decreaseQuantity(item.id);
  };

  return (
    <div className="flex flex-col items-center sm:flex-row justify-between p-4 sm:p-6 mb-4 bg-primary/10 rounded-xl shadow-2xl border border-gray-800 transition duration-300 hover:border-orange-600/50">
      <div className="flex items-center space-x-4 w-full sm:w-auto">
        <img
          className="w-24 h-24 object-cover rounded-lg border-2 border-gray-700"
          src={item.images[0]}
          alt={item.title}
        />

        <div className="grow">
          <h3 className="text-xl font-bold text-black line-clamp-1">
            {item.title}
          </h3>

          <p className="text-lg text-orange-400 font-semibold">
            ${item.price.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end w-full sm:w-2/5 sm:mt-0 space-x-4">
        <div className="flex items-center border border-gray-700 rounded-full overflow-hidden shadow-lg">
          <button
            onClick={decreaseQ}
            className="text-xl flex p-2 text-gray-400 hover:bg-primary/80 transition duration-150 w-8 h-8 items-center justify-center"
          >
            -
          </button>

          <span className="px-3 text-base font-bold text-black">
            {item.quantity}
          </span>

          <button
            onClick={increaseQ}
            className="text-xl flex p-2 text-gray-400 hover:bg-primary/80 transition duration-150 w-8 h-8 items-center justify-center"
          >
            +
          </button>
        </div>

        <p className="font-extrabold text-orange-300 w-24 text-right hidden md:block">
          ${(item.price * item.quantity).toFixed(2)}
        </p>

        <button
          onClick={() => removeFromCart(item.id)}
          className="p-3 bg-red-800/20 text-red-400 rounded-full hover:bg-red-800/40 transition duration-150"
        >
          <LuX className="w-5 h-5 text-red-400" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
