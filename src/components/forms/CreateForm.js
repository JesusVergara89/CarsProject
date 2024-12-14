import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createPost } from "../../store/slices/crudSlice";

const CreateForm = () => {
 const dispatch = useDispatch();
  const resetData = {
    image: "",
    description: "",
    date: "",
  };
  //end reset data
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //end useForm
  const submit = (data) => {
    dispatch(createPost({data}));
    reset(resetData);
  };

  return (
    <form className="w-3/5 h-2/5 bg-white shadow-md rounded-lg p-4" onSubmit={handleSubmit(submit)}>
      <input
        className={`w-full h-10 px-3 py-1 mb-2 border rounded-md text-2xl text-cyan-100 font-bold bg-slate-600 ${
          errors.image ? "border-red-500" : ""
        }`}
        type="text"
        placeholder="Image URL"
        {...register("image", { required: "Image URL is required" })}
      />
      {errors.image && (
        <p className="text-red-500 text-sm">{errors.image.message}</p>
      )}

      <input
        className={`w-full h-10 px-3 py-1 mb-2 border rounded-md text-2xl text-cyan-100 font-bold bg-slate-600 ${
          errors.description ? "border-red-500" : ""
        }`}
        type="text"
        placeholder="Description"
        {...register("description", { required: "Description is required" })}
      />
      {errors.description && (
        <p className="text-red-500 text-sm">{errors.description.message}</p>
      )}

      <input
        className={`w-full h-10 px-3 py-1 mb-2 border rounded-md text-2xl text-cyan-100 font-bold bg-slate-600 ${
          errors.date ? "border-red-500" : ""
        }`}
        type="text"
        placeholder="Date"
        {...register("date", { required: "Date is required" })}
      />
      {errors.date && (
        <p className="text-red-500 text-sm">{errors.date.message}</p>
      )}

      <button
        className="w-full h-10 px-3 py-1 mb-2 border rounded-md text-2xl text-cyan-100 font-bold bg-slate-600"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateForm;
