import { Header } from "../components/header";
import { GameField, GameTitle, useGameState } from "../components/game";
import { GameInfo } from "../components/game";
import { useState } from "react";

// Главная функция приложения
export default function HomePages() {
  const [playersCount, setPlayerCount] = useState(2);
  const { cells, nextMove, currentMove, handleCellClick, winnerSequence } =
    useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          currentMove={currentMove}
          className="mt-4"
        />
        <GameField
          playersCount={playersCount}
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
          className="mt-6"
        />
      </main>
    </div>
  );
}
