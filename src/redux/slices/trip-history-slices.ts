import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const tripHistorySlice = createSlice({
  name: "tripHistory",
  initialState: {
    trips: [],
  },
  reducers: {
    getListHistoryAction: (state) => {
      console.log(state);
    },
  },
});

export const tripHistorySelector = (state: RootState) => state.tripHistory;
export const { getListHistoryAction } = tripHistorySlice.actions;
export default tripHistorySlice.reducer;
