import clsx from "clsx";
import { CircleIcons } from "./icons/circle";
import { CrossIcons } from "./icons/cross";
import { UIButton } from "../uikit/ui-button";

const cells = new Array(19 * 19).fill(null);

export function GameField({ className }) {
  return (
    <div
      className={clsx(
        "bg-white pt-5 pb-7 px-8 rounded-2xl shadow-md flex flex-col",
        className,
      )}
    >
      <div className="flex w-full gap-3 items-center">
        <div className="mr-auto">
          <div className="flex items-center gap-1 text-xl font-semibold leading-tight">
            Ход: <CircleIcons />
          </div>
          <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
            Следующий: <CrossIcons />
          </div>
        </div>
        <UIButton size="md" variant="primary">
          Ничья
        </UIButton>
        <UIButton size="md" variant="outline">
          Сдаться
        </UIButton>
      </div>

      <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px pl-px mt-3">
        {cells.map((_, i) => {
          return (
            <button key={i} className="border border-slate-200 -ml-px -mb-px flex items-center justify-center">
              <CircleIcons />
            </button>
          );
        })}
      </div>
    </div>
  );
}
