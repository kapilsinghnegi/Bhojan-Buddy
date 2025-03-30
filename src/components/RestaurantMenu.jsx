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
    <div className="container flex w-full h-full justify-center items-center bg-white p-5 m-auto">
      <div className="menu w-3/4 h-full flex flex-col bg-gray-50">
        <div className="menu-header w-full flex bg-black h-52 select-none">
          <img
            className="w-44"
            src={CDN_URL + cloudinaryImageId}
            alt="Restaurant Image"
          />
          <div className="flex flex-col p-2 m-2 gap-1.5">
            <h1 className="font-bold text-white text-wrap text-4xl mb-2.5">
              {name}
            </h1>
            <p className="text-gray-300 text-wrap">{cuisines.join(", ")}</p>
            <p className="text-lg text-white font-semibold">
              <span className="inline-flex justify-center items-center bg-green-600 p-1 rounded-full mr-1 w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3"
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
            <p className="text-white font-semibold">
              Outlet{" "}
              <span className="text-gray-300 font-normal ml-3">{areaName}</span>
            </p>
            <p className="text-white font-semibold">{slaString}</p>
          </div>
        </div>
        <div className="menu-body shadow-md flex flex-col p-4 w-full">
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
