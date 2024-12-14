import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL =
  "https://script.google.com/macros/s/AKfycby0UcJnZfj6RWDVHeEFU3wiM2K_Lx8d9n-ZFU_T7BkOpQiRbGAYild9vNXPsMSC7xE3/exec?action=data";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(URL);
  return response.data;
});

export const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, payload) => {
        state.posts = payload;
        state.status = "success";
      })
      .addCase(fetchPosts.rejected, (state, error) => {
        state.error = "Failed";
        state.error = error.message;
      });
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export default crudSlice.reducer;
