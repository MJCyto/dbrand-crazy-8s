import routes from "../../constants/routes";
import { PageContext } from "../../stateHandling/PageContext";
import { useContext } from "react";
import styled from "styled-components";
import CardPile from "./CardPile";
import PlayerHand from "./PlayerHand";
import HiddenCardContext from "../../stateHandling/hiddenCardContext";
import EnemyHand from "./EnemyHand";

const Wrapper = styled.div``;

const GameScreen = () => {
  return (
    <Wrapper>
      <HiddenCardContext.Provider>
        <EnemyHand />
        <CardPile />
      </HiddenCardContext.Provider>
      <PlayerHand />
    </Wrapper>
  );
};

export default GameScreen;
