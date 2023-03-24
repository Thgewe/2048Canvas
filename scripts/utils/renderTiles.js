import {board} from "../index.js";

export function renderTiles(tiles) {
    tiles.forEach((arr) => {
        if (arr instanceof Array) {
            arr.forEach((tile) => {
                if (tile) {
                    const newPos = board.getPositionOnBoardByRowAndCol(tile.getRow(), tile.getColumn());
                    tile.move(
                        newPos.x,
                        newPos.y,
                    );
                }
            })
        } else {
            const newPos = board.getPositionOnBoardByRowAndCol(arr.getRow(), arr.getColumn());
            arr.move(
                newPos.x,
                newPos.y,
            );
        }
    })
}