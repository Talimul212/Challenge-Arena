import { publicRequest } from "../../requestMethod";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registrationFailure,
  registrationStart,
  registrationSuccess,
} from "./authSlice";

export const login = async (dispatch, { id, password }) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", { id, password });
    localStorage.setItem("token", res.data.data?.accessToken);
    dispatch(loginSuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(loginFailure(errorMessage));
  }
};

export const register = async (
  dispatch,
  { name, email, password, id, gender }
) => {
  dispatch(registrationStart());
  try {
    const res = await publicRequest.post("/auth/register", {
      name,
      email,
      id,
      password,
      gender,
    });
    localStorage.setItem("token", res.data.data?.accessToken);
    dispatch(registrationSuccess(res.data.data));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(registrationFailure(errorMessage));
  }
};
