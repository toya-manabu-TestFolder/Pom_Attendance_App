import { createSlice } from "@reduxjs/toolkit";

// const API_URL = import.meta.env.VITE_API_URL;

type Props = {
  home: {
    startButtonDisabled: boolean;
  };
};

const homeSlice = createSlice({
  name: "home",
  initialState: {
    startButtonDisabled: false,
  },
  extraReducers: () => {},
  reducers: {
    startButtonFn: (state) => {
      const result = confirm("午前09:00で出勤登録してよろしいですか？");
      if (result) {
        state.startButtonDisabled = true;
      }
    },
  },
});
export const Stats = (state: Props) => state.home;
export const homeSliceReducers = homeSlice.actions;
export default homeSlice.reducer;
