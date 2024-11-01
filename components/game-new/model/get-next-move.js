import { MOVE_ORDER } from "../constants";

export function getNexMove(state) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, state.playersCount).filter(
    symbol => state.timers[symbol] > 0
  );
  const move = slicedMoveOrder.indexOf(state.currentMove) + 1;
  return slicedMoveOrder[move] ?? slicedMoveOrder[0];
}
