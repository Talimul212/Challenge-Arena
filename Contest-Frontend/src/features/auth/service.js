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
    toast.success(` you successfully login `);
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
    toast.success(` ${res.data.data.name}, you successfully join `);
    navigateCallback();
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(registrationFailure(errorMessage));
  }
};

export const updateUser = async (dispatch, id, data, navigateCallback) => {
  const userData = data;
  dispatch(loginStart());
  try {
    const res = await publicRequest.put(`/users/register/${id}`, {
      userData,
    });
    dispatch(loginSuccess(res.data.data));
    toast.success(` successfully Update `);
    navigateCallback();
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(loginFailure(errorMessage));
  }
};

export const logOut = async (dispatch, navigateCallback) => {
  dispatch(logout());
  navigateCallback();
};
