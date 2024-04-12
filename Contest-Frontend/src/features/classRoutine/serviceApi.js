import { publicRequest } from "../../requestMethod";
import {
  getClassRoutineFailure,
  getClassRoutineStart,
  getClassRoutineSuccess,
} from "./classRoutineSlice";

export const getClasses = async (dispatch) => {
  dispatch(getClassRoutineStart);
  try {
    const res = await publicRequest.get(`/classes`);
    dispatch(getClassRoutineSuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(getClassRoutineFailure(errorMessage));
  }
};
