import {Tile} from "../classes/Tile.js";
import {getColorByValue} from "./getColorByValue.js";
import {gameState} from "../index.js";
import {gameParams} from "../index.js";
import {checkIfFull} from "./checkIfFull.js";

export function createTileAndPutInRandomPlace(getPositionByRowAndCol, ctx, isValueTwo = false) {
    let val;
    if (isValueTwo) {
        val = 2;
    } else {
        val = Math.random() >= .9 ? 4 : 2;
    }

    function put() {
        let row = Math.floor(Math.random() * gameParams.rows)
        let col = Math.floor(Math.random() * gameParams.cols)

        if (gameState.getTileMap()[row][col] === null) {
            gameState.incTilesCount();
            gameState.setItemInTileMap(row, col, new Tile({
                width: gameParams.tileWidth,
                height: gameParams.tileHeight,
                col: col,
                row: row,
                color: getColorByValue(val),
                value: val,
                ctx: ctx,
                position: getPositionByRowAndCol(row, col),
                font: {
                    font: gameParams.font,
                    textColor: gameParams.textColor,
                    textVerticalAdjustment: gameParams.textVerticalAdjustment,
                },
                radius: gameParams.borderRadius,
            }))
        } else {
            if (checkIfFull()) {
                console.log('full')
            } else {
                put();
            }
        }
    }
    put();
}