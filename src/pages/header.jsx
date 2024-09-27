// Header.js
import { useState } from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';

export default function Header({ onAccountClick, searchTerm, setSearchTerm }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-3xl font-bold transition duration-300 ease-in-out transform hover:scale-105">AmaClone</a>
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
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/cart" className="flex items-center transition duration-200 hover:text-blue-500">
              <ShoppingCart className="mr-1" />
              Cart
            </a>
            <div className="relative inline-block text-left">
              <button
                className="flex items-center transition duration-200 hover:text-blue-500"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  onAccountClick(); // Call parent method to show login form
                }}
              >
                <User className="mr-1" />
                Account
              </button>
            </div>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
