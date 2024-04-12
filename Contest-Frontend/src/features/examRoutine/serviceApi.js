import { publicRequest } from "../../requestMethod";
import {
  getExamRouitneFailure,
  getExamRouitneStart,
  getExamRouitneSuccess,
} from "./examRoutineSlice";

export const getExamRoutine = async (dispatch) => {
  dispatch(getExamRouitneStart);
  try {
    const res = await publicRequest.get(`/examSchedules`);
    dispatch(getExamRouitneSuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(getExamRouitneFailure(errorMessage));
  }
};
