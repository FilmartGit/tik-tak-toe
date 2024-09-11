import clsx from "clsx";
import Image from "next/image";

export function Profile({ avatarSrc, className }) {
  return (
    <div className={clsx(className, "flex items-center gap-2 text-start")}>
      <Image
        src={avatarSrc}
        alt="avatar"
        width={48}
        height={48}
        className="border rounded-full"
        unoptimized
      />
      <div className="items-start">
        <div className="text-teal-600 text-lg leading-tight hover:text-teal-500 transition-colors">
          BabyGame
        </div>
        <div className="text-slate-400 text-xs leading-tight">
          Рейтинг: 1230
        </div>
      </div>
    </div>
  );
}
