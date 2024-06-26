import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
  name: "coursesList",
  initialState: {
    data: null,
    isLoading: false,
    error: false,
  },
  reducers: {
    courseslistingStart: (state) => {
      state.isLoading = true;
    },
    courseslistingSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = false;
    },
    courseslistingFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updataCourseslistingSuccess: (state, action) => {
      state.isLoading = false;
      state.data = [...state.data, action.payload];
      state.error = false;
    },
    updataCourseslistingFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updataCourseslistingStart: (state) => {
      state.isLoading = true;
    },
    getCourseslistingStart: (state) => {
      state.isLoading = true;
    },
    getCourseslistingSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = false;
    },
    getCourseslistingFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  courseslistingFailure,
  courseslistingStart,
  courseslistingSuccess,
  getCourseslistingFailure,
  getCourseslistingSuccess,
  getCourseslistingStart,
  updataCourseslistingFailure,
  updataCourseslistingStart,
  updataCourseslistingSuccess,
} = coursesSlice.actions;
export default coursesSlice.reducer;
