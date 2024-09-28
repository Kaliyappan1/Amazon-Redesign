import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./pages/footer"; // Ensure correct import case
import ProductList from "./pages/productList"; // Ensure correct import case
import UserAccount from "./pages/userAccount"; // Ensure correct import case

function App() {
  return (
    <Router>
      <div>
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/account" element={<UserAccount />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
