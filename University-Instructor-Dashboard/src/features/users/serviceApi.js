import { publicRequest } from "../../requestMethod";
import {
  getUserFailure,
  getUserStart,
  getUserSuccess,
  registrationFailure,
  registrationStart,
  registrationSuccess,
} from "./userSlice";

export const userRegistration = async (dispatch, payload) => {
  dispatch(registrationStart());
  try {
    const res = await publicRequest.post("/users/register", payload);
    dispatch(registrationSuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(registrationFailure(errorMessage));
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
export const getUser = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await publicRequest.get(`/users`);
    dispatch(getUserSuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(getUserFailure(errorMessage));
  }
};
