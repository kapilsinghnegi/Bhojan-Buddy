import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../../utils/constants.js";
import UserContext from "../../features/user/UserContext.js";
import useOnlineStatus from "../../utils/useOnlineStatus.js";
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  const homePageReload = () => {
    window.location.href = "/";
  };

  return (
    <div className="header fixed top-0 left-0 z-999 flex w-full flex-nowrap items-center justify-between bg-white p-2 shadow-md sm:p-3">
      <div className="logo-container w-1/12 min-w-[36px] sm:w-16">
        <Link to="/" onClick={homePageReload}>
          <img
            className="logo mx-2 w-4/5 sm:mx-5 sm:w-3/4 md:w-full"
            src={LOGO_URL}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="nav-items flex w-5/6 justify-end sm:w-11/12">
        <ul className="m-1 flex flex-wrap items-center justify-end space-x-2 p-1 text-xs font-medium sm:space-x-4 sm:text-sm md:space-x-6 md:text-base lg:space-x-8 lg:text-lg">
          <li className="hidden font-semibold text-black md:mr-10 md:inline-block lg:mr-20">
            Hello,&nbsp;{loggedInUser}!
          </li>
          {/* Home */}
          <li className="hover:underline">
            <NavLink to="/" onClick={homePageReload}>
              Home
            </NavLink>
          </li>
          {/* About */}
          <li className="hover:underline">
            <NavLink to="/about">About</NavLink>
          </li>
          {/* Contact */}
          <li className="hover:underline">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          {/* Cart */}
          <li className="flex items-center hover:underline">
            <NavLink to="/cart" className="peer relative">
              <span className="sr-only">Cart</span>
              <MdShoppingCart className="not-sr-only size-4 md:size-6" />
              <span className="absolute top-0 -right-0.5 sm:-right-1 flex size-2 sm:size-3 items-center justify-center rounded-full border bg-zinc-50 font-bold text-black peer-[.active]:text-green-700 sm:text-[8px] text-[5px]">
                {cartItems.length}
              </span>
            </NavLink>
          </li>
          {/* Login Button */}
          <li>
            <Link to="/">
              <button
                className={`login flex items-center justify-center rounded-md px-1.5 py-0.75 text-[10px] text-white sm:px-2 sm:py-1 sm:text-xs md:px-2.5 md:py-1.25 md:text-sm lg:px-3 lg:py-1.5 lg:text-base ${
                  btnName === "Login"
                    ? "bg-green-700 hover:bg-green-600"
                    : "bg-red-600 hover:bg-red-700"
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
          {/* Online Status */}
          <span className="hidden text-xs select-none hover:animate-ping sm:inline sm:text-sm md:text-base">
            {onlineStatus ? "🟢" : "🔴"}
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Header;
