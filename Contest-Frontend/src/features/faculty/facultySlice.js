import { createSlice } from "@reduxjs/toolkit";

const facultySlice = createSlice({
  name: "faculty",
  initialState: {
    totalFaculty: null,
    isLoading: false,
    error: false,
  },
  reducers: {
    facultyStart: (state) => {
      state.isLoading = true;
    },
    facultySuccess: (state, action) => {
      state.isLoading = false;
      state.totalUser = action.payload;
      state.error = false;
    },
    facultyFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getFacultyStart: (state) => {
      state.isLoading = true;
    },
    updataFacultySuccess: (state, action) => {
      state.isLoading = false;
      state.totalFaculty = [...state.totalFaculty, action.payload];
      state.error = false;
    },
    updataFacultyFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updataFacultyStart: (state) => {
      state.isLoading = true;
    },
    getFacultySuccess: (state, action) => {
      state.isLoading = false;
      state.totalFaculty = action.payload;
      state.error = false;
    },
    getFacultyFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  facultyStart,
  facultySuccess,
  facultyFailure,
  updataFacultyFailure,
  updataFacultySuccess,
  updataFacultyStart,
  getFacultyStart,
  getFacultySuccess,
  getFacultyFailure,
} = facultySlice.actions;
export default facultySlice.reducer;
