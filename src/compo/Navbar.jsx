import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      logout();
    }
    navigate('/login');
    setMenuOpen(false);
  };

  const linkClass =
    'text-slate-300 hover:text-white transition duration-200 text-base';

  return (
    <header className="bg-gray-900 text-white w-full shadow-md">
      <nav className="flex justify-between items-center px-4 py-3 md:px-10 max-w-6xl mx-auto">
        {/* Brand */}
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-transparent bg-clip-text drop-shadow-md">
            Ecomzy
          </h1>
        </NavLink>

        {/* Hamburger - Mobile */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Nav Items - Desktop */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <NavLink to="/" className={linkClass}>Home</NavLink>

          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-2xl hover:text-white transition" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-green-600 text-xs w-5 h-5 flex justify-center items-center rounded-full text-white animate-bounce">
                {cart.length}
              </span>
            )}
          </NavLink>

          <button
            onClick={handleAuthClick}
            className="bg-blue-600 px-4 py-2 rounded text-sm hover:bg-blue-700 transition"
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col md:hidden px-4 pt-2 pb-4 space-y-4 bg-gray-800 text-center">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/cart" onClick={() => setMenuOpen(false)} className="relative flex justify-center">
            <FaShoppingCart className="text-xl" />
            {cart.length > 0 && (
              <span className="ml-1 bg-green-600 text-xs w-5 h-5 flex justify-center items-center rounded-full text-white animate-bounce">
                {cart.length}
              </span>
            )}
          </NavLink>

          <button
            onClick={handleAuthClick}
            className="bg-blue-600 px-4 py-2 rounded text-sm hover:bg-blue-700 transition"
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
