import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";

const FeaturedJobs = () => {
  const [jobData, setJobData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("job_data.json")
      .then((res) => res.json())
      .then((data) => {
        if (showAll) setJobData(data);
        else setJobData(data.slice(0, 4));
      })
      .catch((err) => console.error(err));
  }, [showAll]);

  return (
    <div className="container p-4 mx-auto text-center my-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
        Featured Jobs
      </h1>
      <p className="mb-6">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start mb-8">
        {jobData.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="btn-primary block w-fit mx-auto px-5 py-3"
        >
          See All Jobs
        </button>
      )}
    </div>
  );
};

export default FeaturedJobs;
