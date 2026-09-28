import { useState } from "react";
import { LuSearch, LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8 lg:space-x-12">
            <Link
              className="text-2xl tracking-tight text-gray-900 hover:text-gray-700 transition-colors"
              to="/">
              Cart<span className="text-primary">SHOP</span>
            </Link>
          </div>
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <form className="relative w-full">
              <input
                type="search"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                aria-label="Search products"
                value=""
              />
              <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </form>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors">
              <LuSearch 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="h-5 w-5 text-gray-700" />
            </button>
            <Link
              to={"/"}
              className="relative p-2 rounded-full hover:bg-gray-100 transition-all duration-200 group">
              <LuShoppingCart className="h-6 w-6 text-gray-700 group-hover:text-gray-900 transition-colors" />
            </Link>
            <nav className="flex items-center space-x-1">
              <Link
                className="relative py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                to="/contact/">
                Contact
              </Link>
            </nav>
          </div>
        </div>
        {
          isSearchOpen && (
            <div className="flex pt-2 lg:hidden">
            <form className="relative w-full">
              <input
                type="search"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                aria-label="Search products"
                value=""
              />
              <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </form>
          </div>
          )
        }
      </div>
    </header>
  );
};

export default Navbar;
