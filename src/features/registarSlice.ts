import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const sendRegistarData: any = createAsyncThunk(
  "auth/sendInputData",
  async (data) => {
    try {
      const res = await axios.post(`${API_URL}registarApi/`, data);
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      console.log(error.response.data);
    }
    // res.dataとすることで、返ってきた値をreducerでaction.payloadとして扱える。
  }
);

type Props = {
  registar: {
    registarData: {
      name: string;
      furigana: string;
      gender_id: number;
      birthday: string;
      mailaddress: string;
      phone: string;
      password: string;
    };
  };
};

const registarSlice = createSlice({
  name: "registar",
  initialState: {
    registarData: {
      name: "",
      furigana: "",
      gender_id: 0,
      birthday: "0000-00-00",
      mailaddress: "",
      phone: "",
      password: "",
    },
    configrationPass: "",
  },
  extraReducers: (builder) => {},
  reducers: {
    inputName: (state, action) => {
      state.registarData.name = action.payload;
    },
    inputFurigana: (state, action) => {
      state.registarData.furigana = action.payload;
    },
    inputGenderId: (state, action) => {
      state.registarData.gender_id = action.payload;
    },
    inputBirthday: (state, action) => {
      state.registarData.birthday = action.payload;
    },
    inputEmail: (state, action) => {
      state.registarData.mailaddress = action.payload;
    },
    inputPhone: (state, action) => {
      state.registarData.phone = action.payload;
    },
    inputPassword: (state, action) => {
      state.registarData.password = action.payload;
    },
    inputConfirmationPassword: (state, action) => {
      state.configrationPass = action.payload;
    },
  },
});
export const registarData = (state: Props) => state.registar.registarData;
export const reducers = registarSlice.actions;
export default registarSlice.reducer;
