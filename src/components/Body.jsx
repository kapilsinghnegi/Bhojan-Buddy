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
  if (!onlineStatus)
    return (
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-3xl mt-3 font-semibold">You are offline!</h1>
        <h2 className="text-xl font-semibold">
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

  return listOfRestaurants.length === 0 ? (
    <>
      <div className="filter flex py-2 px-6 m-4 justify-center">
        <div className="search-box flex border-2 border-solid border-blue-500 rounded-md overflow-hidden mx-2">
          <input
            type="text"
            className="search-input px-4 py-2 focus:outline-none focus:ring-0 "
            placeholder="Search for restaurants"
            size="50"
          />
          <button className="search-btn px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 font-semibold">
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button className="filter-btn font-semibold px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-3xl transition-transform transform hover:scale-105">
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <Shimmer />
    </>
  ) : (
    <div className="body">
      <div className="filter flex py-2 px-6 m-4 justify-center">
        <div className="search-box flex border-2 border-solid border-blue-500 caret-blue-500 rounded-md overflow-hidden mx-2">
          <input
            type="text"
            data-testid="searchInput"
            className="search-input px-4 py-2 focus:outline-none focus:ring-0"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            placeholder="Search for restaurants"
            size="50"
          />
          <button
            className="search-btn px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 font-semibold transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter(res =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
            onKeyDown={e => {
              const filteredRestaurants = listOfRestaurants.filter(res =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center font-semibold">
          <button
            className="filter-btn px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-3xl transition-transform transform hover:scale-105 cursor-pointer"
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
          <div className="mx-4">
            <label className="font-semibold">Username:</label>&nbsp;
            <input
              className="border-2 border-black rounded-md px-4 py-2 font-semibold"
              placeholder="Type a username"
              onChange={e => {
                loggedInUser: setUserName(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <h1 className="text-3xl mx-4 font-semibold px-24">
        {filteredRestaurants.length} restaurants
      </h1>
      <div className="res-container grid grid-cols-4 px-20">
        {filteredRestaurants.map(res => (
          <Link key={res?.info?.id} to={"/restaurants/" + res?.info?.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
