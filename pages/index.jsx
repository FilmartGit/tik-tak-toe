import { Header } from "../components/header";
import { GameField, GameTitle } from "../components/game";
import { GameInfo } from "../components/game";

// Главная функция приложения
export default function HomePages() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle />
        <GameInfo className="mt-4" />
        <GameField className="mt-6" />
      </main>
    </div>
  );
}
