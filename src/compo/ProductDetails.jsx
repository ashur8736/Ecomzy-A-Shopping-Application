import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // Fetch product details from FakeStore API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to load product", err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="text-center mt-10 text-lg">Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-10 p-8 justify-center items-center min-h-screen bg-gray-100">
      {/* Product Image */}
      <div className="max-w-sm w-full">
        <img src={product.image} alt={product.title} className="w-full h-auto object-contain rounded-lg shadow-md" />
      </div>

      {/* Product Details */}
      <div className="max-w-lg space-y-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <p className="text-xl font-semibold text-green-600">${product.price}</p>
        <p className="text-sm text-gray-500">Category: {product.category}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
