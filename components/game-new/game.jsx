import { PLAYERS } from "./constants";
import { useGameState } from "./model/use-game-state";
import { BackLink } from "./ui/back-link";
import { GameCell } from "./ui/game-cell";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameOverModal } from "./ui/game-over-modal";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";

const PLAYERS_COUNT = 2;

export function Game() {
  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence,
    winnerSymbol,
  } = useGameState(PLAYERS_COUNT);

  const winnerPlayer = PLAYERS.find((item) => item.symbol === winnerSymbol);

  return (
    <>
      <GameLayout
        backlink={<BackLink />}
        title={<GameTitle />}
        info={
          <GameInfo isRatingGame playersCount={4} timeMode={"1 мин. на ход"} />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            isRight={index % 2 === 1}
            name={player.name}
            rating={player.rating}
            symbol={player.symbol}
            seconds={60}
          />
        ))}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            disabled={!!winnerSymbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => {
              handleCellClick(index);
            }}
            symbol={cell}
          />
        ))}
      />
      <GameOverModal
        winnerName={winnerPlayer?.name}
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            isRight={index % 2 === 1}
            name={player.name}
            rating={player.rating}
            symbol={player.symbol}
            seconds={60}
          />
        ))}
      />
    </>
  );
}
