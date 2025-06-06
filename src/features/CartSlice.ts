import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState } from "./CartSlice.d"

const initialState: CartState = {
    count: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
        state.count += action.payload;
    },
    clearCart: (state) => {
        state.count = 0;
    }
    },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;