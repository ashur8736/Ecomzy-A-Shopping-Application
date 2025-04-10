import React from "react";
import Navbar from "./compo/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductDetail from "./compo/ProductDetails";
import { useAuth } from "../src/compo/AuthContext";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <div className="bg-slate-900">
        <Navbar />
      </div>

      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </>
        ) : (
          <Route path="*" element={<Login />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
