import { CircleIcons } from "./icons/circle";
import { CrossIcons } from "./icons/cross";
import { SquareIcon } from "./icons/square";
import { TriangleIcon } from "./icons/triangle";
import { GAME_SYMBOL } from "../constants";

export function GameSymbole({ symbol }) {
  const Icon =
    {
      [GAME_SYMBOL.CROSS]: CrossIcons,
      [GAME_SYMBOL.ZERO]: CircleIcons,
      [GAME_SYMBOL.TRIANGLE]: SquareIcon,
      [GAME_SYMBOL.SQUARE]: TriangleIcon,
    }[symbol] ?? CrossIcons;
  return <Icon />;
}
