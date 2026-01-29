import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItem } from "../cart/cartSlice";

const ItemList = ({ items }) => {
  const [expandedItemId, setExpandedItemId] = useState(null);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const toggleExpand = (id) => {
    setExpandedItemId((prevId) => (prevId === id ? null : id)); // Toggle expansion
  };
  return (
    <ul className="item-list flex flex-col justify-center">
      {items.map((item) => (
        <li
          className="flex w-full justify-between gap-2 border-b-2 border-gray-200 py-4 last:border-none lg:py-5"
          key={item?.card?.info?.id}
          data-testid="foodItems"
        >
          {/* List Item - Left */}
          <div className="flex w-2/3 flex-col gap-1 px-2 select-none sm:w-3/4 md:w-4/5 lg:w-5/6">
            {/* Item Name */}
            <p className="text-sm font-medium sm:text-base lg:text-lg">
              {item?.card?.info?.name}
            </p>
            {/* Item Price */}
            <p className="text-xs font-medium sm:text-sm lg:text-base">
              ₹
              {(
                (item?.card?.info.price || item?.card?.info.defaultPrice) / 100
              ).toFixed(2)}
            </p>
            {/* Item Rating */}
            {item?.card?.info?.ratings?.aggregatedRating?.rating && (
              <p className="text-xs lg:text-sm">
                {item?.card?.info?.ratings?.aggregatedRating?.rating}⭐ (
                {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
              </p>
            )}
            {/* Item Description */}
            <p className="text-xs text-gray-500 lg:text-sm">
              {item?.card?.info?.description ? (
                item?.card?.info?.description.length < 200 ? (
                  <span>{item.card.info.description}</span>
                ) : (
                  <>
                    <span>
                      {expandedItemId === item?.card?.info?.id
                        ? item.card.info.description
                        : item.card.info.description
                            .split(" ")
                            .slice(0, 25)
                            .join(" ") + " ... "}
                    </span>
                    <button
                      className="ml-1.5 cursor-pointer border-none bg-none text-green-700"
                      onClick={() => toggleExpand(item?.card?.info?.id)}
                    >
                      {expandedItemId === item?.card?.info?.id
                        ? "Show less"
                        : "Show more"}
                    </button>
                  </>
                )
              ) : null}
            </p>
          </div>
          {/* List Item Right */}
          <div className="flex h-36 w-1/3 flex-col items-center justify-center sm:w-1/4 md:w-1/5 lg:w-1/6">
            {/* Item Image */}
            <img
              className="h-full w-full rounded-lg shadow-sm"
              alt="Item image"
              loading="lazy"
              src={
                item?.card?.info?.imageId
                  ? CDN_URL + item?.card?.info?.imageId
                  : "/images/no-image.svg"
              }
            />
            {/* Add to Cart */}
            <button
              className="md:y-0.5 m-[-10%] rounded-full bg-green-700 px-1.5 py-0.25 text-[10px] font-bold text-white shadow-sm hover:bg-green-600 sm:px-2 sm:py-0.75 sm:text-xs md:px-2.5 lg:px-3 lg:py-0.75 lg:text-sm cursor-pointer"
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
