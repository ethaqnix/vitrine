import React, { FunctionComponent } from "react";
import { useLifeGame } from "../../context/lifeGameContext";
import { setBoard } from "../../context/lifeGameContext/actions";
import { usePageStyles } from "../../styles/pages";
import SVGGrid from "../../utils/SVGCreator/SVGGrid";

type OwnProps = {
  changeSquareColorOnClick?: boolean;
};

const Grid: FunctionComponent<OwnProps> = ({ changeSquareColorOnClick }) => {
  const [{ dimensions, board }, setLifeGame] = useLifeGame();
  const classes = usePageStyles();

  const handleSquareClick = (x: number, y: number) => {
    setLifeGame &&
      setBoard(setLifeGame, [
        ...board.slice(0, x),
        [
          ...board[x].slice(0, y),
          board[x][y] === true ? false : true,
          ...board[x].slice(y + 1),
        ],
        ...board.slice(x + 1),
      ]);
  };

  return (
    <svg
      viewBox="0 0 1000 1000"
      height="600"
      width="600"
      className={classes.renderArea}
    >
      <SVGGrid
        nbLines={dimensions[0]}
        nbRows={dimensions[1]}
        valuesArray={board}
        onClickSquare={changeSquareColorOnClick ? handleSquareClick : undefined}
      />
    </svg>
  );
};

export default Grid;
