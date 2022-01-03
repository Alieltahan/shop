import { createSlice } from '@reduxjs/toolkit';

const ccySlice = createSlice({
  name: 'currency',
  initialState: { currency: 'USD', showSwitcher: false },
  reducers: {
    // Actions => action handler
    updateCcy: (state, action) => {
      const { currency } = action.payload;
      state.currency = currency;
    },
    toggleSwitcher: (state, action) => {
      state.showSwitcher = !state.showSwitcher;
    },
  },
});

export const { updateCcy, toggleSwitcher } = ccySlice.actions;
export default ccySlice.reducer;
