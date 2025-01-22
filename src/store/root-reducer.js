import { combineReducers } from "redux";
import { addCakeReducer } from "./add-cake/add-cake-reducer";
import { orderCake } from "./order/order-reducer";

export const rootReducer = combineReducers({
  cakeList: addCakeReducer,
  order: orderCake,
});