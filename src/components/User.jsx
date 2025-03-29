import React, { useState, useEffect } from "react";
import UserContext from "../utils/UserContext";

const User = () => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    fetch(`https://api.github.com/users/kapilsinghnegi`)
      .then(res => res.json())
      .then(data => setUserInfo(data));
  }, []);

  return (
    <div className="user-card">
      <img className="w-24" src={userInfo.avatar_url} />
      <h2>Name: {userInfo.name}</h2>
      <h3>Location: {userInfo.location}</h3>
      <h4>Contact: @{userInfo.login}</h4>
      <UserContext.Consumer>
        {({ loggedInUser }) => (
          <h1 className="text-xl font-bold">{loggedInUser}</h1>
        )}
      </UserContext.Consumer>
    </div>
  );
};

export default User;
