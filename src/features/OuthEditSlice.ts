import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

type Props = {
  OuthEditSlice: {
    NowEmail: string;
    EmailObj: {
      Email: string;
      ConfirmationEmail: string;
      toggleModal: boolean;
      CompletMessage: string;
    };
    PassWordObj: {
      NowPassword: string;
      NewPassword: string;
      ConfirmationPassword: string;
      toggleModal: boolean;
      CompletMessage: string;
      NowPasswordErrorMsg: string;
      NewPasswordErrorMsg: string;
      ConfirmationPasswordErrorMsg: string;
    };
    NewEmailErrorMsg: string;
    ConfirmationEmailErrorMsg: string;
    CompletedObj: {
      isCompleted: boolean;
      message: string;
    };
    ErrorObj: {
      isError: boolean;
      message: string;
    };
  };
};

export const getEmail: any = createAsyncThunk(
  "homeSlice/getEmail",
  async () => {
    const result = await axios.get(`${API_URL}HomeApi/getEmail`, {
      withCredentials: true,
    });
    return result.data;
  }
);

export const ValidateChangeEmail: any = createAsyncThunk(
  "registar/ValidateChangeEmail",
  async (data) => {
    try {
      const res = await axios.post(
        `${API_URL}registarApi/ValidateChangeEmail`,
        data,
        {
          withCredentials: true,
        }
      );
      return res.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
);

export const ChangeEmail: any = createAsyncThunk(
  "registar/ChangeEmail",
  async (data) => {
    const res = await axios.post(
      `${API_URL}registarApi/ChangeEmail`,
      { data },
      {
        withCredentials: true,
      }
    );
    return res.data;
  }
);

export const ValidateChangePassword: any = createAsyncThunk(
  "registar/ValidateChangePassword",
  async (data) => {
    try {
      const res = await axios.post(
        `${API_URL}registarApi/ValidateChangePassword`,
        data,
        {
          withCredentials: true,
        }
      );
      return res.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
);

const OuthEditSlice = createSlice({
  name: "OuthEditSlice",
  initialState: {
    NowEmail: "",
    EmailObj: {
      Email: "",
      ConfirmationEmail: "",
      toggleModal: false,
    },
    PassWordObj: {
      NowPassword: "",
      NewPassword: "",
      ConfirmationPassword: "",
      toggleModal: false,
      NowPasswordErrorMsg: "",
      NewPasswordErrorMsg:
        "※ 8文字以上24文字以内の英小文字と数字を一文字以上含めてください。",
      ConfirmationPasswordErrorMsg: "",
    },
    NewEmailErrorMsg: "",
    ConfirmationEmailErrorMsg: "",
    CompletedObj: {
      isCompleted: false,
      message: "",
    },
    ErrorObj: {
      isError: false,
      message: "",
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ValidateChangeEmail.fulfilled, (state, action) => {
      state.NewEmailErrorMsg = "";
      state.ConfirmationEmailErrorMsg = "";
      const { path, msg } = action.payload.errors;
      if (path === "Email") {
        state.NewEmailErrorMsg = msg;
      }
      if (path === "ConfirmationEmail") {
        state.ConfirmationEmailErrorMsg = msg;
      }
      if (action.payload.status) {
        state.EmailObj.toggleModal = true;
      }
    });
    builder.addCase(ChangeEmail.fulfilled, (state, action) => {
      if (action.payload.status) {
        state.NowEmail = action.payload.body;
        state.EmailObj.toggleModal = false;
        state.EmailObj.Email = "";
        state.EmailObj.ConfirmationEmail = "";
        state.CompletedObj.isCompleted = true;
        state.CompletedObj.message = "変更を完了しました！！";
      } else {
        state.ErrorObj.isError = true;
        state.ErrorObj.message =
          "通信エラーが発生しました。\nもう一度やり直してください。";
      }
    });
    builder.addCase(ValidateChangePassword.fulfilled, (state, action) => {
      state.PassWordObj.NowPasswordErrorMsg = "";
      state.PassWordObj.NewPasswordErrorMsg = "";
      state.PassWordObj.ConfirmationPasswordErrorMsg = "";
      for (let i = 0; i < action.payload.errors.length; i++) {
        const ErrorPath = action.payload.errors[i].path;
        const ErrorMsg = action.payload.errors[i].msg;
        if (ErrorPath === "NowPassword") {
          state.PassWordObj.NowPasswordErrorMsg = ErrorMsg;
        }
        if (ErrorPath === "NewPassword") {
          state.PassWordObj.NewPasswordErrorMsg = ErrorMsg;
        }
        if (ErrorPath === "ConfirmationPassword") {
          state.PassWordObj.ConfirmationPasswordErrorMsg = ErrorMsg;
        }
      }
      if (action.payload.status) {
        state.PassWordObj.toggleModal = true;
      }
    });
    builder.addCase(getEmail.fulfilled, (state, action) => {
      if (!action.payload.status) {
        state.ErrorObj.isError = true;
        state.ErrorObj.message = "現在のメールアドレスを取得できませんでした。";
      }
      state.NowEmail = action.payload.Email;
    });
  },
  reducers: {
    setEmail: (state, action) => {
      state.EmailObj.Email = action.payload;
    },
    setConfirmationEmail: (state, action) => {
      state.EmailObj.ConfirmationEmail = action.payload;
    },
    setNowPassword: (state, action) => {
      state.PassWordObj.NowPassword = action.payload;
    },
    setNewPassword: (state, action) => {
      state.PassWordObj.NewPassword = action.payload;
    },
    setConfirmationPassword: (state, action) => {
      state.PassWordObj.ConfirmationPassword = action.payload;
    },
    closeErrorModal: (state) => {
      state.ErrorObj.message = "";
      state.ErrorObj.isError = false;
    },
    closeModal: (state) => {
      state.EmailObj.toggleModal = false;
      state.PassWordObj.toggleModal = false;
      state.CompletedObj.isCompleted = false;
    },
  },
});

export const OuthEditState = (state: Props) => state.OuthEditSlice;
export const OuthEditReducers = OuthEditSlice.actions;
export default OuthEditSlice.reducer;
