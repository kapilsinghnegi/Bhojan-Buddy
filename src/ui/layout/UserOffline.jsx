import React from "react";

const UserOffline = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <h1 className="text-3xl mt-3 font-semibold">You are offline!</h1>
      <h2 className="text-xl font-semibold px-10 m-5">
        It seems there's a problem with your network. Please check your internet
        connection.
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
};

export default UserOffline;
