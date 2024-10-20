import avatarSrc1 from "./ui/images/avatar-1.png";
import avatarSrc2 from "./ui/images/avatar-2.jpg";
import avatarSrc3 from "./ui/images/avatar-3.jpg";
import avatarSrc4 from "./ui/images/avatar-4.jpg";

export const GAME_SYMBOL = {
  ZERO: "zero",
  CROSS: "cross",
  TRIANGLE: "triangle",
  SQUARE: "square",
};
export const MOVE_ORDER = [
  GAME_SYMBOL.CROSS,
  GAME_SYMBOL.ZERO,
  GAME_SYMBOL.TRIANGLE,
  GAME_SYMBOL.SQUARE,
];
export const PLAYERS = [
  {
    id: 1,
    name: "MS Cats arrow",
    rating: "1000",
    avatar: avatarSrc1,
    symbol: GAME_SYMBOL.CROSS,
  },
  {
    id: 2,
    name: "BlackAndWhite",
    rating: "900",
    avatar: avatarSrc2,
    symbol: GAME_SYMBOL.ZERO,
  },
  {
    id: 3,
    name: "Grandmaster",
    rating: "1900",
    avatar: avatarSrc3,
    symbol: GAME_SYMBOL.TRIANGLE,
  },
  {
    id: 4,
    name: "TikTokToe",
    rating: "350",
    avatar: avatarSrc4,
    symbol: GAME_SYMBOL.SQUARE,
  },
];
