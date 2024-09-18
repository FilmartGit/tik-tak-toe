import clsx from "clsx";
import Image from "next/image";

export function Profile({ className, name, rating = "nub", avatar }) {
  return (
    <div className={clsx(className, "flex items-center gap-2 text-start")}>
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
  );
}
