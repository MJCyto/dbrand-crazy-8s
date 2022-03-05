import { useContext, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { initGame } from "../../redux/slices/game/gameSlice";
import { selectDeckCards, selectPlayerCards } from "../../redux/slices/game/selectors";

const Wrapper = styled.div``;

const HomeScreen = () => {
  const [numCards, setNumCards] = useState("");
  const dispatch = useDispatch();
  const playerCards = useSelector(selectPlayerCards);
  const deckCards = useSelector(selectDeckCards);

  console.log(playerCards);
  console.log(deckCards);
  return (
    <Wrapper>
      <input value={numCards} onChange={e => setNumCards(e.target.value)} />
      <div
        onClick={() => {
          dispatch(initGame(numCards, () => {}));
          console.log(numCards);
        }}
      >
        OKAY
      </div>
    </Wrapper>
  );
};

export default HomeScreen;
