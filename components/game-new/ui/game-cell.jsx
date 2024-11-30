import clsx from "clsx";
import { GameSymbole } from "./game-symbol";
import { memo } from 'react';

export const GameCell = memo( function GameCell({ onClick, isWinner, disabled, symbol, index }) {
  console.log("render: cell");
  return (
    <button
      disabled={disabled}
      onClick={() => onClick(index)}
      className={clsx(
        "border border-slate-200 -ml-px -mb-px flex items-center justify-center",
        isWinner && "bg-orange-400/10",
      )}
    >
      {symbol && <GameSymbole symbol={symbol} />}
    </button>
  );
});