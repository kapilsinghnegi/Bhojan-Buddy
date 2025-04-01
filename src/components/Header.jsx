import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector(store => store.cart.items);

  const homePageReload = () => {
    window.location.href = "/";
  };

  return (
    <div className="header fixed top-0 left-0 z-10 flex flex-nowrap justify-between items-center p-2 sm:p-3 w-full shadow-md bg-white">
      <div className="logo-container w-1/12 sm:w-16 min-w-[36px]">
        <Link to="/" onClick={homePageReload}>
          <img
            className="logo w-4/5 sm:w-3/4 md:w-full mx-2 sm:mx-5"
            src={LOGO_URL}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="nav-items w-5/6 sm:w-11/12 flex justify-end">
        <ul className="flex flex-wrap font-medium items-center justify-end p-1 m-1 space-x-2 text-xs sm:space-x-4 sm:text-sm md:space-x-6 md:text-base lg:space-x-8 lg:text-lg">
          <li className="font-semibold text-black hidden md:inline-block md:mr-10 lg:mr-20">
            Hello,&nbsp;{loggedInUser}!
          </li>
          <li className="hover:underline">
            <NavLink to="/" onClick={homePageReload}>
              Home
            </NavLink>
          </li>
          <li className="hover:underline">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hover:underline">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:underline flex items-center">
            <Link to="/cart">
              <svg
                className="sm:w-4 md:w-4.75 w-3.75 lg:w-5.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path>
              </svg>
            </Link>
            <span className="font-bold text-[8px] sm:text-xs text-black">
              ({cartItems.length} items)
            </span>
          </li>
          <li>
            <Link to="/">
              <button
                className={`login rounded-md flex justify-center items-center text-[10px] px-1.5 py-0.75 sm:px-2 sm:py-1 sm:text-xs md:px-2.5 md:py-1.25 md:text-sm lg:px-3 lg:py-1.5 lg:text-base text-white ${
                  btnName === "Login"
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-red-500 hover:bg-red-600"
                }`}
                onClick={() => {
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login");
                }}
              >
                {btnName}
              </button>
            </Link>
          </li>
          <span className="hover:animate-ping text-xs sm:text-sm md:text-base select-none hidden sm:inline">
            {onlineStatus ? "🟢" : "🔴"}
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Header;
