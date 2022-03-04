import React, { useContext, useState } from "react";
import routes from "../constants/routes";
import HomeScreen from "./home/HomeScreen";
import GameScreen from "./game/GameScreen";
import NavigationBar from "./NavigationBar";
import styled from "styled-components";
import { PageContext } from "../stateHandling/PageContext";

const Wrapper = styled.div``;

const PageSelector = () => {
  const { currRoute } = useContext(PageContext);
  const { gameRoute } = routes;

  switch (currRoute) {
    case gameRoute: {
      return <GameScreen />;
    }
    default: {
      return <HomeScreen />;
    }
  }
};

const App = () => {
  const [currRoute, setCurrRoute] = useState(routes.homeRoute);

  return (
    <Wrapper>
      <PageContext.Provider value={{ currRoute, setCurrRoute }}>
        <NavigationBar />
        <PageSelector />
      </PageContext.Provider>
    </Wrapper>
  );
};
export default App;
