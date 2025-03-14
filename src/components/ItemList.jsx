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
          className="last:border-none border-b-2 border-gray-200 py-5 flex justify-between"
          key={item?.card?.info?.id}
          data-testid="foodItems"
        >
          <div className="w-5/6 flex flex-col gap-1 select-none">
            <p className="font-medium text-xl">{item?.card?.info?.name}</p>
            <p className="font-medium">
              ₹
              {(
                (item?.card?.info.price || item?.card?.info.defaultPrice) / 100
              ).toFixed(2)}
            </p>
            {item?.card?.info?.ratings?.aggregatedRating?.rating && (
              <p className="text-sm">
                {item?.card?.info?.ratings?.aggregatedRating?.rating}⭐ (
                {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
              </p>
            )}
            <p className="text-gray-500">{item?.card?.info.description}</p>
          </div>
          <div className="flex flex-col justify-center items-center w-1/6 h-36">
            <img
              className="rounded-lg w-full h-full"
              alt="Item image"
              src={CDN_URL + item?.card?.info?.imageId}
            />
            <button
              className="text-white h-1/5 m-[-10%] px-4 bg-green-500 hover:bg-green-600 font-bold rounded-lg"
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
