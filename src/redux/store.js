import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import sneakers from './slices/sneakersSlice';


export const store = configureStore({
  reducer: {
    filter,
    cart,
    sneakers,
  },
});


