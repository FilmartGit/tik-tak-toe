import { useState } from "react";
import { GAME_SYMBOL, MOVE_ORDER } from "./constants";

function getNexMove(current) {
  const move = MOVE_ORDER.indexOf(current) + 1;
  return MOVE_ORDER[move] ?? MOVE_ORDER[0];
}

export function useGameState() {
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
        currentMove: getNexMove(last.currentMove),
        cells: last.cells.map((cell, i) =>
          i === index ? last.currentMove : cell,
        ),
      };
    });
  };

  const nextMove = getNexMove(currentMove);

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
  };
}
