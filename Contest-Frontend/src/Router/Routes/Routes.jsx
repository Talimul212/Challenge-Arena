/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Draft/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Register from "../../Pages/Auth/Register/Register";
import Login from "../../Pages/Auth/Login/Login";
import CartHome from "../../Pages/Cart/CartHome";
import AdsForm from "../../Components/Form/AdsForm";
import CartDetails from "../../Pages/Cart/CartDetails";
import SixCardDetails from "../../Pages/SixCard/SixCardDetails";
import UserProfile from "../../Pages/UserProfile/UserProfile";
import ErrorPage from "../../Pages/Error/ErrorPage";
import PrivateRoute from "../Private/PrivateRoute";
import Tuitionchat from "../../Components/Chats/Tuitionchat";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
      {
        path: "/buySell",
        element: <CartHome />,
      },

      {
        path: "/booksDetalis/:id",
        element: <CartDetails />,
      },
      {
        path: "/adsForm",
        element: <AdsForm />,
      },
      {
        path: "/buI/:item",
        element: <SixCardDetails />,
      },
      {
        path: "/chatBox",
        element: <Tuitionchat />,
      },
    ],
  },
]);
