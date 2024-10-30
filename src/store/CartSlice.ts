import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState } from '../types/Types';

const initialState: CartState = {
    items: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id,
            );
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
            state.totalAmount += action.payload.price * action.payload.quantity;
        },
        removeItem: (state, action: PayloadAction<number>) => {
            const itemToRemove = state.items.find(
                (item) => item.id === action.payload,
            );
            if (itemToRemove) {
                state.items = state.items.filter(
                    (item) => item.id !== action.payload,
                );
                state.totalAmount -= itemToRemove.price * itemToRemove.quantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
