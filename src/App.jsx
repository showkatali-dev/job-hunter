import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppliedJobs from "./pages/AppliedJobs";
import Blogs from "./pages/Blogs";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Statistics from "./pages/Statistics";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
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
        loader: ({ params }) =>
          fetch("../job_data.json")
            .then((res) => res.json())
            .then((data) => data.find((job) => job.id === Number(params.id))),
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
