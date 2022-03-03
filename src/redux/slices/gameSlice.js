import { createSlice } from "@reduxjs/toolkit";

const initialState = Object.freeze({
  playerCards: [],
  deckCards: [],
});

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    replenishPile: () => {},
    playCard: () => {},
  },
  extraReducers: () => {},
});

export const { replenishPile, playCard } = gameSlice.actions;

export default gameSlice.reducer;
