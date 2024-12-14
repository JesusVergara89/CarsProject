import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = "https://script.google.com/macros/s/AKfycby0UcJnZfj6RWDVHeEFU3wiM2K_Lx8d9n-ZFU_T7BkOpQiRbGAYild9vNXPsMSC7xE3/exec?action=data";

const initialState = {
    posts: [],
    status: "idle",
    error: null,
};



export const crudSlice = createSlice({
    name: 'crud',
    initialState: undefined,
    reducers: {
        
    }
})

export default crudSlice.reducer;