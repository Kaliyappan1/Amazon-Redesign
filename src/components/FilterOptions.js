import React from 'react';
import { FaFilter, FaTags, FaStore, FaStar, FaDollarSign } from 'react-icons/fa'; // Import icons

const FilterOptions = ({ 
  selectedCategory, 
  setSelectedCategory, 
  selectedBrand, 
  setSelectedBrand, 
  sortOption, 
  setSortOption, 
  priceRange, 
  setPriceRange, 
  minRating, 
  setMinRating 
}) => {
  return (
    <div className="filter-container p-1 md:p-4 overflow-x-hidden">
      <h2 className="filter-title text-xl md:text-2xl mb-2 md:mb-4">Filters</h2>
      
      {/* Mobile Icon Format */}
      <div className="filter-icons flex flex-col md:hidden">
        <div className="flex items-center mb-2">
          <FaFilter className="text-xl mr-1" />
          
        </div>
        <select
          className="filter-select w-full p-1 bg-gray-200 rounded border border-gray-300"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Personal Care">Personal Care</option>
        </select>
      </div>

      {/* Laptop View */}
      <div className="filter-section mb-2 md:mb-4 hidden md:block">
        <h3 className="filter-subtitle text-lg md:text-xl mb-1 md:mb-2">Category</h3>
        <select
          className="filter-select w-full p-2 bg-gray-200 rounded border border-gray-300"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Personal Care">Personal Care</option>
        </select>
      </div>

      {/* Brand Filter */}
      <div className="filter-section mb-2 md:mb-4">
        <h3 className="filter-subtitle text-lg md:text-xl mb-1 md:mb-2 hidden md:block">Brand</h3>
        <div className="flex items-center mb-2 md:hidden">
          <FaStore className="text-xl mr-1" />
        
        </div>
        <select
          className="filter-select w-full p-1 bg-gray-200 rounded border border-gray-300"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="All">All Brands</option>
          <option value="TechMaster">TechMaster</option>
          <option value="FitTech">FitTech</option>
          <option value="PowerUp">PowerUp</option>
          <option value="SoundPro">SoundPro</option>
          <option value="SecureView">SecureView</option>
          <option value="DentalTech">DentalTech</option>
        </select>
      </div>

      {/* Sort By Filter */}
      <div className="filter-section mb-2 md:mb-4">
        <h3 className="filter-subtitle text-lg md:text-xl mb-1 md:mb-2 hidden md:block">Sort By</h3>
        <div className="flex items-center mb-2 md:hidden">
          <FaTags className="text-xl mr-1" />
        
        </div>
        <select
          className="filter-select w-full p-1 bg-gray-200 rounded border border-gray-300"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="featured">Featured</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="customerReviews">Customer Reviews</option>
          <option value="newestArrivals">Newest Arrivals</option>
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="filter-section mb-2 md:mb-4">
        <h3 className="filter-subtitle text-lg md:text-xl mb-1 md:mb-2 hidden md:block">Price Range</h3>
        <div className="flex items-center mb-2 md:hidden">
          <FaDollarSign className="text-xl mr-1" />
         
        </div>
        <div className="price-display mb-2">
          <span>${priceRange[0]}</span>
          <span> - ${priceRange[1]}</span>
        </div>
        <input
          type="range"
          min={0}
          max={1000}
          step={10}
          value={priceRange[0]}
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
          className="price-range w-full"
        />
        <input
          type="range"
          min={0}
          max={1000}
          step={10}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          className="price-range w-full"
        />
      </div>

      {/* Min Rating Filter */}
      <div className="filter-section mb-2 md:mb-4">
        <h3 className="filter-subtitle text-lg md:text-xl mb-1 md:mb-2 hidden md:block">  <FaStar className="text-xl mr-1" />Min Rating</h3>
        <div className="flex items-center mb-2 md:hidden">
          <FaStar className="text-xl mr-1" />
          
        </div>
        <input
          type="range"
          min={0}
          max={5}
          step={0.5}
          value={minRating}
          onChange={(e) => setMinRating(+e.target.value)}
          className="rating-range w-full"
        />
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className={`star text-yellow-500 ${star <= minRating ? 'active' : ''}`}>
              ★
            </span>
          ))}
          <span className="rating-text">and up</span>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
