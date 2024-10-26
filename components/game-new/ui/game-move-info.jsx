import { GameSymbole } from "./game-symbol";

export function GameMoveInfo({ currentMove, nextMove }) {
  return (
    <>
      <div className="flex items-center gap-1 text-xl font-semibold leading-tight">
        Ход: <GameSymbole symbol={currentMove}></GameSymbole>
      </div>
      <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
        Следующий: <GameSymbole symbol={nextMove}></GameSymbole>
      </div>
    </>
  );
}