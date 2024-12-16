import React from "react";

const Description = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col sm:flex-row">
       
        <img
          className="w-full h-48 sm:w-1/3 sm:h-48 object-contain"
          src="https://ss632.liverpool.com.mx/sm/1163571341.jpg"
          alt="Product"
        />
        
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">
              Product Name
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              This is a short description of the product, highlighting its
              features.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-green-600 font-bold">$50.00</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
