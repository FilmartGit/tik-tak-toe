import Link from "next/link";
import { ArrowLeftIcons } from "./icons/arrow-left";
import { StarIcon } from "./icons/star";
import { UserIcon } from './icons/user';
import { TimeIcon } from './icons/time';

export function GameTitle({ playersCount }) {
  return (
    <div className="pl-2">
      <Link href="##" className="flex items-center gap-2 text-xs text-teal-500">
        <ArrowLeftIcons />
        На главную
      </Link>
      <h1 className="text-4xl leading-tight">Крестики нолики</h1>
      <div className="flex items-center gap-3 text-sm text-slate-400">
        <StarIcon />
        <div className="flex gap-1 items-center">
            <UserIcon />
            {playersCount}            
        </div>
        <div className="flex gap-1 items-center">
            <TimeIcon />
            1 минута на ход         
        </div>
      </div>    
    </div>
  );
}
