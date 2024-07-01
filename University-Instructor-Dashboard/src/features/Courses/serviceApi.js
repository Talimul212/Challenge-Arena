import { toast } from "react-toastify";
import { publicRequest } from "../../requestMethod";
import {
  courseslistingFailure,
  courseslistingStart,
  courseslistingSuccess,
  getCourseslistingFailure,
  getCourseslistingSuccess,
  getCourseslistingStart,
  updataCourseslistingFailure,
  updataCourseslistingStart,
  updataCourseslistingSuccess,
} from "./coursesSlice";

export const addCourses = async (dispatch, payload) => {
  console.log(payload);
  dispatch(courseslistingStart());
  try {
    const res = await publicRequest.post("/courses", payload);
    dispatch(courseslistingSuccess(res.data.data));
    toast.success(`${res.data.message}`);
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(courseslistingFailure(errorMessage));
  }
};

export const updateCourses = async (dispatch, id, formDataJson) => {
  console.log(formDataJson);
  dispatch(updataCourseslistingStart());
  try {
    const res = await publicRequest.put(`/courses/${id}`, {
      formDataJson,
    });
    dispatch(updataCourseslistingSuccess(res.data.data));
    toast.success(`${res.data.message}`);
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(updataCourseslistingFailure(errorMessage));
  }
};

export const getCourses = async (dispatch) => {
  dispatch(getCourseslistingStart());
  try {
    const res = await publicRequest.get(`/courses`);
    dispatch(getCourseslistingSuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(getCourseslistingFailure(errorMessage));
  }
};
