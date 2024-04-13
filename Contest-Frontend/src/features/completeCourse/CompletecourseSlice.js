import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "completeCourse",
  initialState: {
    data: null,
    isLoading: false,
    error: false,
  },
  reducers: {
    registrationStart: (state) => {
      state.isLoading = true;
    },
    registrationSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = false;
    },
    registrationFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getCompleteCourseStart: (state) => {
      state.isLoading = true;
    },
    getCompleteCourseSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = false;
    },
    getCompleteCourseFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getCompleteCourseStart,
  getCompleteCourseSuccess,
  getCompleteCourseFailure,
} = userSlice.actions;
export default userSlice.reducer;
