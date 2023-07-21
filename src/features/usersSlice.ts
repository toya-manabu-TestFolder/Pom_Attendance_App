import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:8000/";

export const getUsers: any = createAsyncThunk("users/getUsers", async () => {
  return await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      console.log(action);
      state.users = action.payload;
    },
  },
  reducers: {},
});

export default usersSlice.reducer;
