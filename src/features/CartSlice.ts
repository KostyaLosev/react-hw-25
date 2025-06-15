import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "./CartSlice.d";

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
        const existing = state.items.find(item => item.id === action.payload.id);
        if (existing) {
        existing.quantity += action.payload.quantity;
        } else {
        state.items.push(action.payload);
        }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
        state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateCartItemQuantity: (
        state,
        action: PayloadAction<{ id: string; quantity: number }>
    ) => {
        const item = state.items.find(item => item.id === action.payload.id);
        if (item) {
        item.quantity = action.payload.quantity;
        }
    },
    clearCart: (state) => {
        state.items = [];
    },
    decreaseItemQuantity: (state, action: PayloadAction<string>) => {
        const itemIndex = state.items.findIndex(item => item.id === action.payload);
        if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity > 1) {
            state.items[itemIndex].quantity -= 1;
        } else {
            state.items.splice(itemIndex, 1);
        }
        }
    },
    },
});

export const {
    addToCart,
    removeFromCart, 
    updateCartItemQuantity,
    clearCart,
    decreaseItemQuantity
} = cartSlice.actions;

export default cartSlice.reducer;