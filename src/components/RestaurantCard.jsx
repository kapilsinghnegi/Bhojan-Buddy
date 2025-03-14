import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = props => {
  const { resData } = props;
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
      className="res-card m-2 p-4 w-72 h-84 rounded-lg font-semibold flex flex-col hover:shadow-lg transition-shadow duration-300"
    >
      <div
        className="relative res-logo h-40 w-full rounded-lg bg-cover 
        bg-center mb-2 bg-gray-200"
        style={{
          backgroundImage: `url(${CDN_URL + cloudinaryImageId})`,
          boxShadow: "inset 0px 0px 30px 30px rgba(0, 0, 0, 0.4)",
        }}
        alt="Restaurant Logo"
      >
        {aggregatedDiscountInfoV3 && (
          <div className="text-white absolute bottom-1 font-extrabold text-lg left-2.5 ">
            {aggregatedDiscountInfoV3.header +
              " " +
              aggregatedDiscountInfoV3.subHeader}
          </div>
        )}
      </div>
      <h3 className="font-bold text-xl mb-1 line-clamp-1">{name}</h3>
      <div className="flex items-center text-lg justify-between mb-1">
        <h4 className="flex items-center justify-between rounded">
          <div className="flex justify-center items-center bg-green-600 p-1 rounded-full mr-1">
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
          </div>
          {avgRating}&nbsp;
          <span className="font-normal">({totalRatingsString})</span>
        </h4>
        <h4>{slaString}</h4>
      </div>
      <h4 className="text-gray-500 mb-1 line-clamp-1">{cuisines.join(", ")}</h4>
      <h4 className="text-gray-500 mb-1">{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
