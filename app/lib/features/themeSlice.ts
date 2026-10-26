// src/lib/store/features/themeSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ThemeMode = "light" | "dark";

interface ThemeState {
  mode: ThemeMode;
  initialized: boolean; // آیا تم واقعی از روی DOM خونده شده؟
}

const initialState: ThemeState = {
  mode: "light",
  initialized: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
      state.initialized = true;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;