import { configureStore } from "@reduxjs/toolkit";
import crudSlice from "./slices/crudSlice";
import cartSlice from "./slices/cartSlice";

export default configureStore({
  reducer: {
    crud: crudSlice,
    cart: cartSlice,
  },
});
