import { Board, LifeGameState } from "./types";

export const SetMockPattern = (
  initialState: LifeGameState,
  mock: Board
): LifeGameState => {
  let newBoard: Board = [];
  const dimensions: [number, number] = [
    initialState.dimensions[0] < mock.length
      ? mock.length
      : initialState.dimensions[0],
    initialState.dimensions[1] < mock[0].length
      ? mock.length
      : initialState.dimensions[1],
  ];

  if (initialState.dimensions[1] > mock[0].length) {
    const numberOfAdditionnalColumns = dimensions[1] - mock[0].length;

    newBoard = mock.map((mockLine: boolean[]) => [
      ...Array(Math.round(numberOfAdditionnalColumns / 2)).fill(false),
      ...mockLine,
      ...Array(Math.ceil(numberOfAdditionnalColumns / 2)).fill(false),
    ]);
  }
  if (initialState.dimensions[0] > mock.length) {
    const numberOfAdditionnalLines = dimensions[0] - mock.length;
    newBoard = [
      ...Array(Math.round(numberOfAdditionnalLines / 2)).fill(
        Array(dimensions[0]).fill(false)
      ),
      ...newBoard,
      ...Array(Math.ceil(numberOfAdditionnalLines / 2)).fill(
        Array(dimensions[0]).fill(false)
      ),
    ];
  }
  return {
    ...initialState,
    dimensions,
    board: newBoard,
  };
};
