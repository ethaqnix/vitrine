export type Board = boolean[][];

export type LifeGameState = {
  board: Board;
  dimensions: [number, number];
};

export type ILifeGamePlayAction = {
  type: "PLAY";
  payload(board: Board): Board;
};

export type ILifeGamePauseAction = {
  type: "PLAY";
  payload(board: Board): Board;
};

export type ILifeGameSetBoardAction = {
  type: "SET_BOARD";
  payload: Board;
};

export type ILifeGameClearAction = {
  type: "CLEAR";
};

export type ILifeGameAction =
  | ILifeGamePlayAction
  | ILifeGameSetBoardAction
  | ILifeGameClearAction
  | null;

export type LifeGameContextProps = {};
