import { Header } from "../components/header";
import { GameField, GameTitle } from "../components/game";
import { GameInfo } from "../components/game";
import { useState } from "react";

// Главная функция приложения
export default function HomePages() {

  const [playersCount, setPlayerCount] = useState(4);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo playersCount={playersCount} className="mt-4" />
        <GameField playersCount={playersCount} className="mt-6" />
      </main>
    </div>
  );
}
