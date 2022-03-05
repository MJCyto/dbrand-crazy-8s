import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import routes from "../constants/routes";
import HomeScreen from "./home/HomeScreen";
import GameScreen from "./game/GameScreen";
import styled from "styled-components";

const Wrapper = styled.div``;

const App = () => {
  const { homeRoute, gameRoute } = routes;
  return (
    <div>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={homeRoute}>Dingus</Link>
              </li>
              <li>
                <Link to={gameRoute}>Game</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path={homeRoute} element={<HomeScreen />} />
            <Route path={gameRoute} element={<GameScreen />} />
          </Routes>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        </div>
      </BrowserRouter>
      {/*/!*<PageContext.Provider value={{ currRoute, setCurrRoute }}>*!/*/}
      {/*<NavigationBar />*/}
      {/*<PageSelector />*/}
      {/*/!*</PageContext.Provider>*!/*/}
    </div>
  );
};
export default App;
