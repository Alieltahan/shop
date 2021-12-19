import reducer from './RootReducer';
import { configureStore } from '@reduxjs/toolkit';

export default function store() {
  return configureStore({
    reducer,
  });
}
