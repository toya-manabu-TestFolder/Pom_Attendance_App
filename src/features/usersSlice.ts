import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers: any = createAsyncThunk("users/getUsers", async () => {
  return await axios
    .get(`${import.meta.env.VITE_API_URL}api/get`)
    .then((res: any) => {
      // apiから返ってきているのはもうjson形式になっている。
      return res.data;
    });
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
  reducers: {},
});

export default usersSlice.reducer;
