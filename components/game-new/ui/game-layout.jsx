export function GameLayout({ backlink, title, info, playersList }) {
  return (
    <div>
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
    </div>
  );
}
