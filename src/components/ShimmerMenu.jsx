import React from "react";

const ShimmerMenu = () => {
  return (
    <div className="container flex w-full h-full justify-center items-center bg-white p-5 m-auto">
      <div className="menu w-3/4 h-full flex flex-col bg-gray-50 animate-pulse">
        <div className="menu-header w-full flex bg-gray-300 h-52 select-none">
          <div className="w-44 h-full bg-gray-300"></div>
          <div className="flex flex-col p-2 m-2 gap-1.5 w-full">
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-2.5"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3 mb-1"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-1"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-1"></div>
          </div>
        </div>
        <div className="menu-body shadow-md flex flex-col p-4 w-full">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="h-6 bg-gray-200 rounded mb-2"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerMenu;
