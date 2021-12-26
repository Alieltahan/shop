import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    totalAmount: 0,
    totalCount: 0,
    miniCartToggle: false,
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
      // Getting Existing Product Index if any
      let existingCartProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      // Updating Quantity of existing Product.
      if (existingCartProductIndex >= 0) {
        let existingProduct = state.products[existingCartProductIndex];
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
    //
    // Toggle Mini Cart
    miniCartToggle: (state, action) => {
      state.miniCartToggle = !state.miniCartToggle;
    },
    //
    // Update Products Total While Changing Ccy
    changeTotalCcy: (state, action) => {
      const { StoreProducts } = action.payload;
      const { newCcy } = action.payload;
      let newAmount = StoreProducts.map((product) =>
        product.prices
          .filter((price) => price.currency === `${newCcy}`)
          .map((price) => price.amount)
      );
      let TotalAmount = newAmount
        .map((arr) => arr.shift())
        .reduce((acc, cur) => acc + cur);
      state.totalAmount = TotalAmount;
    },
  },
});

export const { addProduct, decrementProduct, miniCartToggle, changeTotalCcy } =
  cartSlice.actions;
export default cartSlice.reducer;
