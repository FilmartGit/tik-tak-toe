import { GAME_SYMBOL } from "../constants";
import { getNexMove } from "./get-next-move";

export const GAME_STATE_ACTION = {
  CELL_CLICK: "cell-click",
};

export const initGameState = ({ playersCount }) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: GAME_SYMBOL.CROSS,
  playersCount,
});

export const gameStateReducer = (state, action) => {
  switch (action.type) {
    case GAME_STATE_ACTION.CELL_CLICK: {
      if (state.cells[action.index]) {
        return state;
      }
      return {
        ...state,
        currentMove: getNexMove(
          state.currentMove,
          state.playersCount,
          state.playersTimeOver,
        ),
        cells: state.cells.map((cell, i) =>
          i === action.index ? state.currentMove : cell,
        ),
      };
    }
    default: {
      return state;
    }
  }
};