import React, { FunctionComponent, useReducer } from "react";
import {
  initialState as initialLifeGameState,
  LifeGameReducer,
} from "./reducer";
import { ILifeGameAction, LifeGameContextProps, LifeGameState } from "./types";

const LifeGameStateContext = React.createContext<LifeGameState>(
  initialLifeGameState
);
const LifeGameDispatchContext = React.createContext<React.Dispatch<ILifeGameAction> | null>(
  null
);

export function useLifeGameState() {
  const context = React.useContext(LifeGameStateContext);
  if (context === undefined) {
    throw new Error("useLifeGameState must be used within a LifeGameProvider");
  }

  return context;
}

export const useLifeGameDispatch = () => {
  const context = React.useContext(LifeGameDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useLifeGameDispatch must be used within a LifeGameProvider"
    );
  }

  return context;
};

export const useLifeGame = (): [
  LifeGameState,
  React.Dispatch<ILifeGameAction> | null
] => {
  const stateContext = React.useContext(LifeGameStateContext);
  const dispatchContext = React.useContext(LifeGameDispatchContext);
  if (stateContext === undefined || dispatchContext === undefined) {
    throw new Error("useLifeGame must be used within a LifeGameProvider");
  }
  return [stateContext, dispatchContext];
};

export const LifeGameProvider: any = ({
  children,
  initialState = initialLifeGameState,
}: any) => {
  const [value, dispatch] = useReducer(LifeGameReducer, initialState);

  return (
    <LifeGameStateContext.Provider value={value!}>
      <LifeGameDispatchContext.Provider value={dispatch}>
        {children}
      </LifeGameDispatchContext.Provider>
    </LifeGameStateContext.Provider>
  );
};
