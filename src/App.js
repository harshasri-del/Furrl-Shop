import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import WishList from "./components/WishList";
import Cart from "./components/Cart";
import ProductItemDetail from "./components/ProductItemDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductItemDetail />} />
      </Routes>
    </div>
  );
}

export default App;
