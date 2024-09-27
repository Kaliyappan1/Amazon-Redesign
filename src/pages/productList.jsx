
import React, { useState, useEffect } from 'react';
import Header from '../pages/header';
import FilterOptions from '../components/FilterOptions';
import ProductCard from '../components/ProductCard';
// Mock product data
const allProducts = [
  {
    id: 1,
    name: 'TechMaster Laptop',
    category: 'Electronics',
    brand: 'TechMaster',
    price: 999.99,
    discount: 10,
    rating: 4.5,
    reviews: 120,
    date: '2023-01-01',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'FitTech Smartwatch',
    category: 'Electronics',
    brand: 'FitTech',
    price: 199.99,
    discount: 0,
    rating: 4.0,
    reviews: 60,
    date: '2023-05-10',
    image: 'https://images.unsplash.com/photo-1523475496153-3d6cc0f0bf19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'PowerUp Portable Charger',
    category: 'Electronics',
    brand: 'PowerUp',
    price: 49.99,
    discount: 5,
    rating: 4.8,
    reviews: 200,
    date: '2023-03-15',
    image: 'https://images.unsplash.com/photo-1525858907241-d230b66fb9fa?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'SecureView Home Camera',
    category: 'Electronics',
    brand: 'SecureView',
    price: 149.99,
    discount: 15,
    rating: 4.2,
    reviews: 90,
    date: '2023-07-20',
    image: 'https://plus.unsplash.com/premium_photo-1725767834338-810d439c8307?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'DentalTech Electric Toothbrush',
    category: 'Personal Care',
    brand: 'DentalTech',
    price: 89.99,
    discount: 0,
    rating: 4.6,
    reviews: 45,
    date: '2023-08-12',
    image: 'https://images.unsplash.com/photo-1597961509090-45101abfa9cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    name: 'Wireless Earbuds',
    category: 'Electronics',
    brand: 'SoundWave',
    price: 79.99,
    discount: 10,
    rating: 4.4,
    reviews: 85,
    date: '2023-06-05',
    image: 'https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 7,
    name: 'AirPurify Smart Air Purifier',
    category: 'Home Appliances',
    brand: 'AirPure',
    price: 199.99,
    discount: 20,
    rating: 4.7,
    reviews: 110,
    date: '2023-04-10',
    image: 'https://images.unsplash.com/photo-1632928274371-878938e4d825?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 8,
    name: 'Noise Cancelling Headphones',
    category: 'Electronics',
    brand: 'SoundBlock',
    price: 299.99,
    discount: 15,
    rating: 4.9,
    reviews: 150,
    date: '2023-02-14',
    image: 'https://images.unsplash.com/photo-1612478120679-5b7412e15f84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 9,
    name: 'Smart TV 4K Ultra HD',
    category: 'Electronics',
    brand: 'Visionary',
    price: 499.99,
    discount: 5,
    rating: 4.8,
    reviews: 300,
    date: '2023-01-15',
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10,
    name: 'UltraSlim Projector',
    category: 'Electronics',
    brand: 'ProjectorPro',
    price: 399.99,
    discount: 10,
    rating: 4.6,
    reviews: 75,
    date: '2023-03-25',
    image: 'https://images.unsplash.com/photo-1528395874238-34ebe249b3f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 11,
    name: 'Gaming Mouse Pro',
    category: 'Electronics',
    brand: 'GameX',
    price: 69.99,
    discount: 5,
    rating: 4.3,
    reviews: 50,
    date: '2023-02-20',
    image: 'https://images.unsplash.com/photo-1620332326501-584c3d6bf607?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 12,
    name: 'Mechanical Keyboard RGB',
    category: 'Electronics',
    brand: 'KeyMaster',
    price: 129.99,
    discount: 15,
    rating: 4.6,
    reviews: 35,
    date: '2023-01-30',
    image: 'https://images.unsplash.com/photo-1664813398384-035636e083f9?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 13,
    name: '4K Drone Camera',
    category: 'Electronics',
    brand: 'SkyView',
    price: 799.99,
    discount: 10,
    rating: 4.7,
    reviews: 100,
    date: '2023-08-05',
    image: 'https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 14,
    name: 'Smart Refrigerator 600L',
    category: 'Home Appliances',
    brand: 'CoolMax',
    price: 1199.99,
    discount: 20,
    rating: 4.5,
    reviews: 60,
    date: '2023-04-25',
    image: 'https://images.unsplash.com/photo-1716193696093-9c54b6a290e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 15,
    name: 'Premium Coffee Maker',
    category: 'Home Appliances',
    brand: 'BrewMaster',
    price: 149.99,
    discount: 0,
    rating: 4.8,
    reviews: 80,
    date: '2023-06-15',
    image: 'https://images.unsplash.com/photo-1628195441391-e444b7a0516c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 16,
    name: 'Luxury Massage Chair',
    category: 'Furniture',
    brand: 'ComfortZone',
    price: 1299.99,
    discount: 15,
    rating: 4.9,
    reviews: 25,
    date: '2023-05-20',
    image: 'https://plus.unsplash.com/premium_photo-1683141507095-7a8e587663aa?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 17,
    name: 'Ergonomic Office Chair',
    category: 'Furniture',
    brand: 'OfficePro',
    price: 249.99,
    discount: 10,
    rating: 4.5,
    reviews: 40,
    date: '2023-02-05',
    image: 'https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 18,
    name: 'Gaming Desktop PC',
    category: 'Electronics',
    brand: 'GameMaster',
    price: 1499.99,
    discount: 0,
    rating: 4.8,
    reviews: 110,
    date: '2023-03-30',
    image: 'https://images.unsplash.com/photo-1701960804409-ca945c8f1286?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 19,
    name: 'High-End DSLR Camera',
    category: 'Electronics',
    brand: 'CapturePro',
    price: 2499.99,
    discount: 5,
    rating: 4.9,
    reviews: 80,
    date: '2023-02-25',
    image: 'https://images.unsplash.com/photo-1625361060573-cf704b979b18?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 20,
    name: 'Luxury Electric Fireplace',
    category: 'Home Decor',
    brand: 'FireGlow',
    price: 999.99,
    discount: 10,
    rating: 4.6,
    reviews: 65,
    date: '2023-07-15',
    image: 'https://images.unsplash.com/photo-1586299576722-e14abcdcfcb3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 21,
    name: 'Smart Security System',
    category: 'Home Security',
    brand: 'SecureHome',
    price: 349.99,
    discount: 20,
    rating: 4.7,
    reviews: 70,
    date: '2023-08-25',
    image: 'https://plus.unsplash.com/premium_photo-1681400654156-92eb27e62f0c?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];


const LoginModal = ({ onClose }) => (
  <div className="modal">
    <h2>Login</h2>
    {/* Your login form here */}
    <button onClick={onClose}>Close</button>
  </div>
);

const SignupModal = ({ onClose }) => (
  <div className="modal">
    <h2>Signup</h2>
    {/* Your signup form here */}
    <button onClick={onClose}>Close</button>
  </div>
);

const ProductList = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [minRating, setMinRating] = useState(0);
  const [sortOption, setSortOption] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [toast, setToast] = useState({ message: '', visible: false });
  const [showLoginModal, setShowLoginModal] = useState(false); // State for login modal
  const [showSignupModal, setShowSignupModal] = useState(false); // State for signup modal

  // Filter products based on search term and other criteria
  useEffect(() => {
    const result = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      (selectedBrand === 'All' || product.brand === selectedBrand) &&
      product.price >= priceRange[0] && product.price <= priceRange[1] &&
      product.rating >= minRating
    );

    // Sort products based on selected option
    switch (sortOption) {
      case 'priceLowToHigh':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'customerReviews':
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'newestArrivals':
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, selectedBrand, priceRange, minRating, sortOption]);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (productName) => {
    showToast(`${productName} has been added to your cart.`);
  };

  const showToast = (message) => {
    setToast({ message, visible: true });
    setTimeout(() => {
      setToast({ message: '', visible: false });
    }, 3000);
  };

  // Function to handle account click
  const handleAccountClick = (type) => {
    if (type === 'login') {
      setShowLoginModal(true);
    } else if (type === 'signup') {
      setShowSignupModal(true);
    }
  };

  return (
    <div>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onAccountClick={handleAccountClick} // Pass account click handler
      />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Product List</h1>
        <FilterOptions
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          sortOption={sortOption}
          setSortOption={setSortOption}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          minRating={minRating}
          setMinRating={setMinRating}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              toggleFavorite={toggleFavorite}
              addToCart={addToCart}
              isFavorite={favorites.includes(product.id)}
            />
          ))}
        </div>
        {toast.visible && <div className="toast">{toast.message}</div>}
      </div>
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
      {showSignupModal && <SignupModal onClose={() => setShowSignupModal(false)} />}
    </div>
  );
};

export default ProductList;