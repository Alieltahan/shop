import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    totalAmount: 0,
    totalCount: 0,
  },
  reducers: {
    // Actions => action handler
    addProduct: (state, action) => {
      let existingCartProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      let existingProduct = state.products[existingCartProductIndex];
      if (existingProduct) {
        state.products[existingCartProductIndex] = {
          ...existingProduct,
          quantity: existingProduct.quantity + 1,
        };
      } else {
        state.products.push(action.payload);
      }
      state.totalCount++;
    },
    decrementProduct: (state, action) => {
      let existingCartProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      let existingProduct = state.products[existingCartProductIndex];
      state.products[existingCartProductIndex] = {
        ...existingProduct,
        quantity: existingProduct.quantity - 1,
      };
      state.totalCount--;
      if (existingProduct.quantity === 1)
        state.products = state.products.filter(
          (product) => product.id !== existingProduct.id
        );
    },
  },
});

export const { addProduct, removeProduct, decrementProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
