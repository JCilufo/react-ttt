import { WINNING_INDICES } from "./constants.js";

export const calculateWinner = (board) => {
  for (const player of ["X", "O"]) {
    for (const line of WINNING_INDICES) {
      if (line.every((index) => board[index] === player)) {
        return {
          winner: player,
          line,
        };
      }
    }
  }
  return null;
};
