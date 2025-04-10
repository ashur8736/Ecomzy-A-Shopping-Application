import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/slices/CartSlice";
import { Link } from 'react-router-dom';

export const Product = ({ post }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed");
  };

  return (
    <div className='w-full flex flex-col items-center justify-between p-3 mt-4 rounded-xl shadow-md border hover:scale-[1.03] transition-transform duration-300 ease-in bg-white'>

      {/* Title */}
      <p className='text-gray-800 font-semibold text-sm text-center mt-1 truncate w-full'>
        {post.title}
      </p>

      {/* Description */}
      <p className='text-gray-500 font-normal text-xs text-center mt-1 mb-2 px-2'>
        {post.description.split(" ").slice(0, 10).join(" ") + "..."}
      </p>

      {/* Image */}
      <div className='w-full h-32 flex items-center justify-center'>
        <img src={post.image} alt="img" className='h-full object-contain' />
      </div>

      {/* Price + Buttons */}
      <div className='flex flex-col items-center gap-3 mt-3 w-full'>
        <p className='text-green-600 font-bold text-sm'>${post.price}</p>

        <div className='flex flex-col gap-2 sm:flex-row sm:gap-2 w-full justify-center'>
          {
            cart.some((p) => p.id === post.id) ? (
              <button
                onClick={removeFromCart}
                className='w-full sm:w-auto text-black border border-black rounded-full font-semibold text-xs py-2 px-4 uppercase hover:bg-black hover:text-white transition'
              >
                Remove Item
              </button>
            ) : (
              <button
                onClick={addToCart}
                className='w-full sm:w-auto text-black border border-black rounded-full font-semibold text-xs py-2 px-4 uppercase hover:bg-black hover:text-white transition'
              >
                Add to Cart
              </button>
            )
          }

          <Link to={`/product/${post.id}`} className='w-full sm:w-auto'>
            <button className='w-full text-black border border-black rounded-full font-semibold text-xs py-2 px-4 uppercase hover:bg-black hover:text-white transition'>
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
