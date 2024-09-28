'use client';

import { useState } from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';

export default function Header({ searchTerm, setSearchTerm, cartCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-3xl font-bold transition duration-300 ease-in-out transform hover:scale-105">Amazon</a>
          
          {/* Desktop Search Input */}
          <div className="hidden md:flex items-center space-x-6 flex-grow justify-center">
            <form className="flex-grow max-w-2xl" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-3 rounded-full bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </form>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/cart" className="flex items-center transition duration-200 hover:text-blue-500">
              <ShoppingCart className="mr-1" />
              Cart ({cartCount})
            </a>
            <div className="relative inline-block text-left">
              <button
                className="flex items-center transition duration-200 hover:text-blue-500"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <User className="mr-1" />
                Account
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-gray-800 rounded-md shadow-lg">
                  <div className="py-1">
                    <a href="/profile" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">Profile</a>
                    <a href="/orders" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">Orders</a>
                    <a href="/wishlist" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">Wishlist</a>
                    <a href="/logout" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">Logout</a>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="text-white" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden bg-gray-800 rounded-md shadow-lg p-4">
            <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-3 rounded-full bg-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </form>
            <div className="flex flex-col space-y-2">
              <a href="/cart" className="flex items-center text-gray-300 hover:text-blue-500 transition duration-200">
                <ShoppingCart className="mr-1" />
                Cart
              </a>
              <a href="/account" className="flex items-center text-gray-300 hover:text-blue-500 transition duration-200">
                <User className="mr-1" />
                Account
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
