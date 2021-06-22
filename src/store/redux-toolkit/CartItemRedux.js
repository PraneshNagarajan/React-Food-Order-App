import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  item: [],
  total: 0,
};

let existingItems;
let index;

const CartItemSlice = createSlice({
  name: "cart-items",
  initialState: initialValues,
  reducers: {
    addItems(state, action) {
      index = state.item.findIndex((item) => item.id === action.payload.id);
      existingItems = state.item[index];
      if (index > -1) {
        state.item[index] = {
          ...existingItems,
          amount:
            existingItems.amount + existingItems.price * action.payload.size,
          size: existingItems.size + action.payload.size,
        };
      } else {
        state.item.push({
          ...action.payload,
          amount: action.payload.price * action.payload.size,
        });
      }
      state.total = state.item.reduce((prev, current) => {
        return prev + current.amount;
      }, 0);
    },
    removeItems(state, action) {
      index = state.item.findIndex((item) => item.id === action.payload.id);
      existingItems = state.item[index];
      console.log(state.total)
      if (existingItems.size > 1) {
        state.item[index] = {
          ...existingItems,
          amount:
            existingItems.amount - existingItems.price * action.payload.size,
          size: existingItems.size - action.payload.size,
        };
      } else {
        state.item.pop(index);
      }
      state.total = state.item.reduce((prev, current) => {
        return prev + current.amount;
      }, 0);
      console.log(state.total)
    },
  },
});

export const CartItemActions = CartItemSlice.actions;

export default CartItemSlice.reducer;
