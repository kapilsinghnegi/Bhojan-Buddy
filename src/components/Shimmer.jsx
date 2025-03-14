import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper flex flex-wrap justify-center gap-4">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="shimmer-card w-72 h-84 bg-gray-200 rounded-lg overflow-hidden relative"
          >
            <div className="shimmer-image w-full h-40 bg-gray-300"></div>
            <div className="shimmer-text shimmer-title w-3/4 h-6 bg-gray-300 mt-4 mx-4"></div>
            <div className="shimmer-text shimmer-subtitle w-5/6 h-6 bg-gray-300 mt-2 mx-4"></div>
            <div className="shimmer-text shimmer-subtitle w-5/6 h-6 bg-gray-300 mt-2 mx-4"></div>
            <div className="shimmer-text shimmer-subtitle w-5/6 h-6 bg-gray-300 mt-2 mx-4"></div>
            <div className="shimmer-overlay absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
