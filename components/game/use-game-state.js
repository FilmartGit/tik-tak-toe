import { useState } from "react";
import { GAME_SYMBOL } from "./constants";
import { computeWinner, getNexMove } from "./modal";

export function useGameState(playersCount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOL.CROSS,
  }));

  const handleCellClick = (index) => {
    setGameState((last) => {
      if (last.cells[index]) {
        return last;
      }
      return {
        ...last,
        currentMove: getNexMove(last.currentMove, playersCount),
        cells: last.cells.map((cell, i) =>
          i === index ? last.currentMove : cell,
        ),
      };
    });
  };

  const winnerSequence = computeWinner(cells);
  const nextMove = getNexMove(currentMove, playersCount);

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence
  };
}
