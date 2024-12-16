import React from "react";

const Minimalism = () => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden group">
      <div className="relative">
        <img
          className="w-full h-48 object-cover group-hover:opacity-75 transition duration-200"
          src="https://ss632.liverpool.com.mx/sm/1163571341.jpg"
          alt="Product"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition duration-200"></div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-700 group-hover:text-blue-500 transition duration-200">
          Product Name
        </h3>
        <p className="text-gray-500 mt-2">$40.00</p>
      </div>
    </div>
  );
};

export default Minimalism;
