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

  return (
    <Wrapper>
      <input value={numCards} onChange={e => setNumCards(e.target.value)} />
      <div onClick={() => dispatch(initGame(numCards))}>OKAY</div>
      deck: {deckCards}
      player: {playerCards}
    </Wrapper>
  );
};

export default HomeScreen;
