import { createSlice } from "@reduxjs/toolkit";

const examRoutineSlice = createSlice({
  name: "examRoutine",
  initialState: {
    data: null,
    isLoading: false,
    error: false,
  },
  reducers: {
    examRouitneStart: (state) => {
      state.isLoading = true;
    },
    examRouitneSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = false;
    },
    examRouitneFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getExamRouitneStart: (state) => {
      state.isLoading = true;
    },
    getExamRouitneSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = false;
    },
    getExamRouitneFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  examRouitneStart,
  examRouitneSuccess,
  examRouitneFailure,
  getExamRouitneStart,
  getExamRouitneSuccess,
  getExamRouitneFailure,
} = examRoutineSlice.actions;
export default examRoutineSlice.reducer;
