/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Root from "../../LayOuts/Root/Root";
import ScreenHome from "../../Pages/Home/ScreenHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Not Found go to back </p>,
    children: [
      {
        path: "/",
        element: <ScreenHome />,
      },
    ],
  },
]);
