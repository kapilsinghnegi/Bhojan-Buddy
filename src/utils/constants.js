export const LOGO_URL = "../../images/bhojan-buddy-light.png";
export const EMPTY_CART_URL = "../../images/empty-cart.png";
export const OFFLINE = "../../images/offline.png";

export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

const lat = 28.7040592;
const lng = 77.10249019999999;

export const RESTAURANTS_API = `https://bhojan-buddy-server.onrender.com/api/restaurants?lat=${lat}&lng=${lng}`;

export const MENU_API = `https://bhojan-buddy-server.onrender.com/api/menu?lat=${lat}&lng=${lng}&restaurantId=`;
