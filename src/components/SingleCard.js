import React, { useState } from "react";
import UpdateForm from "./forms/UpdateForm";

const SingleCard = ({ post }) => {
  const [update, setUpdate] = useState(false);

  return update ? (
    <UpdateForm id={post.id} setUpdate={setUpdate} />
  ) : (
    <div className="w-1/2 h-1/2 sm:h-3/5 bg-white shadow-md rounded-lg p-4">
      <div className="flex flex-wrap justify-center items-center gap-2">
        <button
          className="w-fit px-3 py-1 mb-2 border rounded-md text-2xl text-cyan-100 font-bold bg-slate-600"
          onClick={() => setUpdate(!update)}
        >
          <i className="bx bx-edit-alt"></i>
        </button>        
      </div>

      <h1 className="w-fit px-3 py-1 mb-2 border rounded-md text-2xl text-cyan-100 font-bold bg-slate-600">
        {post.id.slice(0, 4)}
      </h1>
      <img src={post.image} alt={post.title} className="w-full aspect-auto" />
      <h2 className="text-xl font-bold">{post.date}</h2>
      <p className="text-slate-400 text-sm sm:text-base">
        {post.description.slice(0, 270)}...
      </p>
    </div>
  );
};

export default SingleCard;
