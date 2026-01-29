export const LOGO_URL = "../../images/bhojan-buddy-light.png";
export const EMPTY_CART_URL = "../../images/empty-cart.png";
export const OFFLINE = "../../images/offline.png";

export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

const lat = 28.7040592;
const lng = 77.10249019999999;

export const RESTAURANTS_API = `${import.meta.env.VITE_RESTAURANTS_API}?lat=${lat}&lng=${lng}`;

export const MENU_API = `${import.meta.env.VITE_MENU_API}?lat=${lat}&lng=${lng}&restaurantId=`;
