import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
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
  getFacultyStart,
  getFacultySuccess,
  getFacultyFailure,
} = userSlice.actions;
export default userSlice.reducer;
