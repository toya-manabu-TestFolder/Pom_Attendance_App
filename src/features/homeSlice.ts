import { createSlice } from "@reduxjs/toolkit";

type Props = {
  home: {
    startButtonDesable: boolean;
  };
};

const homeSlice = createSlice({
  name: "home",
  initialState: {
    startButtonDesable: false,
  },
  extraReducers: () => {},
  reducers: {
    startOkFn: (state) => {
      state.startButtonDesable = true;
    },
  },
});
export const Stats = (state: Props) => state.home;
export const homeSliceReducers = homeSlice.actions;
export default homeSlice.reducer;
