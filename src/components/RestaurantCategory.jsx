import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const [click, increaseClick] = useState(1);
  const handleClick = () => {
    setShowIndex();
    increaseClick(click + 1);
  };

  return (
    <div className="category-type px-4 w-full last:border-none border-b-2 border-gray-300 my-1">
      {/* Header */}
      <div
        className="flex py-4 justify-between items-center cursor-pointer select-none"
        onClick={handleClick}
      >
        <h2 className="inline-block font-semibold text-2xl">
          {data?.title} ({data?.itemCards?.length})
        </h2>
        <span className="w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
          </svg>
        </span>
      </div>
      {/* Accordion Body */}
      {click % 2 === 0 && showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
