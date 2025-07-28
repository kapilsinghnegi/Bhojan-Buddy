export const LOGO_URL = "../../images/bhojan-buddy-light.png";
export const EMPTY_CART_URL = "../../images/empty-cart.png";
export const OFFLINE = "../../images/offline.png";

export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

const proxyUrl = "https://proxy.corsfix.com/?";

export const RESTAURANTS_API = navigator.userAgent.includes("Mobile")
  ? proxyUrl +
    `https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999`
  : proxyUrl +
    `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999`;

export const MENU_API = navigator.userAgent.includes("Mobile")
  ? proxyUrl +
    `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=`
  : proxyUrl +
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=`;
