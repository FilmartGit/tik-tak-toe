import { clsx } from "clsx";
import { Profile } from "../profile/profile";
import avatarSrc from "../header/icons8-women-48.png";
import { CrossIcons } from "./icons/cross";
import { CircleIcons } from "./icons/circle";

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white py-4 px-8 rounded-2xl shadow-md flex items-center justify-between",
      )}
    >
      <div className="flex items-center">
        <div className="relative">
          <Profile avatarSrc={avatarSrc} className="w-44" />
          <div className="w-5 h-5 absolute bg-white rounded-3xl shadow -left-1 -top-1">
            <CrossIcons />
          </div>
        </div>
        <div className="h-6 w-px bg-slate-200 mx-3"></div>
        <div className="text-slate-900 text-lg font-semibold">01:20</div>
      </div>

      <div className="flex items-center">
        <div className="text-orange-600 text-lg font-semibold">01:08</div>
        <div className="h-6 w-px bg-slate-200 mx-3"></div>
        <div className="relative">
          <Profile avatarSrc={avatarSrc} className="w-44" />
          <div className="w-5 h-5 absolute bg-white rounded-3xl shadow -left-1 -top-1">
            <CircleIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
