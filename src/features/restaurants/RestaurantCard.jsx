import React from "react";
import { CDN_URL } from "../../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    avgRatingString: avgRating,
    areaName,
    cloudinaryImageId,
    cuisines,
    name,
    totalRatingsString,
    aggregatedDiscountInfoV3,
  } = resData?.info;
  const { slaString } = resData?.info?.sla;

  return (
    <div
      data-testid="resCard"
      className="res-card m-1 flex w-full max-w-xs flex-col gap-y-2 rounded-lg p-2 font-semibold transition-transform duration-300 hover:scale-90 md:m-2 md:max-w-sm md:p-4 lg:m-4 lg:max-w-md lg:p-6"
    >
      <div className="res-logo relative h-24 w-full rounded-lg bg-gray-200 bg-cover bg-center md:h-32 lg:h-40">
        <img
          className="h-full w-full rounded-lg object-cover"
          src={CDN_URL + cloudinaryImageId}
          loading="lazy"
          alt="Restaurant Logo"
        />
        <span className="absolute bottom-0 h-1/3 w-full bg-linear-to-b from-transparent to-[rgba(0,0,0,0.5)]"></span>
        {aggregatedDiscountInfoV3 && (
          <div className="absolute bottom-2 left-3 text-xs font-extrabold text-white sm:text-sm md:text-base lg:text-lg">
            {aggregatedDiscountInfoV3?.header}{" "}
            {aggregatedDiscountInfoV3?.subHeader}
          </div>
        )}
      </div>
      <h3 className="line-clamp-1 text-sm font-bold sm:text-base md:text-lg lg:text-xl">
        {name}
      </h3>
      <div className="flex items-center justify-between">
        <h4 className="flex items-center text-[10px] sm:text-sm md:text-base lg:text-lg">
          <div className="mr-1 flex items-center justify-center rounded-full bg-green-600 p-0.5 sm:p-0.75 md:p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-1.5 sm:w-2 md:w-2.5"
              viewBox="0 0 26 26"
            >
              <path
                fill="white"
                d="M25.326 10.137a1.001 1.001 0 0 0-.807-.68l-7.34-1.066l-3.283-6.651c-.337-.683-1.456-.683-1.793 0L8.82 8.391L1.48 9.457a1 1 0 0 0-.554 1.705l5.312 5.178l-1.254 7.31a1.001 1.001 0 0 0 1.451 1.054L13 21.252l6.564 3.451a1 1 0 0 0 1.451-1.054l-1.254-7.31l5.312-5.178a.998.998 0 0 0 .253-1.024z"
              />
            </svg>
          </div>
          {avgRating}&nbsp;
          <span className="font-normal">({totalRatingsString})</span>
        </h4>
        <h4 className="text-[10px] sm:text-sm md:text-base lg:text-lg">
          {slaString}
        </h4>
      </div>
      <h4 className="line-clamp-1 text-xs text-gray-500 capitalize sm:text-sm md:text-base lg:text-lg">
        {cuisines.join(", ")}
      </h4>
      <h4 className="line-clamp-1 text-xs text-gray-500 capitalize sm:text-sm md:text-base lg:text-lg">
        {areaName}
      </h4>
    </div>
  );
};

export default RestaurantCard;
