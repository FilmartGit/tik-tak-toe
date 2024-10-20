import { PLAYERS } from "./constants";
import { BackLink } from "./ui/back-link";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";

export function Game() {
  return (
    <GameLayout
      backlink={<BackLink />}
      title={<GameTitle />}
      info={
        <GameInfo isRatingGame playersCount={4} timeMode={"1 мин. на ход"} />
      }
      playersList={PLAYERS.map((player, index) => (
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
  );
}
