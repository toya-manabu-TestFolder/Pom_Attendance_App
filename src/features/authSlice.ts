import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const sendInputData: any = createAsyncThunk(
  "auth/sendInputData",
  async (data) => {
    const response = await axios.post(`${API_URL}authApi/`, data);
    // response.dataとすることで、返ってきた値をreducerでaction.payloadとして扱える。
    return response.data;
  }
);

type Props = {
  auth: {
    authData: {
      mailaddress: string;
      password: string;
    };
    loginError: boolean;
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: {
      mailaddress: "",
      password: "",
    },
    loginError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(sendInputData.fulfilled, (state, action) => {
      if (!action.payload) state.loginError = true;
    });
  },
  reducers: {
    inputMail: (state, action) => {
      state.authData.mailaddress = action.payload;
    },
    inputPass: (state, action) => {
      state.authData.password = action.payload;
    },
  },
});
export const inputValues = (state: Props) => state.auth.authData;
export const loginError = (state: Props) => state.auth.loginError;
export const { inputMail, inputPass } = authSlice.actions;
export default authSlice.reducer;
