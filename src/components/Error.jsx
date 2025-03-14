import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="p-4 m-4">
      <h1 className="text-2xl font-semibold">Oops!</h1>
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <h3 className="text-lg font-mono">
        {err.name} : {err.message}
      </h3>
    </div>
  );
};

export default Error;
