import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// adfasdfasdf

const API_URL = import.meta.env.VITE_API_URL;

export const sendInputData: any = createAsyncThunk(
  "auth/sendInputData",
  async (data) => {
    const response = await axios.post(`${API_URL}authApi/`, data, {
      // ↓cookieの送受信を許可する。
      withCredentials: true,
    });
    // response.dataとすることで、返ってきた値をreducerでaction.payloadとして扱える。
    return response.data;
  }
);

export const LogOut: any = createAsyncThunk("auth/LogOut", async () => {
  const result = await axios.get(`${API_URL}authApi/logout`, {
    withCredentials: true,
  });
  return result.status;
});

type Props = {
  auth: {
    authData: {
      mailaddress: string;
      password: string;
    };
    LogOutObj: {
      isModal: boolean;
    };
    userName: string;
    ErrorObj: {
      isError: boolean;
      message: string;
    };
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: {
      mailaddress: "",
      password: "",
    },
    LogOutObj: {
      isModal: false,
    },
    userName: "",
    ErrorObj: {
      isError: false,
      message: "",
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendInputData.fulfilled, (state, action) => {
      if (action.payload.status === 400) {
        state.ErrorObj.isError = true;
        state.ErrorObj.message = "ログイン情報が間違っています！！";
      } else {
        state.ErrorObj.isError = false;
        state.userName = action.payload.user;
        state.authData.mailaddress = "";
        state.authData.password = "";
      }
    });
    builder.addCase(LogOut.fulfilled, (state, action) => {
      state.LogOutObj.isModal = false;
      if (action.payload !== 200) {
        state.ErrorObj.isError = true;
        state.ErrorObj.message = "通信エラーが発生しました！！";
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
    toggleLogoutModal: (state, action) => {
      state.LogOutObj.isModal = action.payload;
    },
    closeErrorModal: (state) => {
      state.ErrorObj.isError = false;
      state.ErrorObj.message = "";
    },
  },
});
export const AuthState = (state: Props) => state.auth;
export const AuthReducers = authSlice.actions;
export default authSlice.reducer;
