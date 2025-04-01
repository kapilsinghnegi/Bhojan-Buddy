import React from "react";

const ShimmerMenu = () => {
  return (
    <div className="container flex flex-col sm:flex-row w-full h-full justify-center items-center bg-white p-5 m-auto">
      <div className="menu w-full sm:w-3/4 h-full flex flex-col bg-gray-50 animate-pulse">
        {/* Header Shimmer */}
        <div className="menu-header w-full flex flex-col sm:flex-row bg-gray-300 h-auto sm:h-52 select-none">
          <div className="w-full sm:w-44 h-44 sm:h-full bg-gray-300"></div>
          <div className="flex flex-col p-2 m-2 gap-2 w-full">
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3 mb-1"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-1"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-1"></div>
          </div>
        </div>

        {/* Body Shimmer */}
        <div className="menu-body shadow-md flex flex-col p-4 w-full">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="h-6 bg-gray-200 rounded mb-4 w-full sm:w-3/4"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerMenu;
