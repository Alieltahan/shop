import { createSlice } from '@reduxjs/toolkit';

const ccySlice = createSlice({
  name: 'currency',
  initialState: {},
  reducers: {
    // Actions => action handler
    usersReceived: (state, action) => {
      return action.payload;
    },
  },
});

export const {} = ccySlice.actions;
export default ccySlice.reducer;
