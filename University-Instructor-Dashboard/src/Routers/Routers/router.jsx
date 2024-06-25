/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Root from "../../LayOuts/Root/Root";
import ScreenHome from "../../Pages/Home/ScreenHome";
import ShortHome from "../../Pages/Function/ShortHome";
import AddForm from "../../Components/Form/TeacherForm/AddForm";
import ErrorPage from "../../Pages/Error/ErrorPage";
import CoursesForm from "../../Components/Form/CoursesForm/CoursesForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ScreenHome />,
      },
      {
        path: "/UI/:id",
        element: <ShortHome />,
      },
      {
        path: "/UI/teacherForm",
        element: <AddForm />,
      },
      {
        path: "/UI/:id/coursesForm",
        element: <CoursesForm />,
      },
    ],
  },
]);
