import { createSlice } from "@reduxjs/toolkit";

export const RickAndMortySlice = createSlice({
  name: "RickAndMorty",
  initialState: {
    page: 1,
    personajes: [],
    isLoading: false,
    next: "",
    maxPage: 1,
    error: false,
  },
  reducers: {
    startLoadingPersonajes: (state /* action */) => {
      state.isLoading = true;
    },
    setPersonajes: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.personajes = action.payload.personajes;
      state.next = action.payload.next;
      state.maxPage = action.payload.maxPage;
      state.error = action.payload.error;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPersonajes, startLoadingPersonajes } =
  RickAndMortySlice.actions;
