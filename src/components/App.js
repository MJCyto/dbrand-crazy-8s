import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import routes from "../constants/routes";
import HomeScreen from "./home/HomeScreen";
import GameScreen from "./game/GameScreen";

const App = () => {
  const { homeRoute, gameRoute } = routes;
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={homeRoute}>SSR Example</Link>
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
    </div>
  );
};
export default App;
