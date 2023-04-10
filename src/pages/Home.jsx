import React from "react";
import Banner from "../components/Banner";
import FeaturedJobs from "../components/FeaturedJobs";
import JobCategory from "../components/JobCategory";

const Home = () => {
  return (
    <section>
      <Banner />
      <JobCategory />
      <FeaturedJobs />
    </section>
  );
};

export default Home;
