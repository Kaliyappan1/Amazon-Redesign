import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';

const ProductCard = ({ product, toggleFavorite, addToCart, isFavorite }) => {
  return (
    <div key={product.id} className="border rounded-lg overflow-hidden shadow-md flex flex-col">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        {product.discount > 0 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded-md">-{product.discount}%</span>
        )}
        <button 
          className="absolute top-2 left-2"
          onClick={() => toggleFavorite(product.id)}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? 'text-red-500' : 'text-gray-300'}`} />
        </button>
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
          ))}
          <span className="ml-2 text-gray-500">({product.reviews} reviews)</span>
        </div>
        <p className="text-gray-600">${(product.price * (1 - product.discount / 100)).toFixed(2)}</p>
        <button 
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md"
          onClick={() => addToCart(product.name)}
        >
          <ShoppingCart className="inline-block mr-2" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
