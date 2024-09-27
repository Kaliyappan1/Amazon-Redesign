'use client'

import { useState } from 'react'
import { Star, ShoppingCart, Heart, Check } from 'lucide-react'

// Mock product data
const product = {
  id: 1,
  name: 'Premium Wireless Earbuds',
  price: 129.99,
  description: 'Experience crystal-clear audio with our Premium Wireless Earbuds. Featuring advanced noise-cancellation technology, a comfortable fit, and long-lasting battery life, these earbuds are perfect for music lovers and professionals alike.',
  rating: 4.5,
  reviews: 128,
  images: [
    '/placeholder.svg?height=400&width=400&text=Image%201',
    '/placeholder.svg?height=400&width=400&text=Image%202',
    '/placeholder.svg?height=400&width=400&text=Image%203',
  ],
  specifications: [
    { name: 'Battery Life', value: 'Up to 8 hours (earbuds) + 24 hours (charging case)' },
    { name: 'Connectivity', value: 'Bluetooth 5.0' },
    { name: 'Water Resistance', value: 'IPX4' },
    { name: 'Noise Cancellation', value: 'Active Noise Cancellation (ANC)' },
  ],
  features: [
    'True wireless stereo technology',
    'Touch controls for easy operation',
    'Voice assistant compatibility',
    'Customizable EQ with companion app',
  ],
  relatedProducts: [
    { id: 2, name: 'Over-Ear Headphones', price: 199.99, image: '/placeholder.svg?height=100&width=100' },
    { id: 3, name: 'Portable Bluetooth Speaker', price: 79.99, image: '/placeholder.svg?height=100&width=100' },
  ]
}

export default function ProductPage() {
  const [mainImage, setMainImage] = useState(product.images[0])
  const [quantity, setQuantity] = useState(1)

  const addToCart = () => {
    alert(`${quantity} ${quantity > 1 ? 'items' : 'item'} added to your cart.`)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img src={mainImage} alt={product.name} className="w-full h-auto rounded-lg mb-4" />
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} - Image ${index + 1}`}
                className="w-20 h-20 rounded-md cursor-pointer border border-gray-300 hover:border-gray-500 transition"
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
            ))}
            <span className="ml-2 text-sm text-gray-600">({product.reviews} reviews)</span>
          </div>
          <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-6">{product.description}</p>
          <div className="flex items-center space-x-4 mb-6">
            <button className="border rounded px-4 py-2 hover:bg-gray-100" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <span>{quantity}</span>
            <button className="border rounded px-4 py-2 hover:bg-gray-100" onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <div className="flex space-x-4 mb-6">
            <button onClick={addToCart} className="flex-1 border rounded bg-blue-500 text-white px-4 py-2 hover:bg-blue-600">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </button>
            <button className="border rounded bg-transparent hover:bg-gray-100 p-2">
              <Heart className="h-4 w-4" />
            </button>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Specifications</h2>
            <ul className="space-y-2">
              {product.specifications.map((spec, index) => (
                <li key={index} className="flex justify-between">
                  <span className="font-semibold">{spec.name}:</span>
                  <span>{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Features</h2>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {product.relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="border rounded-lg p-4">
              <img src={relatedProduct.image} alt={relatedProduct.name} className="w-full h-32 object-cover rounded-md mb-2" />
              <h3 className="font-semibold">{relatedProduct.name}</h3>
              <p className="text-lg font-bold">${relatedProduct.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
