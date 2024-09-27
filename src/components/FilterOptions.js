import React from 'react';

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
    <div className="mb-6 space-y-4">
      <div className="flex flex-wrap gap-4">
        <select
          className="p-2 border rounded-md"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Personal Care">Personal Care</option>
        </select>
        <select
          className="p-2 border rounded-md"
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
        <select
          className="p-2 border rounded-md"
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
      <div>
        <label className="block mb-2">Price Range</label>
        <input
          type="range"
          min={0}
          max={1000}
          step={10}
          value={priceRange[0]}
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
          className="w-full"
        />
        <input
          type="range"
          min={0}
          max={1000}
          step={10}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          className="w-full"
        />
        <div className="flex justify-between mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
      <div>
        <label className="block mb-2">Minimum Rating</label>
        <input
          type="range"
          min={0}
          max={5}
          step={0.5}
          value={minRating}
          onChange={(e) => setMinRating(+e.target.value)}
          className="w-full"
        />
        <div className="flex items-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className={`h-5 w-5 ${star <= minRating ? 'text-yellow-400' : 'text-gray-300'}`}>
              ★
            </span>
          ))}
          <span className="ml-2">and up</span>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
