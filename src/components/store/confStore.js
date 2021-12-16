import reducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';

export default function store() {
  return configureStore({
    reducer,
  });
}
