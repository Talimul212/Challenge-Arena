import { publicRequest } from "../../requestMethod";
import {
  facultyFailure,
  facultyStart,
  facultySuccess,
  getFacultyFailure,
  getFacultyStart,
  getFacultySuccess,
} from "./FacultySlice";

export const addFaculty = async (dispatch, payload) => {
  dispatch(facultyStart());
  try {
    const res = await publicRequest.post("/faculty", payload);
    dispatch(facultySuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(facultyFailure(errorMessage));
  }
};
// export const getUser = async (dispatch, batch, semseter, id) => {
//   dispatch(getUserStart());
//   try {
//     const res = await publicRequest.get(`/users/${batch}/${semseter}/${id}`);
//     dispatch(getUserSuccess(res.data.data));
//   } catch (err) {
//     const errorMessage = err.response?.data?.error || "An error occurred.";
//     dispatch(getUserFailure(errorMessage));
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
