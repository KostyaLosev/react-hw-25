import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./features/ItemsSlice";
import cartReducer from "./features/CartSlice";
import authReducer from './features/AuthSlice';

export const store = configureStore({
    reducer: {
    items: itemsReducer,
    cart: cartReducer,
    auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
