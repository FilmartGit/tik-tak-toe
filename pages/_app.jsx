import clsx from "clsx";
import "../styles/global.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={clsx(inter.className, "text-slate-900")}>
      <Component {...pageProps} />;
    </main>
  );
}