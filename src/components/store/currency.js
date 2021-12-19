import { createSlice } from '@reduxjs/toolkit';

const ccySlice = createSlice({
  name: 'currency',
  initialState: { currency: 'USD' },
  reducers: {
    // Actions => action handler
    updateCcy: (state, action) => {
      const { currency } = action.payload;
      state.currency = currency;
    },
  },
});

export const { updateCcy } = ccySlice.actions;
export default ccySlice.reducer;
