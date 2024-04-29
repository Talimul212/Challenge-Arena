import axios from "axios";
// const VERCEL = "https://university-instructor-backend.vercel.app/api/v1";
// const VERCEL = "http://localhost:8000/api/v1";
const BASE_URL = "http://localhost:8000/api/v1";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});

export const formDataRequest = axios.create({
  baseURL: BASE_URL,
  // Add custom headers for file uploads
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// userRequest.interceptors.request.use(
//   (config) => {
//     const accessToken = localStorage.getItem("token");
//     if (accessToken) {
//       config.headers["token"] = `Bearer ${accessToken}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
