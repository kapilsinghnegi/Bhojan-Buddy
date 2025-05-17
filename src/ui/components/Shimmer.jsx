import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-10 lg:px-20">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="shimmer-card w-full h-72 bg-gray-200 rounded-lg overflow-hidden relative"
          >
            {/* Simulated Image */}
            <div className="shimmer-image w-full h-40 bg-gray-300"></div>
            {/* Simulated Text */}
            <div className="shimmer-text shimmer-title w-3/4 h-6 bg-gray-300 mt-4 mx-4"></div>
            <div className="shimmer-text shimmer-subtitle w-5/6 h-6 bg-gray-300 mt-2 mx-4"></div>
            <div className="shimmer-text shimmer-subtitle w-5/6 h-6 bg-gray-300 mt-2 mx-4"></div>
            {/* Shimmer Effect */}
            <div className="shimmer-overlay absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
