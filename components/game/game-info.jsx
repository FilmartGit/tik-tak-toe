import { clsx } from "clsx";
import { Profile } from "../profile/profile";
import { GameSymbole } from "./game-symbol";
import { GAME_SYMBOL } from "./constants";
import avatarSrc1 from "./images/avatar-1.png";
import avatarSrc2 from "./images/avatar-2.jpg";
import avatarSrc3 from "./images/avatar-3.jpg";
import avatarSrc4 from "./images/avatar-4.jpg";
import { useEffect, useState } from "react";

const players = [
  {
    id: 1,
    name: "MS Cats arrow",
    rating: "1000",
    avatar: avatarSrc1,
    symbol: GAME_SYMBOL.CROSS,
  },
  {
    id: 2,
    name: "BlackAndWhite",
    rating: "900",
    avatar: avatarSrc2,
    symbol: GAME_SYMBOL.ZERO,
  },
  {
    id: 3,
    name: "Grandmaster",
    rating: "1900",
    avatar: avatarSrc3,
    symbol: GAME_SYMBOL.TRIANGLE,
  },
  {
    id: 4,
    name: "TikTokToe",
    rating: "350",
    avatar: avatarSrc4,
    symbol: GAME_SYMBOL.SQUARE,
  },
];

export function GameInfo({
  className,
  playersCount,
  currentMove,
  isWinner,
  onPlayerTimeover,
}) {
  return (
    <div
      className={clsx(
        className,
        "bg-white py-4 px-8 rounded-2xl shadow-md grid grid-cols-2 gap-3",
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.id}
          onTimeOver={() => {
            onPlayerTimeover(player.symbol);
          }}
          playerInfo={player}
          isRight={index % 2}
          isTimingRunnig={currentMove === player.symbol && !isWinner}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isTimingRunnig, onTimeOver }) {
  const [seconds, setSeconds] = useState(60);
  let minuteString = String(Math.floor(seconds / 60)).padStart(2, "0");
  let secondString = String(seconds % 60).padStart(2, "0");

  const isDangers = seconds < 10;

  useEffect(() => {
    let interval = false;
    if (isTimingRunnig) {
      interval = setInterval(() => {
        setSeconds((lastSeconds) => Math.max(lastSeconds - 1, 0));
      }, 1000);
    }
    return () => {
      clearInterval(interval);
      setSeconds(60);
    };
  }, [isTimingRunnig]);

  useEffect(() => {
    if (seconds == 0) {
      onTimeOver();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  return (
    <div className="flex items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          avatar={playerInfo.avatar}
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
        />
        <div className="w-5 h-5 absolute bg-white rounded-3xl shadow -left-1 -top-1">
          <GameSymbole symbol={playerInfo.symbol} />
        </div>
      </div>
      <div
        className={clsx("h-6 w-px bg-slate-200 mx-3", isRight && "order-2")}
      ></div>
      <div
        className={clsx(
          " text-lg font-semibold w-[60px]",
          isRight && "order-1",
          isDangers
            ? "text-orange-500"
            : isTimingRunnig
              ? "text-slate-900"
              : "text-slate-300",
        )}
      >
        {minuteString}:{secondString}
      </div>
    </div>
  );
}
