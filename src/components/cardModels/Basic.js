import React from "react";

const Basic = () => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://ss632.liverpool.com.mx/sm/1163571341.jpg"
        alt="Product"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-700">Product Name</h3>
        <p className="text-gray-500 mt-2">$25.00</p>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Basic;
