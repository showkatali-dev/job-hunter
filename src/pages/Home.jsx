import React from "react";
import Banner from "../components/Banner";
import JobCategory from "../components/JobCategory";

const Home = () => {
  return (
    <section className="container mx-auto p-4">
      <Banner />
      <JobCategory />
    </section>
  );
};

export default Home;
