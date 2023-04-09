import React, { useEffect, useState } from "react";

const JobCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("job_category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="text-center my-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
        Job Category List
      </h1>
      <p className="mb-6">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => {
          const { id, name, image, availability } = category;
          return (
            <div key={id} className="p-8 bg-[#F9F9FF] rounded-lg text-start">
              <img
                src={image}
                alt=""
                className="w-20 h-20 bg-[#EDEEFF] p-4 rounded-lg mb-8"
              />
              <h2 className="text-xl font-bold text-secondary mb-2">{name}</h2>
              <p>{availability} job available</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobCategory;
