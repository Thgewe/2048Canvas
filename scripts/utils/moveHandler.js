import {getColorByValue} from "./getColorByValue.js";
import {gameState} from "../index.js";
import {resetMergeState} from "./resetMergeState.js";

export function moveHandler({dir, rows, cols, tilemap, setTileInTileMap}) {
    switch (dir) {
        case 'up':
            for (let i = 1; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    tilesMove({
                        currentTile: tilemap[i][j],
                        checkWith: tilemap[i - 1][j],
                        row: i - 1,
                        col: j,
                        setRow: () => i = 1,
                        setCol: () => j = j - 1,
                        setCheckWith: (value) => setTileInTileMap(i - 1, j, value),
                        setCurrentTile: (value) => setTileInTileMap(i, j, value),
                    })
                }
            }
            break;
        case 'left':
            for (let i = 1; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    tilesMove({
                        currentTile: tilemap[j][i],
                        checkWith: tilemap[j][i - 1],
                        row: j,
                        col: i - 1,
                        setRow: () => j--,
                        setCol: () => i = 1,
                        setCheckWith: (value) => setTileInTileMap(j, i - 1, value),
                        setCurrentTile: (value) => setTileInTileMap(j, i, value),
                    })
                }
            }
            break;
        case 'down':
            for (let i = rows - 2; i >= 0; i--) {
                for (let j = cols - 1; j >= 0; j--) {
                    tilesMove({
                        currentTile: tilemap[i][j],
                        checkWith: tilemap[i + 1][j],
                        row: i + 1,
                        col: j,
                        setRow: () => i = rows - 2,
                        setCol: () => j++,
                        setCheckWith: (value) => setTileInTileMap(i + 1, j, value),
                        setCurrentTile: (value) => setTileInTileMap(i, j, value),
                    })
                }
            }
            break;
        case 'right':
            for (let i = cols - 2; i >= 0; i--) {
                for (let j = rows - 1; j >= 0; j--) {
                    tilesMove({
                        currentTile: tilemap[j][i],
                        checkWith: tilemap[j][i + 1],
                        row: j,
                        col: i + 1,
                        setRow: () => j++,
                        setCol: () => i = cols - 2,
                        setCheckWith: (value) => setTileInTileMap(j, i + 1, value),
                        setCurrentTile: (value) => setTileInTileMap(j, i, value),
                    })
                }
            }
            break;
    }
    resetMergeState();
}

function tilesMove({
   currentTile,
   checkWith,
   row,
   col,
   setRow,
   setCol,
   setCheckWith,
   setCurrentTile
}) {
    if (currentTile === null) return

    gameState.setIsMoving(true);
    if (
        checkWith &&
        currentTile.getValue() === checkWith.getValue() &&
        !currentTile.getIsMerged() &&
        !checkWith.getIsMerged()
    ) {
        currentTile.setRowAndCol(row, col);
        checkWith.setRowAndCol(row, col);
        checkWith.setIsMerged(true);

        gameState.pushToShadowTiles(currentTile);
        setCurrentTile(null);

        checkWith.setValue(2 * checkWith.getValue());
        gameState.setMaxIfGreater(checkWith.getValue());
        checkWith.setColor(getColorByValue(checkWith.getValue()));
        gameState.setScore(gameState.getScore() + checkWith.getValue());
        gameState.setTilesCount(gameState.getTilesCount() - 1);

        gameState.setIsMoved(true);
    } else if (checkWith === null) {
        currentTile.setRowAndCol(row, col);
        setCheckWith(currentTile);
        setCurrentTile(null);
        setRow();
        setCol();
        gameState.setIsMoved(true);
    }
}