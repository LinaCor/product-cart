import { ORDER_OPEN, ORDER_CLOSE, ORDER_RESET } from "./order-action";

export const orderCake = (state = false, action) => {
  switch (action.type) {

    case ORDER_OPEN: {
      return !state;
    }

    case ORDER_CLOSE:
    case ORDER_RESET: {
      return !state;
    }

    default: {
      return state;
    }
  }
}