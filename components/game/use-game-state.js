import { useState } from "react";
import { GAME_SYMBOL } from "./constants";
import { computeWinner, getNexMove } from "./modal";

export function useGameState(playersCount) {
  const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(
    () => ({
      cells: new Array(19 * 19).fill(null),
      currentMove: GAME_SYMBOL.CROSS,
      playersTimeOver: [],
    }),
  );

  const winnerSequence = computeWinner(cells);
  const nextMove = getNexMove(currentMove, playersCount, playersTimeOver);
  const winnerSymbol = nextMove === currentMove ? currentMove : winnerSequence?.[0];

  const handleCellClick = (index) => {
    setGameState((last) => {
      if (last.cells[index]) {
        return last;
      }
      return {
        ...last,
        currentMove: getNexMove(
          last.currentMove,
          playersCount,
          last.playersTimeOver,
        ),
        cells: last.cells.map((cell, i) =>
          i === index ? last.currentMove : cell,
        ),
      };
    });
  };

  const handlePlayerTimeOver = (symbol) => {
    setGameState((last) => {
      return {
        ...last,
        playersTimeOver: [...last.playersTimeOver, symbol],
        currentMove: getNexMove(
          last.currentMove,
          playersCount,
          last.playersTimeOver,
        ),
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    handlePlayerTimeOver,
    winnerSequence,
    winnerSymbol
  };
}
