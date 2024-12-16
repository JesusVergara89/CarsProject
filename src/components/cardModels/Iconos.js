import React from "react";

const Iconos = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-48 object-contain"
          src="https://ss632.liverpool.com.mx/sm/1163571341.jpg"
          alt="Product"
        />
        <button className="absolute top-2 right-2 bg-gray-100 text-gray-700 rounded-full p-2 hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3.172 5a4 4 0 015.656 0l.172.172.172-.172a4 4 0 115.656 5.656L10 17.414 3.172 10.657a4 4 0 010-5.657z" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-700">Product Name</h3>
        <p className="text-gray-500 mt-2">$60.00</p>
        <div className="flex items-center justify-between mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Iconos;
