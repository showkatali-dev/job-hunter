import React from "react";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useNavigation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import AppliedJobs from "./pages/AppliedJobs";
import Blogs from "./pages/Blogs";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Statistics from "./pages/Statistics";
import { getLocalStorageData } from "./utilities/fakedb";

const Layout = () => {
  const navigation = useNavigation();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{navigation.state === "loading" ? <Spinner /> : <Outlet />}</main>
      <footer>
        <Footer />
      </footer>
      <ToastContainer />
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
        loader: () => fetch("../assignment_marks.json"),
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
        loader: async () => {
          const localStorageData = getLocalStorageData();
          const res = await fetch("../job_data.json");
          const data = await res.json();
          return data.filter((job) => localStorageData.includes(job.id));
        },
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
