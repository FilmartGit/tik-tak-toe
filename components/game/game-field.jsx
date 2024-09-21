import clsx from "clsx";
import { UIButton } from "../uikit/ui-button";
import { GameSymbole } from "./game-symbol";
import { useGameState } from "./use-game-state";

export function GameField({ className, playersCount, cells, currentMove, nextMove, handleCellClick }) {

  const action = (
    <>
      <UIButton size="md" variant="primary">
        Ничья
      </UIButton>
      <UIButton size="md" variant="outline">
        Сдаться
      </UIButton>
    </>
  );
  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        action={action}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((el, index) => (
          <GameCell
            key={index}
            onClick={() => {
              handleCellClick(index);
            }}
          >
            {el && <GameSymbole symbol={el} />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameCell({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-slate-200 -ml-px -mb-px flex items-center justify-center"
    >
      {children}
    </button>
  );
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        "bg-white pt-5 pb-7 px-8 rounded-2xl shadow-md flex flex-col",
        className,
      )}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ action, currentMove, nextMove }) {
  return (
    <div className="flex w-full gap-3 items-center">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-xl font-semibold leading-tight">
          Ход: <GameSymbole symbol={currentMove}></GameSymbole>
        </div>
        <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
          Следующий: <GameSymbole symbol={nextMove}></GameSymbole>
        </div>
      </div>
      {action}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px pl-px mt-3">
      {children}
    </div>
  );
}
