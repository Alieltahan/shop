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
    // Add Product
    addProduct: (state, action) => {
      // Getting Current Ccy & Arr of ccy
      const currentCcy = action.payload.currentCcy.currency;
      const priceDetails = action.payload.prices.filter(
        (price) => price.currency === `${currentCcy}`
      );
      // Getting Existing Product if any
      let existingCartProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      // Updating Quantity of existing Product.
      let existingProduct = state.products[existingCartProductIndex];
      if (existingProduct) {
        state.products[existingCartProductIndex] = {
          ...existingProduct,
          quantity: existingProduct.quantity + 1,
        };
        // If Not, Adding the new Product
      } else {
        state.products.push(action.payload);
      }
      // Updating the Amount & Product Counts.
      state.totalAmount += priceDetails[0].amount;
      state.totalCount++;
    },
    //
    // Decrement Product
    decrementProduct: (state, action) => {
      const currentCcy = action.payload.currentCcy.currency;
      const priceDetails = action.payload.prices.filter(
        (price) => price.currency === `${currentCcy}`
      );
      let existingCartProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      let existingProduct = state.products[existingCartProductIndex];
      state.products[existingCartProductIndex] = {
        ...existingProduct,
        quantity: existingProduct.quantity - 1,
      };
      state.totalCount--;
      state.totalAmount -= priceDetails[0].amount;
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
