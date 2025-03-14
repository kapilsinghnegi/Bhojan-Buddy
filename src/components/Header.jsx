import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector(store => store.cart.items);

  return (
    <div className="header fixed top-0 left-0 right-0 z-10 flex justify-between p-3 items-center w-full shadow-md mb-2 bg-white">
      <div className="logo-container w-20">
        <Link to="/">
          <img className="logo w-full mx-5" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items w-11/12">
        <ul className="flex font-medium items-center justify-end p-4 m-4 space-x-5 text-xl">
          <li className="font-bold text-black basis-96 px-3">
            Hello, {loggedInUser}!
          </li>
          <li className="hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:underline">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:underline">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li>
            <Link to="/">
              <button
                className="login rounded-md flex justify-center items-center text-black hover:underline"
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
          <span className="hover:animate-ping text-xs select-none ">
            {onlineStatus ? "🟢" : "🔴"}
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Header;
