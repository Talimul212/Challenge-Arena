/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Draft/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Register from "../../Pages/Auth/Register/Register";
import Login from "../../Pages/Auth/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
