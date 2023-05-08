import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";




const darkModeSlice = createSlice({
    name: "darkMode",
  initialState: {
    dark: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.dark = !state.dark;
    },
  },
})

export const darkModeSelector = (state:RootState)=>state.darkMode
export const {toggleDarkMode} = darkModeSlice.actions;
export default darkModeSlice.reducer