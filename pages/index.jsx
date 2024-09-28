import { Header } from "../components/header";
import { GameField, GameTitle, useGameState } from "../components/game";
import { GameInfo } from "../components/game";
import { useState } from "react";
import { GameSymbole } from "../components/game/game-symbol";

// Главная
export default function HomePages() {
  const [playersCount, setPlayerCount] = useState(4);
  const {
    cells,
    nextMove,
    currentMove,
    winnerSequence,
    winnerSymbol,
    handleCellClick,
    handlePlayerTimeOver,
  } = useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          currentMove={currentMove}
          className="mt-4"
          isWinner={!!winnerSymbol}
          onPlayerTimeover={handlePlayerTimeOver}
        />
        {winnerSymbol && (
          <div className="my-4">
            <GameSymbole symbol={winnerSymbol} />
          </div>
        )}
        <GameField
          playersCount={playersCount}
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
          className="mt-6"
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
}
