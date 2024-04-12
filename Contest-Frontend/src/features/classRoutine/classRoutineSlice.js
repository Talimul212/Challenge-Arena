import { createSlice } from "@reduxjs/toolkit";

const classRoutineSlice = createSlice({
  name: "classRoutine",
  initialState: {
    data: null,
    isLoading: false,
    error: false,
  },
  reducers: {
    classRoutineStart: (state) => {
      state.isLoading = true;
    },
    classRoutineSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = false;
    },
    classRoutineFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getClassRoutineStart: (state) => {
      state.isLoading = true;
    },
    getClassRoutineSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = false;
    },
    getClassRoutineFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getClassRoutineStart,
  getClassRoutineSuccess,
  getClassRoutineFailure,
} = classRoutineSlice.actions;
export default classRoutineSlice.reducer;
