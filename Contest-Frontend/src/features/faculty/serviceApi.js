import { publicRequest } from "../../requestMethod";
import {
  getFacultyStart,
  getFacultySuccess,
  getFacultyFailure,
} from "./facultySlice";

// export const updateFaculty = async (dispatch, id, formDataJson) => {
//   console.log(formDataJson);
//   dispatch(updataFacultyStart());
//   try {
//     const res = await publicRequest.put(`/faculty/${id}`, {
//       formDataJson,
//     });
//     dispatch(updataFacultySuccess(res.data.data));
//   } catch (err) {
//     const errorMessage = err.response?.data?.error || "An error occurred.";
//     dispatch(updataFacultyFailure(errorMessage));
//   }
// };

export const getFaculty = async (dispatch) => {
  dispatch(getFacultyStart());
  try {
    const res = await publicRequest.get(`/faculty`);
    dispatch(getFacultySuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(getFacultyFailure(errorMessage));
  }
};
