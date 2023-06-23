import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RegistData } from "../types/types";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const sendRegistarData: any = createAsyncThunk(
  "registar/sendRegistarData",
  async (data) => {
    try {
      const res = await axios.post(`${API_URL}registarApi/`, data);
      return res.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
);

type Props = RegistData;

const registarSlice = createSlice({
  name: "registar",
  initialState: {
    registarDataState: {
      registarData: {
        name: "",
        furigana: "",
        gender_id: "",
        birthday: "0000-00-00",
        mailaddress: "",
        phone: "",
        password: "",
        configrationPass: "",
      },
      errors: {
        name: "",
        furigana: "",
        gender: "",
        mailaddress: "",
        birthday: "",
        phone: "",
        password:
          "8文字以上24文字以内の英小文字と数字を一文字以上含めてください。",
        configrationPass: "",
      },
      inputPassState: {
        text: "表示",
        type: "password",
        toggle: true,
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendRegistarData.fulfilled, (state, action) => {
      const result = action.payload;
      const errors = state.registarDataState.errors;
      if (result !== "OK") {
        for (const error of result.errors) {
          if (error.path === "name") errors.name = error.msg;
          if (error.path === "furigana") errors.furigana = error.msg;
          if (error.path === "mailaddress") errors.mailaddress = error.msg;
          if (error.path === "password") errors.password = error.msg;
          if (error.path === "birthday") errors.birthday = error.msg;
          if (error.path === "gender_id") errors.gender = error.msg;
          if (error.path === "configrationPass")
            errors.configrationPass = error.msg;
        }
      }
    });
  },
  reducers: {
    inputName: (state, action) => {
      state.registarDataState.registarData.name = action.payload;
    },
    inputFurigana: (state, action) => {
      state.registarDataState.registarData.furigana = action.payload;
    },
    inputGenderId: (state, action) => {
      state.registarDataState.registarData.gender_id = action.payload;
    },
    inputBirthday: (state, action) => {
      state.registarDataState.registarData.birthday = action.payload;
    },
    inputEmail: (state, action) => {
      state.registarDataState.registarData.mailaddress = action.payload;
    },
    inputPhone: (state, action) => {
      state.registarDataState.registarData.phone = action.payload;
    },
    inputPassword: (state, action) => {
      state.registarDataState.registarData.password = action.payload;
    },
    inputConfirmationPassword: (state, action) => {
      state.registarDataState.registarData.configrationPass = action.payload;
    },
    resetStateErrors: (state, action) => {
      state.registarDataState.errors = action.payload;
    },
    resetRegistarData: (state) => {
      const resetData = {
        name: "",
        furigana: "",
        gender_id: "",
        birthday: "0000-00-00",
        mailaddress: "",
        phone: "",
        password: "",
        configrationPass: "",
      };
      state.registarDataState.registarData = resetData;
    },
    inputPassToggle: (state, action) => {
      if (action.payload) {
        state.registarDataState.inputPassState.text = "非表示";
        state.registarDataState.inputPassState.type = "text";
        state.registarDataState.inputPassState.toggle = false;
      } else {
        state.registarDataState.inputPassState.text = "表示";
        state.registarDataState.inputPassState.type = "password";
        state.registarDataState.inputPassState.toggle = true;
      }
    },
  },
});
export const registarState = (state: Props) => state.registar.registarDataState;
export const reducers = registarSlice.actions;
export default registarSlice.reducer;
