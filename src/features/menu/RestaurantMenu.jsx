import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu.jsx";
import RestaurantCategory from "./RestaurantCategory.jsx";
import useRestaurantMenu from "../../utils/useRestaurantMenu.js";
import { CDN_URL } from "../../utils/constants.js";
import { ChevronLeft } from "lucide-react";

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
    (category) =>
      category?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  );

  return (
    // Container
    <div className="container m-auto flex h-full w-full items-center justify-center bg-white p-2 lg:p-4">
      {/* Menu */}
      <div className="menu relative h-full w-3/4 flex-col">
        <Link to="/" className="absolute top-1 left-1 p-0.75 rounded-full bg-white sm:p-2 hover:bg-gray-100 z-100">
          <ChevronLeft className="cursor-pointer" size={20} />
        </Link>
        {/* Menu Header */}
        <div className="menu-header relative flex h-fit w-full flex-col bg-black select-none sm:static sm:flex-row">
          <img
            className="w-full object-cover sm:w-44 lg:w-52"
            src={CDN_URL + cloudinaryImageId}
            alt="Restaurant Image"
          />
          {/* Menu Header Text Container */}
          <div className="absolute bottom-0 flex w-full flex-col gap-2 bg-[rgba(0,0,0,0.7)] p-4 sm:static sm:m-2 sm:p-2">
            {/* Restaurant Name */}
            <h1 className="mb-1 text-center text-2xl font-bold text-wrap text-white sm:mb-1.5 sm:text-left md:mb-2 md:text-3xl">
              {name}
            </h1>
            {/* Cuisines */}
            <p className="lg:text-lg- text-center text-sm text-wrap text-gray-300 sm:text-left md:text-base">
              {cuisines.join(", ")}
            </p>
            {/* Ratings and Cost */}
            <p className="flex items-center justify-center text-sm font-semibold text-white sm:justify-start sm:text-base lg:text-lg">
              <span className="mr-1.5 flex h-3.25 w-3.25 items-center justify-center rounded-full bg-green-600 sm:h-3.5 sm:w-3.5 lg:mr-2 lg:h-4.5 lg:w-4.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2.25 w-2.25 sm:h-2.5 sm:w-2.5 lg:h-3.25 lg:w-3.25"
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
            {/* Outlet Details */}
            <p className="text-center text-sm font-semibold text-white sm:text-left sm:text-base lg:text-lg">
              Outlet{" "}
              <span className="ml-1 font-normal text-gray-300 sm:ml-2 lg:ml-3">
                {areaName}
              </span>
            </p>
            {/* SLA */}
            <p className="text-center text-sm font-semibold text-white sm:text-left sm:text-base lg:text-lg">
              {slaString.toLowerCase() || "25-30 mins"}
            </p>
          </div>
        </div>
        {/* Menu Body */}
        <div className="menu-body flex w-full flex-col p-2 shadow-md">
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
