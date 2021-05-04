export type Board = boolean[][];

export type LifeGameState = {
  board: Board;
  dimensions: [number, number];
};

export interface ILifeGamePlayAction {
  type: "PLAY";
  payload(board: Board): Board;
}

export interface ILifeGamePauseAction {
  type: "PLAY";
  payload(board: Board): Board;
}

export interface ILifeGameSetBoardAction {
  type: "SET_BOARD";
  payload: Board;
}

export interface ILifeGameClearAction {
  type: "CLEAR";
}

export interface ILifeGameSetDimensionsAction {
  type: "SET_DIMENSIONS";
  payload: [number, number];
}

export type ILifeGameAction =
  | ILifeGamePlayAction
  | ILifeGameSetBoardAction
  | ILifeGameClearAction
  | ILifeGameSetDimensionsAction;

export type LifeGameContextProps = {};
