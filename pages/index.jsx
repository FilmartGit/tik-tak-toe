import { Header } from "../components/header";
import { GameField, GameTitle, useGameState } from "../components/game";
import { GameInfo } from "../components/game";
import { useState } from "react";
import { GameSymbole } from "../components/game/game-symbol";
import { UIModal } from "../components/uikit/ui-modal";
import { UIButton } from "../components/uikit/ui-button";
import { Game } from "../components/game-new";

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
    <HomePageLayout header={<Header />}>
      <Game />
      
      {/* <GameTitle playersCount={playersCount} />
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
      <UIModal
        width="md"
        isOpen={winnerSymbol}
        onClose={() => {
          console.log("close");
        }}
      >
        <UIModal.HEADER>Игра завершена!</UIModal.HEADER>
        <UIModal.BODY>
          <div className="text-sm">
            Победитель: <span className="text-teal-600">Хитрый лис</span>
          </div>
        </UIModal.BODY>
        <UIModal.FOOTER>
          <UIButton size="md" variant="outline">
            Вернуться
          </UIButton>
          <UIButton size="md" variant="primary">
            Играть снова
          </UIButton>
        </UIModal.FOOTER>
      </UIModal>

      <GameField
        playersCount={playersCount}
        cells={cells}
        currentMove={currentMove}
        nextMove={nextMove}
        handleCellClick={handleCellClick}
        winnerSequence={winnerSequence}
        className="mt-6"
        winnerSymbol={winnerSymbol}
      /> */}
    </HomePageLayout>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}
