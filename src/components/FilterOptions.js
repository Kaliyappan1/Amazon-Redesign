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
    <div className="filter-container">
      <h2 className="filter-title">Filters</h2>
      
      <div className="filter-section">
        <h3 className="filter-subtitle">Category</h3>
        <select
          className="filter-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Personal Care">Personal Care</option>
        </select>
      </div>

      <div className="filter-section">
        <h3 className="filter-subtitle">Brand</h3>
        <select
          className="filter-select"
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

      <div className="filter-section">
        <h3 className="filter-subtitle">Sort By</h3>
        <select
          className="filter-select"
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

      <div className="filter-section">
        <h3 className="filter-subtitle">Price Range</h3>
        <div className="price-display">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <input
          type="range"
          min={0}
          max={1000}
          step={10}
          value={priceRange[0]}
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
          className="price-range"
        />
        <input
          type="range"
          min={0}
          max={1000}
          step={10}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          className="price-range"
        />
      </div>

      <div className="filter-section">
        <h3 className="filter-subtitle">Min Rating</h3>
        <input
          type="range"
          min={0}
          max={5}
          step={0.5}
          value={minRating}
          onChange={(e) => setMinRating(+e.target.value)}
          className="rating-range"
        />
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className={`star ${star <= minRating ? 'active' : ''}`}>
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
