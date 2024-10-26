export function GameLayout({
  backlink,
  title,
  info,
  playersList,
  gameMoveInfo,
  action,
  gameCells,
}) {
  return (
    <div className=" pb-10">
      <div className="pl-2">
        {backlink}
        {title}
        {info}
      </div>
      <div
        className={
          "mt-4 bg-white py-4 px-8 rounded-2xl shadow-md grid grid-cols-2 gap-3"
        }
      >
        {playersList}
      </div>

      <div className="bg-white pt-5 pb-7 px-8 rounded-2xl shadow-md flex flex-col mt-4">
        <div className="flex w-full gap-3 items-center">
          <div className="mr-auto">{gameMoveInfo}</div>
          {action}
        </div>
        <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px pl-px mt-3">
          {gameCells}
        </div>
      </div>
    </div>
  );
}
