import { ADD_TO_CARD, CHANGE_MORE, CHANGE_LESS, DELETE_CAKE } from "./add-cake-actions";
import { ORDER_RESET } from "../order/order-action";


export const addCakeReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CARD: {
      return [...state, action.item];
    }

    case CHANGE_MORE: {
      return state.map((el) =>
        el.id === action.id ? { ...el, quantity: el.quantity + 1 } : el
      );
    }

    case CHANGE_LESS: {
      return state.map((el) =>
        el.id === action.id ? { ...el, quantity: el.quantity - 1 } : el
      );
    }

    case DELETE_CAKE: {
      return state.filter(el => el.id !== action.id);
    }

    case ORDER_RESET: {
      return state = [];
    }

    default: {
      return state
    }
  }
}