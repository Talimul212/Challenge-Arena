import { publicRequest } from "../../requestMethod";
import {
  getTeacherslistingFailure,
  getTeacherslistingStart,
  getTeacherslistingSuccess,
  teacherslistingFailure,
  teacherslistingStart,
  teacherslistingSuccess,
  updataTeacherslistingFailure,
  updataTeacherslistingStart,
  updataTeacherslistingSuccess,
} from "../Teachers/teachersSlice";

export const addTeacherslist = async (dispatch, payload) => {
  dispatch(teacherslistingStart());
  try {
    const res = await publicRequest.post("/teachers", payload);
    dispatch(teacherslistingSuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(teacherslistingFailure(errorMessage));
  }
};

export const updateTeacherslist = async (dispatch, id, formDataJson) => {
  console.log(formDataJson);
  dispatch(updataTeacherslistingStart());
  try {
    const res = await publicRequest.put(`/teachers/${id}`, {
      formDataJson,
    });
    dispatch(updataTeacherslistingSuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(updataTeacherslistingFailure(errorMessage));
  }
};

export const getTeacherslist = async (dispatch) => {
  dispatch(getTeacherslistingStart());
  try {
    const res = await publicRequest.get(`/teachers`);
    dispatch(getTeacherslistingSuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(getTeacherslistingFailure(errorMessage));
  }
};
