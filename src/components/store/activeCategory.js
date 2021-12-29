import { createSlice } from '@reduxjs/toolkit';

const ProductCategory = createSlice({
  name: 'category',
  initialState: { activeCategory: '' },
  reducers: {
    // Actions => action handler
    routeCategory: (state, action) => {
      state.activeCategory = action.payload.slice(1);
    },
    currCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { currCategory, routeCategory } = ProductCategory.actions;
export default ProductCategory.reducer;
