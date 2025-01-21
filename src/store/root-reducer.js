import { combineReducers } from "redux";
import { addCakeReducer } from "./add-cake/add-cake-reducer";

export const rootReducer = combineReducers({
  cakeList: addCakeReducer,
});