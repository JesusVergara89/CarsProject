import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "../store/slices/crudSlice";
import SingleCard from "./SingleCard";

const Card = () => {
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
      <SingleCard post={post} key={index} />
    ));
  } else if (status === "failed") {
    content = <h2 className="text-slate-400 text-2xl font-bold">{error}</h2>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-3 bg-gray-100 sm:flex-row sm:flex-wrap">
      {content}
    </div>
  );
};

export default Card;
