// lib/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./../features/themeSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }),
    devTools: false,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];