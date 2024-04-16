import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Routes/Routes.jsx";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "./app/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer autoClose={2000} />
    </Provider>
  </React.StrictMode>
);
