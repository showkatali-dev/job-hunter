import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import bg2 from "../assets/images/Vector-1.png";
import bg1 from "../assets/images/Vector.png";

const questions = [
  {
    qn: "When should you use context API?",
    ans: "We should use context API, when we have data that needs to be accessed by many components and we want to avoid props drilling in our application.",
  },
  {
    qn: "What is a custom hook?",
    ans: "A custom hook is a function that uses react's built-in hook (such as 'useState', 'useEffect' etc) to provide some reusable logic, that allow us to extract common logic from our component into a separate function. It makes our code more reusable and easier.",
  },
  {
    qn: "What is useRef?",
    ans: "'useRef' is a react hook that is used to store a value that persists across re-renders of a component. It is a mutable ref. Most of the case, we use it to reference a DOM element or store a value.",
  },
  {
    qn: "What is useMemo?",
    ans: "'useMemo is a react hook that allows us to memoize expensive calculations so that they are only re-computed when their dependencies change. This can help to optimize the performance of our components by avoiding unnecessary re-calculations.",
  },
];

const Blogs = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const expandHandler = (index) => {
    setExpandedIndex(index);
  };
  return (
    <section>
      <div
        className="banner bg-[#F9F9FF] h-72 md:h-80 lg:h-96 flex justify-center items-center"
        style={{ backgroundImage: `url(${bg1}), url(${bg2})` }}
      >
        <h1 className="text-3xl font-bold text-primary">Blog</h1>
      </div>

      <div className="my-12 container mx-auto p-4">
        <h1 className="text-primary text-3xl px-4 text-center font-bold mb-8">
          React Interview Question
        </h1>
        {questions.map((question, i) => (
          <div key={i}>
            <div className="border-b mb-4 pb-2">
              <div
                onClick={() => {
                  expandedIndex === i ? expandHandler(null) : expandHandler(i);
                }}
                className="flex items-center justify-between gap-x-4 hover:cursor-pointer"
              >
                <h2
                  className={`text-2xl font-semibold ${
                    expandedIndex === i ? "text-linear" : "text-secondary"
                  }`}
                >
                  {question.qn}
                </h2>
                <HiChevronDown
                  className={`text-3xl duration-200 ${
                    expandedIndex === i ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden mb-2 ${
                  expandedIndex === i ? "h-fit" : "h-0"
                }`}
              >
                <p>{question.ans}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
