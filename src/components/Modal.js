// Modal.js
import React from 'react';

const Modal = ({ product, onClose }) => {
  if (!product) return null; // Don't render if no product is provided

  // Function to handle overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close the modal
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg p-4 w-11/12 max-w-[70%] flex"> {/* Use flex layout */}
        
        {/* Left side for image */}
        <div className="w-[400px] h-[400px] flex-shrink-0">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-md" />
        </div>

        {/* Right side for details */}
        <div className="flex-grow pl-4"> {/* Added padding to the left */}
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600 font-semibold">
            Price: ${(product.price * (1 - product.discount / 100)).toFixed(2)}
          </p>
          <p className="text-gray-600">Rating: {product.rating} ({product.reviews} reviews)</p>

          {/* Product Description */}
          <h3 className="mt-4 font-semibold">Description</h3>
          <p>{product.description}</p>

          {/* Product Specifications */}
          <h3 className="mt-4 font-semibold">Specifications</h3>
          <ul className="list-disc ml-5">
            <li>Weight: {product.specifications.weight}</li>
            <li>Dimensions: {product.specifications.dimensions}</li>
            <li>Material: {product.specifications.material}</li>
          </ul>

          {/* Product Features */}
          <h3 className="mt-4 font-semibold">Features</h3>
          <ul className="list-disc ml-5">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <button onClick={onClose} className="mt-4  bg-gray-600 text-white py-2 px-10 rounded-md">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
