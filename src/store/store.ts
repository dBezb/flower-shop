import { configureStore } from '@reduxjs/toolkit';
import flowerReducer from './FlowerSlice';
import cartReducer from './CartSlice';

const store = configureStore({
    reducer: {
        flowers: flowerReducer,
        cart: cartReducer,
    },
});

export default store;
