import { Dispatch } from "react";
import { Board, ILifeGamePlayAction } from "./types";
import { ILifeGameSetDimensionsAction, ILifeGameSetBoardAction } from "./types";

export const playLifeGame = async (
  dispatch: Dispatch<ILifeGamePlayAction>,
  payload: (board: Board) => Board
) => {
  dispatch({ type: "PLAY", payload });
};

export const setBoardDimensions = async (
  dispatch: Dispatch<ILifeGameSetDimensionsAction>,
  payload: [number, number]
) => {
  dispatch({ type: "SET_DIMENSIONS", payload });
};

export const setBoard = async (
  dispatch: Dispatch<ILifeGameSetBoardAction>,
  payload: Board
) => {
  dispatch({ type: "SET_BOARD", payload });
};
