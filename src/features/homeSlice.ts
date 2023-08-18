import { createSlice } from "@reduxjs/toolkit";

// const API_URL = import.meta.env.VITE_API_URL;

type Props = {
  home: {
    firstCloseModal: boolean;
    startModalOpen: boolean;
    startButtonDesable: boolean;
  };
};

const homeSlice = createSlice({
  name: "home",
  initialState: {
    firstCloseModal: true,
    startModalOpen: false,
    startButtonDesable: false,
  },
  extraReducers: () => {},
  reducers: {
    startButtonFn: (state) => {
      (state.firstCloseModal = false), (state.startModalOpen = true);
    },
    endButtonFn: (state) => {
      (state.firstCloseModal = false), (state.startModalOpen = true);
    },
    startOkFn: (state) => {
      state.startButtonDesable = true;
      state.startModalOpen = false;
    },
    noButtonFn: (state) => {
      state.startModalOpen = false;
    },
  },
});
export const Stats = (state: Props) => state.home;
export const homeSliceReducers = homeSlice.actions;
export default homeSlice.reducer;
