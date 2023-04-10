import React, { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useLoaderData } from "react-router-dom";
import bg2 from "../assets/images/Vector-1.png";
import bg1 from "../assets/images/Vector.png";
import AppliedJobCard from "../components/AppliedJobCard";

const AppliedJobs = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [filter, setFilter] = useState("");
  const [jobs, setJobs] = useState([]);

  const applied_jobs = useLoaderData();

  useEffect(() => {
    if (filter === "") setJobs(applied_jobs);
    else setJobs(applied_jobs.filter((job) => job.type === filter));
  }, [filter]);

  return (
    <section>
      <div
        className="banner bg-[#F9F9FF] h-72 md:h-80 lg:h-96 flex justify-center items-center"
        style={{ backgroundImage: `url(${bg1}), url(${bg2})` }}
      >
        <h1 className="text-3xl font-bold text-primary">Applied Jobs</h1>
      </div>
      <div className="container mx-auto p-4 my-8 text-right">
        {/* filter */}
        <div className="inline-flex bg-white border rounded-md">
          <div className="relative">
            <button
              onClick={() => setOpenFilter(!openFilter)}
              type="button"
              className="inline-flex items-center justify-center h-full px-4 py-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
            >
              <span className="mr-2">Filter By {filter}</span>
              <HiChevronDown
                className={`text-xl duration-200 ${
                  openFilter ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`absolute right-0 z-10 w-36 text-left mt-3 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg ${
                openFilter ? "block" : "hidden"
              }`}
            >
              <ul className="p-2">
                <li
                  onClick={() => {
                    setFilter("");
                    setOpenFilter(false);
                  }}
                  className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 cursor-pointer"
                >
                  All
                </li>
                <li
                  onClick={() => {
                    setFilter("Onsite");
                    setOpenFilter(false);
                  }}
                  className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 cursor-pointer"
                >
                  Onsite
                </li>
                <li
                  onClick={() => {
                    setFilter("Remote");
                    setOpenFilter(false);
                  }}
                  className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 cursor-pointer"
                >
                  Remote
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* applied jobs */}
        {jobs.length > 0 ? (
          <div className="text-start my-10 grid gap-y-6">
            {jobs.map((job) => (
              <AppliedJobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <p className="text-center text-red-400 my-10 font-semibold">
            No data
          </p>
        )}
      </div>
    </section>
  );
};

export default AppliedJobs;
