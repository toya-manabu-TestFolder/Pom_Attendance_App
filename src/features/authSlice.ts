import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const sendInputData: any = createAsyncThunk(
  "auth/sendInputData",
  async (data) => {
    try {
      const response = await axios.post(`${API_URL}authApi/`, data, {
        // ↓cookieの送受信を許可する。
        withCredentials: true,
      });
      // response.dataとすることで、返ってきた値をreducerでaction.payloadとして扱える。
      return response.status;
    } catch (error: any) {
      return error.response.status;
    }
  }
);

type Props = {
  auth: {
    authData: {
      mailaddress: string;
      password: string;
    };
    Error: string;
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: {
      mailaddress: "",
      password: "",
    },
    Error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(sendInputData.fulfilled, (state, action) => {
      action.payload === 400
        ? (state.Error = "ログイン情報が間違っています！！")
        : "";
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
export const loginError = (state: Props) => state.auth.Error;
export const { inputMail, inputPass } = authSlice.actions;
export default authSlice.reducer;
