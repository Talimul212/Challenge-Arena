/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Root from "../../LayOuts/Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Not Found go to back </p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
