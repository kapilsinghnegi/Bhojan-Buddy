import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper grid grid-cols-2 gap-6 px-4 sm:px-10 md:grid-cols-3 lg:px-20 xl:grid-cols-4">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="shimmer-card relative mt-2 h-72 w-full overflow-hidden rounded-lg bg-gray-200"
          >
            {/* Simulated Image */}
            <div className="shimmer-image h-40 w-full bg-gray-300"></div>
            {/* Simulated Text */}
            <div className="shimmer-text shimmer-title mx-4 mt-4 h-6 w-3/4 bg-gray-300"></div>
            <div className="shimmer-text shimmer-subtitle mx-4 mt-2 h-6 w-5/6 bg-gray-300"></div>
            <div className="shimmer-text shimmer-subtitle mx-4 mt-2 h-6 w-5/6 bg-gray-300"></div>
            {/* Shimmer Effect */}
            <div className="shimmer-overlay animate-shimmer absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
