import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Discuss from "./routes/Discuss/Discuss";
import Shop from "./routes/Shop/Shop";
import Dashboard from "./routes/Dashboard/Dashboard";
import ErrorPage from "./routes/Error/ErrorPage";
import Home from "./routes/Home/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignIn from "./routes/SignIn/SignIn";
import SignUp from "./routes/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/discuss",
        element: <Discuss />,
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

const theme = createTheme({
  palette: {
    primary: {
      main: "#213B1C",
    },
    secondary: {
      main: "#E48C3C",
    },
  },
  typography: {
    fontFamily: ["Prompt", "sans-serif"].join(","),
    fontSize: 16

  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
