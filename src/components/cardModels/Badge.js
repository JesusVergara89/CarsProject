import React from "react";

const Badge = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden relative">
      <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
        20% OFF
      </span>
      <img
        className="w-full h-48 object-cover"
        src="https://ss632.liverpool.com.mx/sm/1163571341.jpg"
        alt="Product"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-700">Product Name</h3>
        <p className="text-gray-500 mt-2 line-through">$30.00</p>
        <p className="text-green-600 mt-1">$24.00</p>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Badge;
