import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { HiOutlineFaceFrown } from "react-icons/hi2";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-y-4">
      <HiOutlineFaceFrown className="text-7xl" />
      <h1 className="text-4xl font-semibold">{status || 404}</h1>
      <p className="text-lg text-gray-300">{error?.message || "Not found"}</p>
      <Link to="/" className="btn-primary mt-6 flex gap-x-2 items-center">
        <HiArrowLeft className="text-2xl" /> Back to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
