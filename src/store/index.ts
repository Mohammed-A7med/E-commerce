import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import themeReducer from "./themeSlice";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    counter: counterReducer,
    //  products: productsReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
