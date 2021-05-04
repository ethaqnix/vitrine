import { Button, makeStyles, Theme } from "@material-ui/core";
import React, { FunctionComponent, useState } from "react";
import { useLifeGame } from "../../context/lifeGameContext";
import { playLifeGame } from "../../context/lifeGameContext/actions";
import { Board } from "../../context/lifeGameContext/types";
import { usePageStyles } from "../../styles/pages";
import Grid from "./Grid";

interface OwnProps {}

const LifeGame: FunctionComponent<OwnProps> = () => {
  const classes = usePageStyles();
  const [{ dimensions }, setLifeGame] = useLifeGame();

  const executePatern = (board: Board) =>
    board.map((line: boolean[], x: number) => {
      return line.map((_: boolean, y: number) => {
        const square = board[x][y];
        const adjacentSquares = [
          y > 0 ? board[x][y - 1] : false,
          y > 0 && x > 0 ? board[x - 1][y - 1] : false,
          y > 0 && x < dimensions[0] - 1 ? board[x + 1][y - 1] : false,

          y < dimensions[0] - 1 ? board[x][y + 1] : false,
          y < dimensions[0] - 1 && x > 0 ? board[x - 1][y + 1] : false,
          y < dimensions[0] - 1 && x < dimensions[0] - 1
            ? board[x + 1][y + 1]
            : false,

          x > 0 ? board[x - 1][y] : false,
          x < dimensions[0] - 1 ? board[x + 1][y] : false,
        ];
        const numberOfAdjacentSquares = adjacentSquares.reduce(
          (acc, cur) => (cur ? acc + 1 : acc),
          0
        );
        if (square) {
          if (numberOfAdjacentSquares === 2 || numberOfAdjacentSquares === 3)
            return true;
        } else {
          if (numberOfAdjacentSquares === 3) return true;
        }
        return false;
      });
    });

  const play = () => {
    playLifeGame(setLifeGame, executePatern);
  };

  return (
    <div className={classes.root}>
      <div className={classes.rules}>
        {/*<PlayControls execute={executePatern} />*/}
        <Button variant="contained" onClick={play}>
          {"Play"}
        </Button>
        <Grid changeSquareColorOnClick={true} />
      </div>
    </div>
  );
};

export default LifeGame;
