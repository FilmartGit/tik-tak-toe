import { StarIcon } from "./icons/star";
import { UserIcon } from "./icons/user";
import { TimeIcon } from "./icons/time";

export function GameInfo({ playersCount, isRatingGame, timeMode }) {
  return (
    <div className="flex items-center gap-3 text-sm text-slate-400">
      {isRatingGame && <StarIcon />}
      <div className="flex gap-1 items-center">
        <UserIcon />
        {playersCount}
      </div>
      <div className="flex gap-1 items-center">
        <TimeIcon /> {timeMode}
      </div>
    </div>
  );
}
