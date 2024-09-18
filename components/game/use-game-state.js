import { useState } from "react";
import { GAME_SYMBOL, MOVE_ORDER } from "./constants";

function getNexMove(current, playersCount) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount);
  const move = slicedMoveOrder.indexOf(current) + 1;
  return slicedMoveOrder[move] ?? slicedMoveOrder[0];
}

export function useGameState( playersCount ) {
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

  const nextMove = getNexMove(currentMove, playersCount);

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
  };
}
