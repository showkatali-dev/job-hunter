import React from "react";
import person from "../assets/images/person.png";

const Banner = () => {
  return (
    <div className="bg-[#F9F9FF]">
      <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-28 mb-6">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-8">
            One Step
            <span className="my-4 block">Closer To Your</span>
            <span className="text-linear">Dream Job</span>
          </h1>
          <p className="mb-8">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn-primary">Get Started</button>
        </div>
        <div>
          <img src={person} alt="person" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
