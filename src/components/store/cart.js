import { createSlice } from '@reduxjs/toolkit';

// initialState
const initialState = {
  products: [],
  totalAmount: 0,
  totalCount: 0,
  miniCartOpen: false,
  cartOverlay: {},
  productAdded: false,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Actions => action handler
    // Add Product
    addProduct: (state, action) => {
      // Getting Current Ccy & Arr of ccy
      const { id, prices, currency } = action.payload;
      const priceDetails = prices.filter(
        (price) => price.currency === `${currency}`
      );
      // Getting Existing Product Index if any
      let existingCartProductIndex = state.products.findIndex(
        (product) => product.id === id
      );
      // Updating Quantity of existing Product.
      let existingProduct = state.products[existingCartProductIndex];
      if (existingCartProductIndex >= 0) {
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
      const { prices, currency, id } = action.payload;
      const priceDetails = prices.filter(
        (price) => price.currency === `${currency}`
      );
      let existingCartProductIndex = state.products.findIndex(
        (product) => product.id === id
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
      state.miniCartOpen = !state.miniCartOpen;
    },
    //
    // Update Products Total Amount While Changing Ccy
    changeTotalCcy: (state, action) => {
      const { StoreProducts, newCcy } = action?.payload;
      // Guard Clause if changing the Ccy & No Products in Cart.
      if (StoreProducts.length === 0) return;
      // Getting the Quantity of Each Product.
      let ProductQuantity = StoreProducts?.map((product) => product.quantity);
      // Getting the Amount of Each Product.
      let newAmount = StoreProducts.map((product, i) =>
        product.prices
          // Getting the amount based on the new Ccy
          .filter((price) => price?.currency === `${newCcy}`)
          // Multiple The Price of Eacy Product x Quantity using Index in each new loop for Product Quantity
          .map((price) => {
            return price?.amount * ProductQuantity[i];
          })
      );
      let TotalAmount = newAmount
        ?.map((arr) => arr.shift())
        .reduce((acc, cur) => acc + cur);
      state.totalAmount = TotalAmount;
    },
    //
    // Close cartOverlay
    cartOverlayClose: (state, action) => {
      state.cartOverlay = {};
    },
    // Opening cartOverlay & assign prod.id
    setCartOverlayProd: (state, action) => {
      state.cartOverlay = action.payload;
    },
    //
    // Product Added Notifcation
    productAddedToggle: (state, action) => {
      state.productAdded = !state.productAdded;
    },
  },
});

export const {
  addProduct,
  decrementProduct,
  miniCartToggle,
  changeTotalCcy,
  cartOverlayClose,
  setCartOverlayProd,
  productAddedToggle,
} = cartSlice.actions;
export default cartSlice.reducer;
