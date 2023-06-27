import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const incrementAsync = createAsyncThunk("counter/fetchCount");

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export default counterSlice.reducer;
