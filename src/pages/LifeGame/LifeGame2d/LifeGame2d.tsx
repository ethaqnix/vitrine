import { Button, MenuItem, Select } from "@material-ui/core";
import React, { FunctionComponent, useState } from "react";
import { useLifeGame } from "../../../context/lifeGameContext";
import {
  playLifeGame,
  setBoard,
  setPattern,
} from "../../../context/lifeGameContext/actions";
import { Board } from "../../../context/lifeGameContext/types";
import useInterval from "../../../hooks/useInterval";
import { usePageStyles } from "../../../styles/pages";
import Grid from "../Grid";
import patterns from "./json";

interface OwnProps {}

const LifeGame: FunctionComponent<OwnProps> = () => {
  const classes = usePageStyles();
  const [{ dimensions }, setLifeGame] = useLifeGame();
  const [isPlaying, setIsPlaying] = useState(false);

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
    setLifeGame && playLifeGame(setLifeGame, executePatern);
  };

  useInterval(play, isPlaying ? 100 : null);

  const handlePlayButton = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePatternSelection = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    if (setLifeGame && event.target.value) {
      setPattern(setLifeGame, patterns[event.target.value as string]);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.rules}>
        <Button variant="contained" onClick={handlePlayButton}>
          {"Play"}
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setBoard(
              setLifeGame,
              new Array(50).fill([]).map(() => {
                return Array(50)
                  .fill(null)
                  .map((e) => Math.random() < 0.5);
              })
            );
          }}
        >
          {"Start with random Board"}
        </Button>
        <Select onChange={handlePatternSelection}>
          {Object.keys(patterns).map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className={classes.renderArea}>
        <Grid changeSquareColorOnClick={true} />
      </div>
    </div>
  );
};

export default LifeGame;
