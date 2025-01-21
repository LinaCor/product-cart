import { ADD_TO_CARD, CHANGE_MORE, CHANGE_LESS, DELETE_CAKE } from "./add-cake-actions"


export const addCakeReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CARD: {
      return [...state, action.item];
    }

    case CHANGE_MORE: {
      return state
    }

    case CHANGE_LESS: {
      return state
    }

    case DELETE_CAKE: {
      return state.filter(el => el.id !== action.id);
    }

    default: {
      return state
    }
  }
}