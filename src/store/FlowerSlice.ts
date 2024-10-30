import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FlowerState, Flower } from '../types/Types';

const initialState: FlowerState = {
    flowers: [],
};

const flowerSlice = createSlice({
    name: 'flowers',
    initialState,
    reducers: {
        setFlowers(state, action: PayloadAction<Flower[]>) {
            state.flowers = action.payload;
        },
    },
});

export const { setFlowers } = flowerSlice.actions;
export default flowerSlice.reducer;
