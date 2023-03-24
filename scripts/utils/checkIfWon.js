import {gameState} from "../index.js";

export function checkIfWon() {
    return gameState.getMax() >= 2048;
}