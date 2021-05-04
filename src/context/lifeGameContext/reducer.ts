import { SetMockPattern } from "./transformers";
import { ILifeGameAction, LifeGameState } from "./types";

export const initial1dState: LifeGameState = {
  board: [[true]],
  dimensions: [1, 1],
};

export const initial2dState: LifeGameState = {
  board: new Array(50).fill([]).map(() => {
    return Array(50).fill(false);
  }),
  dimensions: [50, 50],
};

export const initialState: LifeGameState = initial1dState;

export const LifeGameReducer = (
  state: LifeGameState = initialState,
  action: ILifeGameAction
) => {
  if (!action) return;
  switch (action.type) {
    case "SET_BOARD": {
      return {
        ...state,
        board: action.payload,
      };
    }
    case "PLAY": {
      return {
        ...state,
        board: action.payload(state.board),
      };
    }
    case "SET_DIMENSIONS": {
      return {
        ...state,
        dimensions: action.payload,
      };
    }
    case "SET_PATTERN": {
      return SetMockPattern(state, action.payload);
    }
    case "CLEAR": {
      return {
        ...state,
        board: [],
      };
    }
    default:
      throw new Error(`Unhandled action type: ${action!.type}`);
  }
};
