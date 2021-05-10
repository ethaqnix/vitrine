import React, { FunctionComponent } from "react";
import { useHistory } from "react-router";
import { LifeGameProvider } from "../../context/lifeGameContext";
import {
  initial1dState,
  initial2dState,
} from "../../context/lifeGameContext/reducer";
import LifeGame2d from "./LifeGame2d/LifeGame2d";
import LifeGame from "./LifeGame1d/LifeGame";

type OwnProps = {};

const LifeGameIndex: FunctionComponent<OwnProps> = () => {
  const history = useHistory();
  return (
    <LifeGameProvider
      initialState={
        history.location.pathname === "/LifeGame2d"
          ? initial2dState
          : initial1dState
      }
    >
      {history.location.pathname === "/LifeGame2d" ? (
        <LifeGame2d />
      ) : (
        <LifeGame />
      )}
    </LifeGameProvider>
  );
};

export default LifeGameIndex;
