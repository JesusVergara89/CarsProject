import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updatePost } from "../../store/slices/crudSlice";

const UpdateForm = ({ id, setUpdate }) => {
  const dispatch = useDispatch();

  const resetData = {
    description: "",
    date: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    dispatch(updatePost({ data, id }));
    reset(resetData);
    setUpdate(false);
  };

  return (
    <>
    <form
      className="w-1/2 h-2/4 bg-white shadow-md rounded-lg p-4"
      onSubmit={handleSubmit(submit)}
    >
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
    <button
          className="w-fit px-3 py-1 mb-2 border rounded-md text-2xl text-cyan-100 font-bold bg-slate-600"
          onClick={() => setUpdate(false)}
        >
           <i className='bx bxs-message-square-x'></i>
        </button> 
    </>
  );
};

export default UpdateForm;
