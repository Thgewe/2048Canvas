import {gameState} from "../index.js";

export function resetMergeState() {
    gameState.getTileMap().forEach((arr) => {
        arr.forEach((tile) => {
            if (tile) tile.setIsMerged(false)
        })
    })
}