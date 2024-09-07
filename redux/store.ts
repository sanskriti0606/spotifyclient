"use client"
import { configureStore } from '@reduxjs/toolkit';
import { rapidapiApi } from './services/rapidapiCore'; // Adjust path if needed
import userSlice from './userSlice'; // Adjust path as necessary

export const store = configureStore({
  reducer: {
    [rapidapiApi.reducerPath]: rapidapiApi.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rapidapiApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
