import React from "react";

const Contact = () => {
  return (
    <div className="w-1/2 m-auto flex flex-col items-center">
      <h1 className="font-bold text-4xl pt-4 pb-2 px-8 w-full text-center">
        Get in touch
      </h1>
      <h3 className="w-full font-semibold text-lg text-center text-gray-400 px-8 pb-4">
        Our friendly team would love to hear from you.
      </h3>
      <form className="w-full flex flex-col items-center px-8">
        <div className="px-2 w-full">
          <label htmlFor="full-name" className="font-semibold text-sm pl-2">
            Full Name
          </label>
          <div className="flex items-center border-2 border-gray-300 rounded-2xl px-2 py-1 mb-2 focus-within:border-blue-500">
            <svg
              className="w-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(173,184,194,0.8)"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path>
            </svg>
            <input
              id="full-name"
              type="text"
              className="focus:border-transparent focus:outline-none w-full"
              placeholder="Enter your Name"
            />
          </div>
        </div>
        <div className="px-2 w-full">
          <label htmlFor="email-id" className="font-semibold text-sm pl-2">
            Your email
          </label>
          <div className="flex items-center border-2 border-gray-300 rounded-2xl px-2 py-1 mb-2 focus-within:border-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(173,184,194,1)"
              className="w-4 mr-2"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
            </svg>
            <input
              id="email-id"
              type="email"
              className="focus:border-transparent focus:outline-none w-full"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="px-2 w-full">
          <textarea
            type="text"
            rows="5"
            placeholder="What's on your mind?"
            maxLength="250"
            className="border-2 border-gray-300 rounded-2xl px-2 py-1 mb-2 focus:border-blue-500 focus:outline-none resize-none w-full"
          ></textarea>
        </div>
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold my-2 self-end mr-4 transition-transform transform hover:scale-105">
          Get in touch
        </button>
      </form>
    </div>
  );
};

export default Contact;
