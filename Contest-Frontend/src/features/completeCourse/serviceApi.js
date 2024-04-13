import { publicRequest } from "../../requestMethod";
import {
  getCompleteCourseFailure,
  getCompleteCourseStart,
  getCompleteCourseSuccess,
} from "./CompletecourseSlice";

export const getCompleteCourse = async (dispatch) => {
  dispatch(getCompleteCourseStart);
  try {
    const res = await publicRequest.get(`/completeCourse`);
    dispatch(getCompleteCourseSuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(getCompleteCourseFailure(errorMessage));
  }
};
