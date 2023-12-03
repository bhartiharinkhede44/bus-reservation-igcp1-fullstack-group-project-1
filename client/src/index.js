import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./views/Home/Home"
import Login from "./views/Login/Login"
import Signup from "./views/Signup/Signup"
import {createBrowserRouter,RouterProvider,} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

  {
     path: "/signup",
      element: <Signup/>,
    },

    {
      path: "/login",
      element: <Login/>,
    }

]);

root.render(
    <RouterProvider router={router} />
);

