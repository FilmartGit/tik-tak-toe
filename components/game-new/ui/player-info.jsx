import Image from "next/image";
import { GameSymbole } from "./game-symbol";
import clsx from "clsx";

export function PlayerInfo({
  isRight,
  name,
  avatar,
  rating,
  symbol,
  isTimingRunnig,
  seconds
}) {
  let minuteString = String(Math.floor(seconds / 60)).padStart(2, "0");
  let secondString = String(seconds % 60).padStart(2, "0");

  const isDangers = seconds < 10;

  return (
    <div className="flex items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <div className="flex items-center gap-2 text-start w-44">
          <Image
            src={avatar}
            alt="avatar"
            width={48}
            height={48}
            className="border rounded-full"
            unoptimized
          />
          <div className="items-start overflow-hidden">
            <div className="text-teal-600 text-lg leading-tight hover:text-teal-500 transition-colors truncate">
              {name}
            </div>
            <div className="text-slate-400 text-xs leading-tight">
              Рейтинг: {rating}
            </div>
          </div>
        </div>
        <div className="w-5 h-5 absolute bg-white rounded-3xl shadow -left-1 -top-1">
          <GameSymbole symbol={symbol} />
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
