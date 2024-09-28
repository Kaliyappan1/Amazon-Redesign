// ProductDetails.js
import React from 'react';

const ProductDetails = ({ product }) => {
  if (!product) return null;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-category">Category: {product.category}</p>
      <p className="product-brand">Brand: {product.brand}</p>
      <p className="product-price">Price: ${product.price.toFixed(2)}</p>
      <p className="product-rating">Rating: {product.rating} ★</p>
      <p className="product-reviews">Reviews: {product.reviews}</p>
      <p className="product-discount">Discount: {product.discount}%</p>
      <p className="product-date">Release Date: {new Date(product.date).toLocaleDateString()}</p>
    </div>
  );
};

export default ProductDetails;
