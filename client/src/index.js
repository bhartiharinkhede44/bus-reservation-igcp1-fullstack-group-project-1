import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./views/Home/Home"
import Login from "./views/Login/Login"
import Signup from "./views/Signup/Signup"
import Contact from "./views/Contact/Contact"
import Blog from './views/Blog/Blog';
import Faq from "./views/Faq/Faq"
import SearchBus from "./views/SearchBus/SearchBus"
// import BookTicket from "./views/BookTicket/BookTicket"
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
    },
    {
      path: "/blog",
      element: <Blog/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
    {
      path: "/faq",
      element: <Faq/>,
    },
    {
      path: "/searchbus",
      element: <SearchBus/>,
    }

    // {
    //   path: "/bookTicket",
    //   element: <BookTicket/>,
    // }

]);

root.render(
    <RouterProvider router={router} />
);

