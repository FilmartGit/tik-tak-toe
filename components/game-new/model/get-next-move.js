import { MOVE_ORDER } from "../constants";

export function getNexMove(current, playersCount, playersTimeOver) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount).filter(
    (symbol) => !playersTimeOver.includes(symbol),
  );
  const move = slicedMoveOrder.indexOf(current) + 1;
  return slicedMoveOrder[move] ?? slicedMoveOrder[0];
}
