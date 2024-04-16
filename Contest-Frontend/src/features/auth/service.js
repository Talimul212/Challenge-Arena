/* eslint-disable react-hooks/rules-of-hooks */
import { toast } from "react-toastify";
import { publicRequest } from "../../requestMethod";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
  registrationFailure,
  registrationStart,
  registrationSuccess,
} from "./authSlice";

export const login = async (dispatch, formData, navigateCallback) => {
  console.log(formData);
  const data = {
    studentId: parseInt(formData.studentId),
    password: formData.password,
  };
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", { data });
    localStorage.setItem("token", res.data.data?.accessToken);
    dispatch(loginSuccess(res.data.data));
    navigateCallback();
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(loginFailure(errorMessage));
  }
};

export const register = async (dispatch, data, navigateCallback) => {
  const userData = data;
  console.log(userData);
  dispatch(registrationStart());
  try {
    const res = await publicRequest.post("/users/register", { userData });
    localStorage.setItem("token", res.data.data?.accessToken);
    dispatch(registrationSuccess(res.data.data));
    navigateCallback();
    toast.success(` ${data.data.name}, you successfully add `);
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(registrationFailure(errorMessage));
  }
};

export const logOut = async (dispatch, navigateCallback) => {
  dispatch(logout());
  navigateCallback();
};
