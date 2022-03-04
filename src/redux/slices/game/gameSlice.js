import { createSlice, createAction } from "@reduxjs/toolkit";
import { CardFaces, CardSuits } from "../../../constants/cardValues";
import { Card } from "../../../domain/Card";
import { shuffle } from "lodash";

export const initGame = createAction("game/init", (numCards, setEnemyCards, setDeck) => {
  let allCards = [];
  // Make all cards given there is a card for every combination of suit X face.
  Object.keys(CardSuits).forEach(suit => {
    Object.values(CardFaces).forEach(face => {
      allCards.push(new Card(face, suit));
    });
  });

  allCards = shuffle(allCards);
  setEnemyCards(allCards.splice(0, numCards));

  return { payload: { playerCards: allCards.splice(0, numCards), deckCards: allCards } };
});

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
  extraReducers: builder => {
    builder.addCase(initGame, (state, action) => {
      const { playerCards, deckCards } = action.payload;
      state.playerCards = playerCards;
      state.deckCards = deckCards;
    });
  },
});

export const { replenishPile, playCard } = gameSlice.actions;

export default gameSlice.reducer;
