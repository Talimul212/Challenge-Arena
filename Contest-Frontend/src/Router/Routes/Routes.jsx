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
    ],
  },
]);
