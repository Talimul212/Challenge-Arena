import { toast } from "react-toastify";
import { publicRequest } from "../../requestMethod";
import {
  facultyFailure,
  facultyStart,
  facultySuccess,
  getFacultyFailure,
  getFacultyStart,
  getFacultySuccess,
  updataFacultyFailure,
  updataFacultyStart,
  updataFacultySuccess,
} from "./FacultySlice";

export const addFaculty = async (dispatch, payload) => {
  dispatch(facultyStart());
  try {
    const res = await publicRequest.post("/faculty", payload);
    dispatch(facultySuccess(res.data.data));
    toast.success(`${res.data.message}`);
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(facultyFailure(errorMessage));
  }
};

export const updateFaculty = async (dispatch, id, formDataJson) => {
  console.log(formDataJson);
  dispatch(updataFacultyStart());
  try {
    const res = await publicRequest.put(`/faculty/${id}`, {
      formDataJson,
    });
    dispatch(updataFacultySuccess(res.data.data));
    toast.success(`${res.data.message}`);
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(updataFacultyFailure(errorMessage));
  }
};

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
