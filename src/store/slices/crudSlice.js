import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const URL =
  "https://script.google.com/macros/s/AKfycbzCz9sCdn9CCoWdITrMuC5eqkMAcUBnAWa_oy-pWUaAB2bQBvyQEnO9LIQY7GlLd-Z6/exec?action=data";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(URL);
  return response.data;
});

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({data, id}) => {
    const getConfig = () => ({
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const URL_UPDATE = `https://api.sheetbest.com/sheets/d3e3e88f-8595-4b5d-86b5-363903e8c787/id/*${id}*`;
    await axios.patch(URL_UPDATE, data, getConfig());
    return { id, ...data };
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({data}) => {
    let newData = {id: nanoid(), ...data};
    const getConfig = () => ({
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const URL_POST = `https://api.sheetbest.com/sheets/d3e3e88f-8595-4b5d-86b5-363903e8c787`;
    await axios.post(URL_POST, newData, getConfig());
    return newData;
  }
);

export const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.posts = payload;
        state.status = "success";
      })
      .addCase(fetchPosts.rejected, (state, { error }) => {
        state.status = "failed";
        state.error = error.message;
      })
      .addCase(updatePost.fulfilled, (state, { payload }) => {
        const index = state.posts.findIndex((post) => post.id === payload.id);
        if (index !== -1) {
          state.posts[index] = { ...state.posts[index], ...payload };
        }
      })
      .addCase(createPost.fulfilled, (state, { payload }) => {
        state.posts.push(payload);
      });
  },
});

export const selectAllPosts = (state) => state.crud.posts;
export const getPostsStatus = (state) => state.crud.status;
export const getPostsError = (state) => state.crud.error;

export default crudSlice.reducer;
