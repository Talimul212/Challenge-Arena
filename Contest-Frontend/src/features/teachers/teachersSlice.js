import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
  name: "teachers",
  initialState: {
    data: null,
    isLoading: false,
    error: false,
  },
  reducers: {
    teachersStart: (state) => {
      state.isLoading = true;
    },
    teachersSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = false;
    },
    teachersFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getTeachersStart: (state) => {
      state.isLoading = true;
    },
    getTeachersSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = false;
    },
    getTeachersFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getTeachersStart, getTeachersSuccess, getTeachersFailure } =
  coursesSlice.actions;
export default coursesSlice.reducer;
