import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "../store/slices/crudSlice";

const TestRequestDataComponent = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const status = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  let content;
  if (status === "loading") {
    content = <h2 className="text-slate-400 text-2xl font-bold">Loading...</h2>;
  } else if (status === "success") {
    content = posts.map((post, index) => (
      <div key={index} className="w-1/2 bg-white shadow-md rounded-lg p-4">
        <h1 className="w-fit px-3 py-1 mb-2 border rounded-md text-2xl text-cyan-100 font-bold bg-slate-600">
          {post.id}
        </h1>
        <img src={post.image} alt={post.title} className="w-full aspect-auto" />
        <h2 className="text-xl font-bold">{post.date}</h2>
        <p className="text-slate-400">{post.description}</p>
      </div>
    ));
  } else if (status === "failed") {
    content = <h2 className="text-slate-400 text-2xl font-bold">{error}</h2>;
  }

  return (
    <div className="w-screen h-screen bg-gray-100 sm:flex sm:flex-wrap flex flex-col items-center justify-center gap-3">
      {content}
    </div>
  );
};

export default TestRequestDataComponent;
