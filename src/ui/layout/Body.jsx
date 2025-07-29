import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "../components/Shimmer.jsx";
import RestaurantCard from "../../features/restaurants/RestaurantCard.jsx";
import useOnlineStatus from "../../utils/useOnlineStatus.js";
import UserContext from "../../features/user/UserContext.js";
import UserOffline from "./UserOffline.jsx";
import { RESTAURANTS_API } from "../../utils/constants.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch(RESTAURANTS_API);
      const data = await res.json();

      const restaurants =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restaurants) {
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      } else {
        throw new Error("Restaurants data not found in the API response");
      }
    } catch (error) {
      console.error("Failed to fetch restaurants: ", error);
      setListOfRestaurants([]);
      setFilteredRestaurants([]);
    }
  }

  const searchRestaurants = (e) => {
    e.preventDefault();
    const filteredRestaurants = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  const onlineStatus = useOnlineStatus();

  // Offline Page
  if (!onlineStatus) return <UserOffline />;

  // Loading Page
  return listOfRestaurants?.length === 0 ? (
    <>
      <div className="flex w-11/12 flex-col items-center justify-center space-y-2 px-2 py-0.5 filter sm:m-4 sm:space-y-4 sm:px-6 sm:py-2">
        <div className="search-box flex w-4/5 overflow-hidden">
          <input
            type="text"
            className="search-input w-5/6 rounded-l-md border-2 border-blue-500 border-r-transparent px-2 py-1 text-xs caret-blue-500 focus:ring-0 focus:outline-none sm:px-4 sm:py-2 sm:text-base"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for restaurants"
          />
          <button className="search-btn w-1/5 cursor-pointer rounded-r-md border-2 border-blue-500 border-r-transparent bg-blue-500 px-2 py-1 text-xs font-semibold text-white hover:border-transparent hover:bg-blue-600 active:bg-blue-700 sm:px-4 sm:py-2 sm:text-base">
            Search
          </button>
        </div>
      </div>
      <Shimmer />
    </>
  ) : (
    // Body Component
    <div className="body flex h-auto w-full flex-col items-start justify-center">
      <div className="flex w-11/12 flex-col items-center justify-center space-y-2 px-2 py-0.5 filter sm:m-4 sm:space-y-4 sm:px-6 sm:py-2">
        {/* Search Functionality */}
        <form className="search-box flex w-4/5 overflow-hidden">
          <input
            type="text"
            data-testid="searchInput"
            className="search-input w-5/6 rounded-l-md border-2 border-blue-500 border-r-transparent px-2 py-1 text-xs caret-blue-500 focus:ring-0 focus:outline-none sm:px-4 sm:py-2 sm:text-base"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for restaurants"
          />
          <button
            className="search-btn w-1/5 cursor-pointer rounded-r-md border-2 border-blue-500 border-r-transparent bg-blue-700 px-2 py-1 text-xs font-semibold text-white hover:border-transparent hover:bg-blue-600 active:bg-blue-600 sm:px-4 sm:py-2 sm:text-base"
            onClick={(e) => searchRestaurants(e)}
          >
            Search
          </button>
        </form>
        <div className="flex items-center font-semibold">
          {/* Top Rated Restaurants */}
          <button
            className="filter-btn transform cursor-pointer rounded-3xl bg-green-700 px-3 py-1 text-xs text-white transition-transform hover:scale-105 hover:bg-green-600 active:bg-green-800 sm:text-base"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) =>
                  res.info.avgRating > 4 &&
                  res.info.totalRatingsString.includes("K"),
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>

          {/* Type Username for displaying on nav */}
          <div className="mx-4 hidden sm:inline-block">
            <label className="text-xs font-semibold sm:text-sm md:text-base lg:text-lg">
              Username:
            </label>
            &nbsp;
            <input
              className="rounded-md border-2 border-black px-2 py-1 text-xs font-semibold sm:text-sm md:text-base lg:text-lg"
              placeholder="Type a username"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {filteredRestaurants ? (
        <h1 className="hidden px-4 text-sm font-semibold sm:block sm:px-12 sm:text-xl md:px-16 md:text-2xl lg:px-30 lg:text-3xl">
          {filteredRestaurants?.length} restaurants
        </h1>
      ) : null}
      {/* Restaurant Cards Container */}
      <div className="res-container grid w-full grid-cols-2 justify-center px-4 sm:grid-cols-3 sm:px-10 lg:px-20 xl:grid-cols-4">
        {filteredRestaurants?.map((res) => (
          <Link key={res?.info?.id} to={"/restaurants/" + res?.info?.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
