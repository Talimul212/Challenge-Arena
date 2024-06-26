import { createSlice } from "@reduxjs/toolkit";

const teachersSlice = createSlice({
  name: "teacherslist",
  initialState: {
    data: null,
    isLoading: false,
    error: false,
  },
  reducers: {
    teacherslistingStart: (state) => {
      state.isLoading = true;
    },
    teacherslistingSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = false;
    },
    teacherslistingFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updataTeacherslistingSuccess: (state, action) => {
      state.isLoading = false;
      state.data = [...state.data, action.payload];
      state.error = false;
    },
    updataTeacherslistingFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updataTeacherslistingStart: (state) => {
      state.isLoading = true;
    },
    getTeacherslistingStart: (state) => {
      state.isLoading = true;
    },
    getTeacherslistingSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = false;
    },
    getTeacherslistingFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  teacherslistingStart,
  teacherslistingFailure,
  teacherslistingSuccess,
  getTeacherslistingFailure,
  getTeacherslistingSuccess,
  getTeacherslistingStart,
  updataTeacherslistingFailure,
  updataTeacherslistingStart,
  updataTeacherslistingSuccess,
} = teachersSlice.actions;
export default teachersSlice.reducer;
