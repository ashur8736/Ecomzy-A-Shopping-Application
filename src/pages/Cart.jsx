import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from "../compo/CartItem";
import { clearCart } from '../redux/slices/CartSlice';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [totalAmount, setTotalAmount] = useState(0);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const total = cart.reduce((acc, curr) => {
      const price = parseFloat(curr.price) || 0;
      const quantity = curr.quantity ? parseInt(curr.quantity) : 1;
      return acc + price * quantity;
    }, 0);
    setTotalAmount(total);
  }, [cart]);

  const handleCheckout = () => {
    dispatch(clearCart());
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <div className="flex flex-col h-auto px-4 sm:px-6 mt-10 mb-10 justify-center items-center relative">

      {/* Toast Message */}
      {showToast && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg 
                        transition-all duration-300 z-50 text-base sm:text-lg font-semibold text-center">
          Order placed successfully!
        </div>
      )}

      {/* Cart Content */}
      {cart.length > 0 ? (
        <div className="w-full sm:max-w-md bg-white rounded-xl shadow-md">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center pt-4">Your Cart</h1>

          {/* Cart Items */}
          {cart.map((item, index) => (
            <div key={item.id} className="border-b border-gray-200 px-4 py-3">
              <CartItem item={item} itemIndex={index} />
              <div className="flex justify-between mt-2 text-xs sm:text-sm text-gray-600">
                <p>Quantity: {item.quantity || 1}</p>
                <p>Price: ${item.price}</p>
              </div>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="px-4 py-4">
            <div className="flex justify-between text-sm sm:text-base mb-3 font-semibold">
              <p>Total Items: {cart.length}</p>
              <p>Total Amount: ${totalAmount.toFixed(2)}</p>
            </div>
            <button
              onClick={handleCheckout}
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg w-full text-sm sm:text-base"
            >
              Check out Now
            </button>
          </div>
        </div>
      ) : (
        // Empty Cart Message
        <div className="w-full sm:max-w-md p-6 bg-white rounded shadow-md text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded text-sm sm:text-base">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
