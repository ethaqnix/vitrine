import { Button, makeStyles, Theme } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { useState } from "react";
import Grid from "../../utils/SVGCreator/SVGGrid";

interface OwnProps {
  classes: any;
}

interface OwnState {
  intervalId: any;
  valuesArray: number[][];
  nbLines: number;
  nbRows: number;
  rules: Array<{
    pattern: [number, number, number];
    result: 0 | 1;
  }>;
}

type Props = OwnProps;

const LifeGame = (props: OwnProps) => {
  const classes = useStyles();
  const [dimensions, setDimensions] = useState([50, 50]);
  const [board, setBoard] = useState(
    Array(50)
      .fill(null)
      .map(() => Array(50).fill(0))
  );
  const [nbLines, nbRows] = dimensions;

  const handleSquareClick = (x: number, y: number) => {
    setBoard([
      ...board.slice(0, x),
      [
        ...board[x].slice(0, y),
        board[x][y] === 1 ? 0 : 1,
        ...board[x].slice(y + 1),
      ],
      ...board.slice(x + 1),
    ]);
  };

  const executePatern = () =>
    board.map((_line, x) => {
      return board.map((_column, y) => {
        const square = board[x][y];
        const adjacentSquares = [
          y > 0 ? board[x][y - 1] : 0,
          y > 0 && x > 0 ? board[x - 1][y - 1] : 0,
          y > 0 && x < nbLines - 1 ? board[x + 1][y - 1] : 0,

          y < nbLines - 1 ? board[x][y + 1] : 0,
          y < nbLines - 1 && x > 0 ? board[x - 1][y + 1] : 0,
          y < nbLines - 1 && x < nbLines - 1 ? board[x + 1][y + 1] : 0,

          x > 0 ? board[x - 1][y] : 0,
          x < nbLines - 1 ? board[x + 1][y] : 0,
        ];
        const numberOfAdjacentSquares = adjacentSquares.reduce(
          (acc, cur) => acc + cur,
          0
        );
        if (square) {
          if (numberOfAdjacentSquares === 2 || numberOfAdjacentSquares === 3)
            return 1;
        } else {
          if (numberOfAdjacentSquares === 3) return 1;
        }
        return 0;
      });
    });

  const play = () => {
    setBoard(executePatern());
  };

  return (
    <div className={classes.root}>
      <div className={classes.rules}>
        <Button variant="contained" onClick={play}>
          {"Play"}
        </Button>
      </div>
      <svg
        viewBox="0 0 1000 1000"
        height="600"
        width="600"
        className={classes.svgGrid}
      >
        <Grid
          nbLines={nbLines}
          nbRows={nbRows}
          valuesArray={board}
          onClickSquare={handleSquareClick}
        />
      </svg>
    </div>
  );
};

/*class LifeGame extends React.Component<Props, OwnState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      intervalId: null,
      valuesArray: Array(10)
        .fill(null)
        .map(() => Array(10).fill(0)),
      nbLines: 10,
      nbRows: 10,
      rules: [],
    };
  }

  const handleSquareClick = (x, y) => () => {

  }

  render() {
    const { classes } = this.props;
    return (
      
    );
  }
}*/

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: 10,
    display: "flex",
    width: "600",
    height: "400",
    flex: 1,
  },
  rules: {
    flex: 1,
    height: "400px",
  },
  svgGrid: {
    flex: 2,
    justifyContent: "",
  },
}));

export default LifeGame;
