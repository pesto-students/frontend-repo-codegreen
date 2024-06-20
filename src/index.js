import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Forum from "./routes/Forum/Forum";
import Shop from "./routes/Shop/Shop";
import Dashboard from "./routes/Dashboard/Dashboard";
import ErrorPage from "./routes/Error/ErrorPage";
import Home from "./routes/Home/Home";
import SignIn from "./routes/SignIn/SignIn";
import SignUp from "./routes/SignUp/SignUp";
import { UserProvider } from "./store/UserContext";
import Post from "./routes/Forum/Post";
import PostsByCategory from "./routes/Forum/PostsByCategory";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/discuss",
        element: <Forum />,        
      },
      {
        path : "/discuss/:category",
        element : <PostsByCategory />
      },
      {
        path : 'discuss/:category/:id',
           element : <Post />
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
