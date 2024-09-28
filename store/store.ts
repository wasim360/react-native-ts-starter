// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import userReducer from "./slices/users"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

// Types for dispatch and state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
