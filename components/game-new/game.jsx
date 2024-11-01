import { useReducer } from "react";
import { PLAYERS } from "./constants";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";
import {
  GAME_STATE_ACTION,
  gameStateReducer,
  initGameState,
} from "./model/game-state-reducer";
import { getNexMove } from "./model/get-next-move";
import { BackLink } from "./ui/back-link";
import { GameCell } from "./ui/game-cell";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameOverModal } from "./ui/game-over-modal";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";
import { computeWinner } from "./model/compute-winner";
import { computePlayerTimer } from "./model/compute-player-timer";
import { useInterval } from "../lib/timers";

const PLAYERS_COUNT = 4;

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    {
      playersCount: PLAYERS_COUNT,
      defaultTimer: 60000,
      currentMoveStart: Date.now(),
    },
    initGameState,
  );

  useInterval(1000, gameState.currentMoveStart, () => {
    dispatch({
      type: GAME_STATE_ACTION.TICK,
      now: Date.now(),
    });
  });

  const winnerSequence = computeWinner(gameState.cells);
  const nextMove = getNexMove(gameState);
  const winnerSymbol = computeWinnerSymbol(gameState, {
    winnerSequence,
    nextMove,
  });

  const winnerPlayer = PLAYERS.find((item) => item.symbol === winnerSymbol);

  const { cells, currentMove } = gameState;

  return (
    <>
      <GameLayout
        backlink={<BackLink />}
        title={<GameTitle />}
        info={
          <GameInfo isRatingGame playersCount={4} timeMode={"1 мин. на ход"} />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
          const { timer, timerStartAt } = computePlayerTimer(
            gameState,
            player.symbol,
          );
          return (
            <PlayerInfo
              key={player.id}
              avatar={player.avatar}
              isRight={index % 2 === 1}
              name={player.name}
              rating={player.rating}
              symbol={player.symbol}
              timer={timer}
              timerStartAt={timerStartAt}
            />
          );
        })}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            disabled={!!winnerSymbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => {
              dispatch({
                type: GAME_STATE_ACTION.CELL_CLICK,
                index,
                now: Date.now(),
              });
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
            timer={gameState.timers[player.symbol]}
          />
        ))}
      />
    </>
  );
}
