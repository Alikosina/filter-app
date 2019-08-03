import { combineReducers } from "redux";
import ordersReducer from "./orders/ordersReducer";
import productsReducer from "./products/productsReducer";

export default combineReducers({
  orders: ordersReducer,
  products: productsReducer
});
