import { Button } from "@material-ui/core";
import React, { FunctionComponent, useState } from "react";
import { useLifeGame } from "../../../context/lifeGameContext";
import {
  playLifeGame,
  setBoard,
  setBoardDimensions,
} from "../../../context/lifeGameContext/actions";
import { Board } from "../../../context/lifeGameContext/types";
import useInterval from "../../../hooks/useInterval";
import { usePageStyles } from "../../../styles/pages";
import Rules from "./Rules";
import Grid from "../Grid";
import { lifeGame1dRules } from "./defaultRules";

interface OwnProps {}

const LifeGame: FunctionComponent<OwnProps> = () => {
  const classes = usePageStyles();
  const [{ dimensions }, setLifeGame] = useLifeGame();
  const [rules, setRules] = useState(lifeGame1dRules);
  const [isPlaying, setIsPlaying] = useState(false);

  const applyPatern = (pattern: [boolean, boolean, boolean]) => {
    let res = false;
    rules.forEach((rule) => {
      if (
        rule.pattern.length === pattern.length &&
        rule.pattern.every((value, index) => {
          return value === pattern[index];
        })
      ) {
        res = rule.result;
      }
    });
    return res;
  };

  const executePattern = (board: Board) => {
    const lastLine = board[board.length - 1];
    const result = [
      ...board.map((line) => [false, ...line, false]),
      [false, ...lastLine, false].reduce(
        (acc: boolean[], cur: boolean, i: number, line) => {
          if (i === 0) {
            return [applyPatern([false, cur, lastLine[0]])];
          } else if (i === lastLine.length + 1) {
            return [
              ...acc,
              applyPatern([lastLine[lastLine.length - 1], cur, false]),
            ];
          } else {
            return [...acc, applyPatern([line[i - 1], cur, line[i + 1]])];
          }
        },
        []
      ),
    ];
    return result;
  };

  const play = () => {
    setLifeGame &&
      setBoardDimensions(setLifeGame, [dimensions[0] + 1, dimensions[1] + 2]);
    setLifeGame && playLifeGame(setLifeGame, executePattern);
  };

  useInterval(play, isPlaying ? 1000 : null);

  const handlePlayButton = async () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.rules}>
        <Button variant="contained" onClick={handlePlayButton}>
          {isPlaying ? "Stop" : "Play"}
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setLifeGame && setBoardDimensions(setLifeGame, [1, 1]);
            setLifeGame && setBoard(setLifeGame, [[true]]);
          }}
        >
          {"RESET"}
        </Button>
        <Rules rules={rules} onRulesChange={setRules} />
      </div>
      <div className={classes.renderArea}>
        <Grid />
      </div>
    </div>
  );
};

export default LifeGame;
