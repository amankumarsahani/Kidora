import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-pacifico text-purple-600">
                Kidora
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/stationery"
              className="text-gray-700 hover:text-purple-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Stationery
            </Link>
            <Link
              to="/clothes"
              className="text-gray-700 hover:text-purple-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Clothes
            </Link>
            <Link
              to="/toys"
              className="text-gray-700 hover:text-purple-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Toys
            </Link>
            <Link
              to="/accessories"
              className="text-gray-700 hover:text-purple-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Accessories
            </Link>
            <Link
              to="/bundles"
              className="text-gray-700 hover:text-purple-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Create Bundle
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button className="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
                <i className="ri-search-line text-xl"></i>
              </button>
              <button className="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
                <i className="ri-heart-line text-xl"></i>
              </button>
              <button className="relative w-6 h-6 flex items-center justify-center text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
                <i className="ri-shopping-cart-line text-xl"></i>
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
            <div className="flex items-center space-x-3 ml-4">
              <Link
                to="/signin"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium cursor-pointer"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors font-medium cursor-pointer"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
              <i className="ri-shopping-cart-line text-xl"></i>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
            >
              <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/stationery"
                className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Stationery
              </Link>
              <Link
                to="/clothes"
                className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Clothes
              </Link>
              <Link
                to="/toys"
                className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Toys
              </Link>
              <Link
                to="/accessories"
                className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accessories
              </Link>
              <Link
                to="/bundles"
                className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Create Bundle
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Link
                  to="/signin"
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors font-medium text-center cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
              <div className="flex items-center justify-around pt-4 border-t border-gray-200">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
                  <i className="ri-search-line text-xl"></i>
                  <span>Search</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
                  <i className="ri-heart-line text-xl"></i>
                  <span>Wishlist</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;