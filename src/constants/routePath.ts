const IS_PRODUCTION = true;
const BASE_URL = IS_PRODUCTION ? "/react-shopping-cart/dist" : "/dist/index.html";

export const ROUTE_PATH = {
  cart: BASE_URL + "/",
  checkout: BASE_URL + "/checkout",
};
