import React from "react";
import {
  HiOutlineCurrencyDollar,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
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
    <div className="border rounded-md p-8 space-y-4">
      <div className="h-14 mb-2">
        <img src={companyLogo} alt={companyName} className="w-36" />
      </div>
      <h2 className="text-secondary font-bold text-2xl">{jobTitle}</h2>
      <p>{companyName}</p>
      <div className="border w-fit border-[#7e8ffec5] text-linear rounded-md px-4 py-1 font-bold">
        {type}
      </div>
      <div className="flex items-center justify-start gap-x-6">
        <p>
          <HiOutlineLocationMarker className="text-lg inline mr-2" />
          {location}
        </p>
        <p>
          <HiOutlineCurrencyDollar className="text-lg inline mr-2" />
          {salary}
        </p>
      </div>
      <Link to="/job/id" className="btn-primary py-2 px-4 inline-block">
        View Details
      </Link>
    </div>
  );
};

export default JobCard;
