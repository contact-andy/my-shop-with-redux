import { ActionType } from "../constants/action-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Laptop",
      category: "Lenovo",
    },
  ],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
