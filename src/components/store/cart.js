import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    // Actions => action handler
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {},
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;

export const SelectorTotalProductsNum = (state) => {
  // Guard Clause
  if (state.length === 0) return;
  return state
    .map((product) => product.quantity)
    .reduce((acc, cur) => acc + cur);
};
