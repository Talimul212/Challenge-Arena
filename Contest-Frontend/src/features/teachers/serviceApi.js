import { publicRequest } from "../../requestMethod";
import {
  getTeachersFailure,
  getTeachersStart,
  getTeachersSuccess,
} from "./teachersSlice";

export const getTeachers = async (dispatch) => {
  dispatch(getTeachersStart());
  try {
    const res = await publicRequest.get(`/teachers`);
    dispatch(getTeachersSuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(getTeachersFailure(errorMessage));
  }
};
