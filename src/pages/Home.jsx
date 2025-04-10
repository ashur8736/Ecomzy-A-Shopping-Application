import React, { useState, useEffect } from 'react';
import Spinner from "../compo/Spinner";
import { Product } from '../compo/Product';
import Footer from '../compo/Footer';
import { FaFilter } from "react-icons/fa";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilter, setShowFilter] = useState(false);

  const fetchProductData = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      setPosts(result);
    } catch (err) {
      console.error("SOMETHING WENT WRONG");
      setPosts([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const categories = ["All", ...new Set(posts.map((post) => post.category))];

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Filter Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Products</h2>
          <button
            className="flex items-center gap-2 text-sm border px-3 py-1 rounded hover:bg-gray-100"
            onClick={() => setShowFilter(!showFilter)}
          >
            <FaFilter /> Filter
          </button>
        </div>

        {showFilter && (
          <div className="bg-white p-4 mb-4 rounded-lg shadow-sm border">
            <h3 className="font-semibold mb-2 text-gray-700">Select Category</h3>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              {categories.map((cat) => (
                <label key={cat} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(cat)}
                  />
                  <span className="text-sm text-gray-800">{cat}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        {loading ? (
          <Spinner />
        ) : filteredPosts.length > 0 ? (
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 min-h-[80vh]">
            {filteredPosts.map((post) => (
              <Product key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[80vh]">
            <p>No Data Found</p>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Home;