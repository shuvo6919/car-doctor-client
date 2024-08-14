

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./Routes/Routes";
import AuthProvider from "./Providers/AuthProvider";




ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-6xl mx-auto">
    <React.StrictMode>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </React.StrictMode>
  </div>
);