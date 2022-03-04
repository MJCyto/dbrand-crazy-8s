import routes from "../../constants/routes";
import { PageContext } from "../../stateHandling/PageContext";
import { useContext } from "react";

const GameScreen = () => {
  const { currRoute, setCurrRoute } = useContext(PageContext);

  return (
    <div
      style={{ height: 100, width: 100, backgroundColor: "blue" }}
      onClick={() => setCurrRoute(routes.homeRoute)}
    />
  );
};

export default GameScreen;
