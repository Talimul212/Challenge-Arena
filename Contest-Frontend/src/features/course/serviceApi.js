import { publicRequest } from "../../requestMethod";
import {
  getCoursesFailure,
  getCoursesStart,
  getCoursesSuccess,
} from "./coursesSlice";

export const getCourses = async (dispatch) => {
  dispatch(getCoursesStart);
  try {
    const res = await publicRequest.get(`/courses`);
    dispatch(getCoursesSuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(getCoursesFailure(errorMessage));
  }
};
