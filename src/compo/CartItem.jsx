import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { toast } from "react-hot-toast";
import { remove } from '../redux/slices/CartSlice';
import { Link } from 'react-router-dom';

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex gap-4 items-center bg-white shadow-md rounded-lg p-4 mb-4">
      {/* Product Image */}
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-between flex-grow">
        <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>

        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-bold text-green-600">${item.price}</p>
          
          <div className="flex gap-2">
            {/* Product Details Button */}
            <Link to={`/product/${item.id}`}>
              <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded">
                View Details
              </button>
            </Link>

            {/* Remove from Cart Button */}
            <button
              onClick={removeFromCart}
              className="text-red-500 hover:text-red-700 transition-all duration-200"
              title="Remove Item"
            >
              <MdDelete size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
