import reducer from './RootReducer';
import { configureStore } from '@reduxjs/toolkit';

export default function store() {
  const savedLocalStorage = localStorage.getItem('ecom')
    ? JSON.parse(localStorage.getItem('ecom'))
    : {};

  return configureStore({
    reducer,
    preloadedState: savedLocalStorage,
  });
}
