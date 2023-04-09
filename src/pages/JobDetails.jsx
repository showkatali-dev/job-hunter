import React from "react";
import {
  HiOutlineCalendar,
  HiOutlineCurrencyDollar,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { useLoaderData } from "react-router-dom";
import bg2 from "../assets/images/Vector-1.png";
import bg1 from "../assets/images/Vector.png";

const JobDetails = () => {
  const job = useLoaderData();
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    type,
    status,
    location,
    salary,
    jobDescription,
    jobResponsibility,
    educationalRequirement,
    experience,
    contactInformation,
  } = job;

  return (
    <section>
      <div
        className="banner h-72 md:h-80 lg:h-96 flex justify-center items-center"
        style={{ backgroundImage: `url(${bg1}), url(${bg2})` }}
      >
        <h1 className="text-3xl font-bold text-primary">Job Details</h1>
      </div>
      <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-6 gap-8 my-12">
        <div className="lg:col-span-4 space-y-6">
          <p>
            <span className="text-primary font-bold">Job Description: </span>
            {jobDescription}
          </p>
          <p>
            <span className="text-primary font-bold">Job Responsibility: </span>
            {jobResponsibility}
          </p>

          <p>
            <span className="text-primary font-bold">
              Educational Requirements:{" "}
            </span>
            {educationalRequirement}
          </p>
          <p>
            <span className="text-primary font-bold">Experiences: </span>
            {experience}
          </p>
        </div>
        <div className="lg:col-span-2">
          <div className="p-6 rounded-md bg-[#EDEEFF] space-y-4">
            <h3 className="text-xl text-primary font-bold">Job Details</h3>
            <hr />
            <p>
              <HiOutlineCurrencyDollar className="text-lg inline mr-1" />
              <span className="text-secondary font-semibold mr-2">Salary:</span>
              {salary} (Per Year)
            </p>
            <p>
              <HiOutlineCalendar className="text-lg inline mr-1" />
              <span className="text-secondary font-semibold mr-2">
                Job Title:
              </span>
              {jobTitle}
            </p>

            <h3 className="text-xl text-primary font-bold mt-2">
              Contact Information
            </h3>
            <hr />
            <p>
              <HiOutlinePhone className="text-lg inline mr-1" />
              <span className="text-secondary font-semibold mr-2">Phone:</span>
              {contactInformation.phone}
            </p>
            <p>
              <HiOutlineMail className="text-lg inline mr-1" />
              <span className="text-secondary font-semibold mr-2">Email:</span>
              {contactInformation.email}
            </p>
          </div>

          <button className="w-full btn-primary mt-6">Apply Now</button>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
