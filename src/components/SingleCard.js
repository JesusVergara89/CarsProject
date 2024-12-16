import React, { useState } from "react";
import UpdateForm from "./forms/UpdateForm";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/slices/cartSlice";

const SingleCard = ({ post }) => {

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };
  const [update, setUpdate] = useState(false);

  return update ? (
    <UpdateForm id={post.id} setUpdate={setUpdate} />
  ) : (
    <div className="max-w-sm w-full mx-auto sm:h-72 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col sm:flex-row">
 
        <img
          className="w-full h-48 sm:w-1/3 sm:h-48 object-contain"
          src={post.image}
          alt="Product"
        />
        <div className="p-4 flex flex-col justify-between">
        
          <button
            className="w-fit px-3 py-1 mb-2 border rounded-md text-2xl text-cyan-100 font-bold bg-slate-600"
            onClick={() => setUpdate(!update)}
          >
            <i className="bx bx-edit-alt"></i>
          </button>

          <div>
            <h3 className="text-lg font-semibold text-gray-700">{post.name}</h3>
            <p className="text-gray-500 mt-2 text-sm">
              {post.description.slice(0, 150)}...
            </p>
          </div>

          <div className="mt-4 flex items-center space-x-3">
            <label htmlFor="quantity" className="text-sm text-gray-600">
              Quantity:
            </label>
            <label htmlFor="quantity" className="text-sm text-gray-600">
              {post.quantity}
            </label>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 gap-4">
            <p className="text-green-600 font-bold text-lg">{`$${post.price}`}</p>
            <button onClick={() => handleAddToCart(post)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
