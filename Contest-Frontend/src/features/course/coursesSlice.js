import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    data: null,
    isLoading: false,
    error: false,
  },
  reducers: {
    coursesStart: (state) => {
      state.isLoading = true;
    },
    coursesSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = false;
    },
    coursesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getCoursesStart: (state) => {
      state.isLoading = true;
    },
    getCoursesSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = false;
    },
    getCoursesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getCoursesFailure, getCoursesSuccess, getCoursesStart } =
  coursesSlice.actions;
export default coursesSlice.reducer;
