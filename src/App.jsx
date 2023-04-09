import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AppliedJobs from "./pages/AppliedJobs";
import Blogs from "./pages/Blogs";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Statistics from "./pages/Statistics";

const Layout = () => {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
