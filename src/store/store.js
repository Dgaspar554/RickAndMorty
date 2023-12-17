import { configureStore } from "@reduxjs/toolkit";
import { RickAndMortySlice } from "./slices/RickAndMortySlice";

export const store = configureStore({
    reducer: {
        RickAndMorty: RickAndMortySlice.reducer
    }
});