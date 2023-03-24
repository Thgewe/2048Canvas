import {gameState} from "../index.js";

export function checkIfTilesMoving() {
    return gameState.getTileMap().some((arr) => {
        return arr.some(tile => {
            return tile && tile.getIsMoving()
        })
    }) || gameState.getShadowTiles().some((tile) => {
        return tile && tile.getIsMoving()
    })
}