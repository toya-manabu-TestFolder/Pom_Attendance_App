import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const sendInputData: any = createAsyncThunk(
  "auth/sendInputData",
  async (data) => {
    const response = await axios.post(`${API_URL}authApi/`, data, {
      // ↓cookieの送受信を許可する。
      withCredentials: true,
    });
    console.log(response);
    // response.dataとすることで、返ってきた値をreducerでaction.payloadとして扱える。
    return response.data;
  }
);

export const LogOut: any = createAsyncThunk("auth/LogOut", async () => {
  await axios.get(`${API_URL}logout`, {
    // ↓cookieの送受信を許可する。
    withCredentials: true,
  });
  // response.dataとすることで、返ってきた値をreducerでaction.payloadとして扱える。
});

type Props = {
  auth: {
    authData: {
      mailaddress: string;
      password: string;
    };
    userName: string;
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
    userName: "",
    Error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(sendInputData.fulfilled, (state, action) => {
      if (action.payload.status === 400) {
        state.Error = "ログイン情報が間違っています！！";
      } else {
        state.userName = action.payload.user;
      }
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
export const userName = (state: Props) => state.auth.userName;
export const { inputMail, inputPass } = authSlice.actions;
export default authSlice.reducer;
