import {gameState} from "../index.js";

export function checkIfFull() {
    return !gameState.getTileMap().some((arr) => {
        return arr.some(tile => {
            return tile === null
        })
    })
}