// App.js
import Footer from "./pages/footer";
import ProductList from "./pages/productList";
import ProductPage from "./pages/productPage";
import UserAccount from "./pages/userAccount";
import { useState, useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true); // Set logged in state if user exists in local storage
    }
  }, []);


  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false); // Hide login form after successful login
  };

  return (
    <div>
      
      {showLogin ? (
        <UserAccount onLoginSuccess={handleLoginSuccess} />
      ) : (
        <ProductList />
      )}
      <ProductPage/>
      <Footer />
    </div>
  );
}

export default App;
