import { DELETE_TYPE, EDIT_TYPE, INSERT_TYPE } from "./type";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case INSERT_TYPE:
      return [...state, payload];
    case DELETE_TYPE:
      return state.filter((item) => item.id !== payload);
    case EDIT_TYPE:
      return state.map((item) => (item.id === payload.id ? payload : item));
    default:
      return state;
  }
};
