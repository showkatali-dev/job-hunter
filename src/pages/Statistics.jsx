import React from "react";
import bg2 from "../assets/images/Vector-1.png";
import bg1 from "../assets/images/Vector.png";

const Statistics = () => {
  return (
    <section>
      <div
        className="banner h-72 md:h-80 lg:h-96 flex justify-center items-center"
        style={{ backgroundImage: `url(${bg1}), url(${bg2})` }}
      >
        <h1 className="text-3xl font-bold text-primary">Statistics</h1>
      </div>
    </section>
  );
};

export default Statistics;
