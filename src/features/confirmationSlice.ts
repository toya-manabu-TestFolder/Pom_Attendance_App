import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import { ConfirmationDataType } from "../types/types";
import axios from "axios";
import emailjs from "@emailjs/browser";
const userID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const API_URL = import.meta.env.VITE_API_URL;

type Props = ConfirmationDataType;

export const RegistData: any = createAsyncThunk(
  "confirmation/RegistData",
  async (data) => {
    const result = await axios.post(`${API_URL}registarApi/regist`, data);
    return result.status;
  }
);

const confirmationSlice = createSlice({
  name: "confirmation",
  initialState: {
    resetConfirmationData: [
      { name: "お名前", value: "", type: "text" },
      { name: "フリガナ", value: "", type: "text" },
      { name: "性別", value: "", type: "text" },
      { name: "生年月日", value: "", type: "text" },
      { name: "メールアドレス", value: "", type: "text" },
      { name: "電話番号", value: "", type: "text" },
      { name: "パスワード", value: "", type: "password" },
    ],
    confirmationData: [
      { name: "お名前", value: "", type: "text" },
      { name: "フリガナ", value: "", type: "text" },
      { name: "性別", value: "", type: "text" },
      { name: "生年月日", value: "", type: "text" },
      { name: "メールアドレス", value: "", type: "text" },
      { name: "電話番号", value: "", type: "text" },
      { name: "パスワード", value: "", type: "password" },
    ],
    sendData: {
      name: "",
      furigana: "",
      gender_id: 0,
      birthday: "0000-00-00",
      mailaddress: "",
      phone: "",
      password: "",
    },
    inputPassState: {
      text: "表示",
      type: "password",
      toggle: true,
    },
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(RegistData.fulfilled, (state, action) => {
      if (action.payload === 400) {
        state.error = "登録が失敗しました。ネットワーク状況をご確認ください。";
      }
    });
  },
  reducers: {
    confirmationDataToUpdate: (state, action) => {
      const confirmationData = state.confirmationData;
      confirmationData[0].value = action.payload.name;
      confirmationData[1].value = action.payload.furigana;
      confirmationData[2].value = action.payload.gender_id;
      confirmationData[3].value = action.payload.birthday;
      confirmationData[4].value = action.payload.mailaddress;
      confirmationData[5].value = action.payload.phone;
      confirmationData[6].value = action.payload.password;
    },
    inputPassToggle: (state, action) => {
      if (action.payload) {
        state.inputPassState.text = "非表示";
        state.inputPassState.type = "text";
        state.inputPassState.toggle = false;
      } else {
        state.inputPassState.text = "表示";
        state.inputPassState.type = "password";
        state.inputPassState.toggle = true;
      }
    },
    sendDataUpdate: (state, action) => {
      state.sendData.name = action.payload.name;
      state.sendData.furigana = action.payload.furigana;
      state.sendData.gender_id = action.payload.gender_id;
      state.sendData.birthday = action.payload.birthday;
      state.sendData.mailaddress = action.payload.mailaddress;
      state.sendData.phone = action.payload.phone;
      state.sendData.password = action.payload.password;
    },
    sendEmail: (state) => {
      // emailJS送信データを定義
      const templateVariables: any = {
        from_name: state.confirmationData[0].value,
        email: state.confirmationData[4].value,
        message:
          "お疲れ様です！登録が完了しました！！\n下記URLのログインページよりログインしてください。\nログインページ：http://localhost:5173/",
      };

      // emailJS送信
      emailjs.send(serviceID, templateID, templateVariables, userID);
    },
    resetState: (state) => {
      const resetConfirmationData = [
        { name: "お名前", value: "", type: "text" },
        { name: "フリガナ", value: "", type: "text" },
        { name: "性別", value: "", type: "text" },
        { name: "生年月日", value: "", type: "text" },
        { name: "メールアドレス", value: "", type: "text" },
        { name: "電話番号", value: "", type: "text" },
        { name: "パスワード", value: "", type: "password" },
      ];
      const resetSendData = {
        name: "",
        furigana: "",
        gender_id: 0,
        birthday: "0000-00-00",
        mailaddress: "",
        phone: "",
        password: "",
      };

      state.confirmationData = resetConfirmationData;
      state.sendData = resetSendData;
    },
  },
});

export const State = (state: Props) => state.confirmation;
export const sendDataState = (state: Props) => state.confirmation.sendData;
export const errorState = (state: Props) => state.confirmation.error;
export const confirmationReducers = confirmationSlice.actions;
export default confirmationSlice.reducer;
