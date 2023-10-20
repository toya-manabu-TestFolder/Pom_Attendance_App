import { createSlice } from "@reduxjs/toolkit";

type Props = {
  home: {
    toDay: string;
    startButtonDesable: boolean;
    toggleLoading: boolean;
    CompletedModalState: {
      toggleModal: boolean;
      message: string;
    };
    ErrorModalState: {
      toggleModal: boolean;
      message: string;
    };
  };
};

const homeSlice = createSlice({
  name: "home",
  initialState: {
    toDay: "",
    startButtonDesable: false,
    toggleLoading: false,
    CompletedModalState: {
      toggleModal: false,
      message: "",
    },
    ErrorModalState: {
      toggleModal: false,
      message: "",
    },
  },
  extraReducers: () => {},
  reducers: {
    setToDay: (state, action) => {
      const toDay = new Date();
      const Year = toDay.getFullYear();
      const Month = "0" + (toDay.getMonth() + 1);
      const date = "0" + toDay.getDate();
      state.toDay = `${Year + "-" + Month.slice(-2) + "-" + date.slice(-2)}`;
      action.payload = `${Year + "-" + Month.slice(-2) + "-" + date.slice(-2)}`;
    },
    startOkFn: (state) => {
      state.startButtonDesable = true;
    },
    toggleLoading: (state, action) => {
      state.toggleLoading = action.payload;
    },
    toggleCompletedModal: (state, action) => {
      state.CompletedModalState.message = action.payload.message;
      state.CompletedModalState.toggleModal = action.payload.toggleModal;
    },
    toggleErrorModal: (state, action) => {
      state.ErrorModalState.message = action.payload.message;
      state.ErrorModalState.toggleModal = action.payload.toggleModal;
    },
  },
});
export const Stats = (state: Props) => state.home;
export const homeSliceReducers = homeSlice.actions;
export default homeSlice.reducer;
