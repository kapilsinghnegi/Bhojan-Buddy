import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const handleClick = () => {
    setShowIndex();
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="category-type px-2 sm:px-4 w-full last:border-none border-b-2 border-gray-300 my-2">
      {/* Header */}
      <div
        className="flex sm:py-4 py-3 justify-between items-start sm:items-center cursor-pointer select-none gap-2"
        onClick={handleClick}
      >
        <h2 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-left line-clamp-2">
          {data?.title} ({data?.itemCards?.length})
        </h2>
        <span className="sm:w-8 w-6 flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6 lg:h-8 lg:w-8"
          >
            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
          </svg>
        </span>
      </div>
      {/* Accordion Body */}
      {isAccordionOpen && showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
