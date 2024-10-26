import clsx from "clsx";
import { GameSymbole } from "./game-symbol";

export function GameCell({ onClick, isWinner, disabled, symbol }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "border border-slate-200 -ml-px -mb-px flex items-center justify-center",
        isWinner && "bg-orange-400/10",
      )}
    >
      {symbol && <GameSymbole symbol={symbol} />}
    </button>
  );
}