import React from "react";
import {
  HiOutlineCurrencyDollar,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const AppliedJobCard = ({ job }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    type,
    status,
    location,
    salary,
  } = job;

  return (
    <div className="border rounded-md p-4 flex flex-col lg:flex-row items-center justify-between gap-6">
      <div className="flex flex-col sm:flex-row items-center gap-5">
        <img
          src={companyLogo}
          className="bg-gray-100 w-60 h-60 rounded-md object-contain p-4"
          alt={companyName}
        />
        <div className="space-y-4">
          <h2 className="text-secondary font-bold text-2xl">{jobTitle}</h2>
          <p>{companyName}</p>
          <div className="flex gap-x-4">
            <div className="border w-fit border-[#7e8ffec5] text-linear rounded-md px-4 py-1 font-bold">
              {type}
            </div>
            <div className="border w-fit border-[#7e8ffec5] text-linear rounded-md px-4 py-1 font-bold">
              {status}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-start gap-x-6">
            <p>
              <HiOutlineLocationMarker className="text-lg inline mr-2" />
              {location}
            </p>
            <p>
              <HiOutlineCurrencyDollar className="text-lg inline mr-2" />{" "}
              Salary: {salary}
            </p>
          </div>
        </div>
      </div>
      <Link to={`/job/${id}`} className="btn-primary py-3 px-4">
        View Details
      </Link>
    </div>
  );
};

export default AppliedJobCard;
