import React, { useState } from "react";
import ShimmerMenu from "./ShimmerMenu.jsx";
import RestaurantCategory from "./RestaurantCategory.jsx";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import { CDN_URL } from "../utils/constants.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <ShimmerMenu />;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    areaName,
    sla: { slaString },
  } = resInfo?.cards[2]?.card?.card?.info;
  const categories = resInfo?.cards[
    resInfo.cards.length - 1
  ]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    category =>
      category?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    // Container
    <div className="container flex w-full h-full justify-center items-center bg-white p-2 lg:p-4 m-auto">
      {/* Menu */}
      <div className="menu w-3/4 h-full flex flex-col bg-gray-50">
        {/* Menu Header */}
        <div className="menu-header w-full h-fit flex flex-col sm:flex-row bg-black select-none relative sm:static">
          <img
            className="w-full sm:w-44 lg:w-52 object-cover"
            src={CDN_URL + cloudinaryImageId}
            alt="Restaurant Image"
          />
          {/* Menu Header Text Container */}
          <div className="flex flex-col p-4 sm:p-2 sm:m-2 gap-2 sm:static absolute bg-[rgba(0,0,0,0.7)] bottom-0 w-full">
            <h1 className="font-bold text-white text-wrap text-2xl md:text-3xl mb-1 sm:mb-1.5 md:mb-2 text-center sm:text-left">
              {name}
            </h1>
            <p className="text-gray-300 text-wrap text-sm md:text-base lg:text-lg- text-center sm:text-left">
              {cuisines.join(", ")}
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-white font-semibold flex items-center justify-center sm:justify-start">
              <span className="flex justify-center items-center bg-green-600 rounded-full lg:mr-2 lg:w-4.5 lg:h-4.5 mr-1.5 w-3.25 h-3.25 sm:w-3.5 sm:h-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.25 h-2.25 sm:w-2.5 sm:h-2.5 lg:h-3.25 lg:w-3.25"
                  viewBox="0 0 26 26"
                >
                  <path
                    fill="white"
                    d="M25.326 10.137a1.001 1.001 0 0 0-.807-.68l-7.34-1.066l-3.283-6.651c-.337-.683-1.456-.683-1.793 0L8.82 8.391L1.48 9.457a1 1 0 0 0-.554 1.705l5.312 5.178l-1.254 7.31a1.001 1.001 0 0 0 1.451 1.054L13 21.252l6.564 3.451a1 1 0 0 0 1.451-1.054l-1.254-7.31l5.312-5.178a.998.998 0 0 0 .253-1.024z"
                  />
                </svg>
              </span>
              {avgRating}&nbsp;({totalRatingsString.split(" ")[0]}) •{" "}
              {costForTwoMessage}
            </p>
            <p className="text-white font-semibold text-sm sm:text-base lg:text-lg text-center sm:text-left">
              Outlet{" "}
              <span className="text-gray-300 font-normal lg:ml-3 ml-1 sm:ml-2">
                {areaName}
              </span>
            </p>
            <p className="text-white font-semibold text-sm sm:text-base lg:text-lg text-center sm:text-left">
              {slaString.toLowerCase()}
            </p>
          </div>
        </div>
        {/* Menu Body */}
        <div className="menu-body shadow-md flex flex-col p-2 w-full">
          {categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card?.categoryId}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
