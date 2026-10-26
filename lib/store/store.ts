// src/lib/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";

// در App Router بهتره برای هر درخواست یک store جدید ساخته بشه
export const makeStore = () =>
  configureStore({
    reducer: {
      theme: themeReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];