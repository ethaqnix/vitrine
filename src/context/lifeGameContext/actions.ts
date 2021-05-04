import { Board } from "./types";

export const playLifeGame = async (
  dispatch: any,
  payload: (board: Board) => Board
) => {
  dispatch({ type: "PLAY", payload });
};

export const pause = async (dispatch: any) => {
  dispatch({ type: "PAUSE" });
};

export const setBoard = async (dispatch: any, payload: Board) =>
  dispatch({ type: "SET_BOARD", payload });
