import React, { FunctionComponent } from "react";
import { LifeGameProvider } from "../../context/lifeGameContext";
import { initial2dState } from "../../context/lifeGameContext/reducer";
import LifeGame from "./LifeGame2d";

type OwnProps = {};

const index: FunctionComponent<OwnProps> = ({}) => {
  return (
    <LifeGameProvider initialState={initial2dState}>
      <LifeGame />
    </LifeGameProvider>
  );
};

export default index;
