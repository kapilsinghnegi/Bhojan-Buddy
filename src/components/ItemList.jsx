import React from "react";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = item => {
    dispatch(addItem(item));
  };

  return (
    <ul className="item-list flex flex-col justify-center">
      {items.map(item => (
        <li
          className="last:border-none border-b-2 border-gray-200 py-4 lg:py-5 flex justify-between w-full gap-2"
          key={item?.card?.info?.id}
          data-testid="foodItems"
        >
          <div className="w-2/3 sm:w-3/4 md:w-4/5 lg:w-5/6 flex flex-col gap-1 px-2 select-none">
            {/* List Item - Left */}
            <p className="font-medium text-sm sm:text-base lg:text-lg">
              {item?.card?.info?.name}
            </p>
            <p className="font-medium text-xs sm:text-sm lg:text-base">
              ₹
              {(
                (item?.card?.info.price || item?.card?.info.defaultPrice) / 100
              ).toFixed(2)}
            </p>
            {item?.card?.info?.ratings?.aggregatedRating?.rating && (
              <p className="text-xs lg:text-sm">
                {item?.card?.info?.ratings?.aggregatedRating?.rating}⭐ (
                {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
              </p>
            )}
            <p className="text-gray-500 text-xs lg:text-sm">
              {item?.card?.info.description}
            </p>
          </div>
          {/* List Item Right */}
          <div className="flex flex-col justify-center items-center w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 h-36">
            <img
              className="rounded-lg w-full h-full shadow-sm"
              alt="Item image"
              loading="lazy"
              src={CDN_URL + item?.card?.info?.imageId}
            />
            <button
              className="text-white bg-green-500 hover:bg-green-600 font-bold rounded-full m-[-10%] text-[10px] sm:text-xs lg:text-sm px-1.5 py-0.25 sm:px-2 sm:py-0.75 md:px-2.5 md:y-0.5 lg:px-3 lg:py-0.75 shadow-sm"
              onClick={() => handleAddItem(item)}
            >
              ADD
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
