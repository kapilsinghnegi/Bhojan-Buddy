import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { RESTAURANTS_API, OFFLINE } from "../utils/constants.js";
import Shimmer from "./Shimmer.jsx";
import RestaurantCard from "./RestaurantCard.jsx";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch(RESTAURANTS_API);
    const data = await res.json();

    setListOfRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const onlineStatus = useOnlineStatus();

  // Offline Page
  if (!onlineStatus)
    return (
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-3xl mt-3 font-semibold">You are offline!</h1>
        <h2 className="text-xl font-semibold px-10 m-5">
          It seems there's a problem with your network. Please check your
          internet connection.
        </h2>
        <button
          className="px-4 py-2 font-semibold rounded-lg bg-black border-2 text-white transition-transform transform hover:scale-105"
          onClick={() => {
            document.location.reload();
          }}
        >
          Try again
        </button>
      </div>
    );

  // Loading Page
  return listOfRestaurants?.length === 0 ? (
    <>
      <div className="filter flex flex-col space-y-2 sm:space-y-4 w-11/12 py-0.5 px-2 sm:py-2 sm:px-6 sm:m-4 justify-center items-center">
        <div className="search-box w-4/5 flex overflow-hidden">
          <input
            type="text"
            className="search-input sm:text-base text-xs w-5/6 px-2 py-1 sm:px-4 sm:py-2 focus:outline-none focus:ring-0 border-2 rounded-l-md border-blue-500 border-r-transparent caret-blue-500"
            placeholder="Search for restaurants"
          />
          <button className="search-btn w-1/5 sm:px-4 sm:py-2 px-2 py-1 sm:text-base text-xs text-white border-r-transparent bg-blue-500 hover:bg-blue-600 hover:border-transparent active:bg-blue-700 font-semibold cursor-pointer border-2 border-blue-500 rounded-r-md">
            Search
          </button>
        </div>
        <div className="flex items-center font-semibold">
          <button className="filter-btn px-4 py-2 text-xs sm:text-base bg-green-600 hover:bg-green-700 active:bg-green-800 text-white rounded-3xl transition-transform transform hover:scale-105 cursor-pointer">
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <Shimmer />
    </>
  ) : (
    // Body Component
    <div className="body w-full h-auto flex flex-col justify-center items-start">
      <div className="filter flex flex-col space-y-2 sm:space-y-4 w-11/12 py-0.5 px-2 sm:py-2 sm:px-6 sm:m-4 justify-center items-center">
        {/* Search Functionality */}
        <form className="search-box w-4/5 flex overflow-hidden">
          <input
            type="text"
            data-testid="searchInput"
            className="search-input sm:text-base text-xs w-5/6 px-2 py-1 sm:px-4 sm:py-2 focus:outline-none focus:ring-0 border-2 rounded-l-md border-blue-500 border-r-transparent caret-blue-500"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            placeholder="Search for restaurants"
          />
          <button
            className="search-btn w-1/5 sm:px-4 sm:py-2 px-2 py-1 sm:text-base text-xs text-white border-r-transparent bg-blue-500 hover:bg-blue-600 hover:border-transparent active:bg-blue-700 font-semibold cursor-pointer border-2 border-blue-500 rounded-r-md"
            onClick={e => {
              e.preventDefault();
              const filteredRestaurants = listOfRestaurants.filter(res =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </form>
        <div className="flex items-center font-semibold">
          {/* Top Rated Restaurants */}
          <button
            className="filter-btn px-3 py-1 text-xs sm:text-base bg-green-600 hover:bg-green-700 active:bg-green-800 text-white rounded-3xl transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                res =>
                  res.info.avgRating > 4 &&
                  res.info.totalRatingsString.includes("K")
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>

          {/* Type Username for displaying on nav */}
          <div className="mx-4 hidden sm:inline-block">
            <label className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
              Username:
            </label>
            &nbsp;
            <input
              className="border-2 border-black rounded-md px-2 py-1 sm:px-4 sm:py-2 font-semibold text-xs sm:text-sm md:text-base lg:text-lg"
              placeholder="Type a username"
              onChange={e => {
                setUserName(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {filteredRestaurants ? (
        <h1 className="hidden sm:block text-sm sm:text-xl md:text-2xl lg:text-3xl font-semibold px-4 sm:px-12 md:px-16 lg:px-30">
          {filteredRestaurants?.length} restaurants
        </h1>
      ) : null}
      {/* Restaurant Cards Container */}
      <div className="res-container grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 justify-center lg:px-20 sm:px-10 px-4 w-full">
        {filteredRestaurants?.map(res => (
          <Link key={res?.info?.id} to={"/restaurants/" + res?.info?.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
