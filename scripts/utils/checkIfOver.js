import {gameState} from "../index.js";

export function checkIfOver() {
    for (let i = 0; i < gameState.getTileMap().length; i++) {
        for (let j = 0; j < gameState.getTileMap()[i].length; j++) {
            if (
                (
                    typeof gameState.getTileMap()[i][j  + 1] !== "undefined" &&
                    gameState.getTileMap()[i][j].getValue() === gameState.getTileMap()[i][j  + 1].getValue()
                ) ||
                (
                    typeof gameState.getTileMap()[i + 1] !== "undefined" &&
                    typeof gameState.getTileMap()[i + 1][j] !== "undefined" &&
                    gameState.getTileMap()[i][j].getValue() === gameState.getTileMap()[i + 1][j].getValue()
                )
            ) {
                return false;
            }
        }
    }
    return true;
}