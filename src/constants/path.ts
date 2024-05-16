const IS_PRODUCTION = true;
const BASE_URL = IS_PRODUCTION ? "/react-shopping-cart/dist" : "/dist/index.html";

export const PATH = {
  cart: BASE_URL + "/",
  orderSummary: BASE_URL + "/order-summary",
};
