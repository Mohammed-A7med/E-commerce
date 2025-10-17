import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface authState {
  accessToken: string | null;
}

const initialState: authState = { accessToken: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<{ accessToken: string }>) {
      state.accessToken = action.payload.accessToken;
    },
    clearAuth(state) {
      state.accessToken = null;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;
