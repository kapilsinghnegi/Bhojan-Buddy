import { useState, useEffect } from "react";
import { MENU_API } from "./constants.js";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const res = await fetch(MENU_API + resId);
    const data = await res.json();
    setResInfo(data?.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
