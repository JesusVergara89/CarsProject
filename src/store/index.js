import { configureStore } from "@reduxjs/toolkit";
import crudSlice from "./slices/crudSlice";

export default configureStore({
  reducer: {
    crud: crudSlice,
  },
});
