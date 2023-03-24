import {input} from './utils/input.js';
import {Board} from "./classes/Board.js";
import {Score} from "./classes/Score.js";
import {GameState} from "./classes/GameState.js";
import {moveHandler} from "./utils/moveHandler.js";
import {checkIfTilesMoving} from "./utils/checkIfTilesMoving.js";
import {GameParams} from "./classes/GameParams.js";
import {createTileAndPutInRandomPlace} from "./utils/createTileAndPutInRandomPlace.js";
import {checkIfOver} from "./utils/checkIfOver.js";
import {renderTiles} from "./utils/renderTiles.js";
import {checkIfWon} from "./utils/checkIfWon.js";

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

export let gameParams;
export let gameState;
export let board;
let scoreBoard;

function start() {
    gameParams = new GameParams({
        updatesPerSecond: 60,
        gameBackgroundColor: '#FFFFFF',
        borderColor: '#949494',
        borderWidth: 3,
        borderRadius: 4,
        boardBackgroundColor: '#D0C0AF',
        scoreBackgroundColor: '#DADADA',
        textColor: '#010101',
        canvasPadding: 10,
        boardGap: 10,
        boardPadding: 15,
        scoreMargin: 20,
        scorePadding: 12,
        fontSize: 32,
        textVerticalAdjustment: 3,
        rows: 4,
        cols: 4,
        tileWidth: 80,
        tileHeight: 80,
        scoreWidth: 270,
    });
    gameState = new GameState(gameParams.rows, gameParams.cols)
    board = new Board({
        boardBackgroundColor: gameParams.boardBackgroundColor,
        boardInnerStartX: gameParams.boardInnerStartX,
        boardInnerStartY: gameParams.boardInnerStartY,
        boardWidth: gameParams.boardWidth,
        boardHeight: gameParams.boardHeight,
        borderRadius: gameParams.borderRadius,
        borderColor: gameParams.borderColor,
        borderWidth: gameParams.borderWidth,
        boardPadding: gameParams.boardPadding,
        boardGap: gameParams.boardGap,
        tileWidth: gameParams.tileWidth,
        tileHeight: gameParams.tileHeight,
        ctx,
    })
    scoreBoard = new Score({
        scoreBackgroundColor: gameParams.scoreBackgroundColor,
        scoreInnerStartX: gameParams.scoreInnerStartX,
        scoreInnerStartY: gameParams.scoreInnerStartY,
        scoreWidth: gameParams.scoreWidth,
        scoreHeight: gameParams.scoreHeight,
        borderColor: gameParams.borderColor,
        borderWidth: gameParams.borderWidth,
        font: gameParams.font,
        textColor: gameParams.textColor,
        score: gameState.getScore(),
        textVerticalAdjustment: gameParams.textVerticalAdjustment,
        ctx,
    })

    canvas.width = gameParams.boardWidth + gameParams.borderWidth * 2 + gameParams.canvasPadding * 2;
    canvas.height = gameParams.boardHeight + gameParams.borderWidth * 2 + gameParams.canvasPadding * 2 + gameParams.scoreHeight + gameParams.scoreMargin;
    ctx.fillStyle = gameParams.gameBackgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    createTileAndPutInRandomPlace((row, col) =>
        board.getPositionOnBoardByRowAndCol(row, col), ctx, true
    );
    createTileAndPutInRandomPlace((row, col) =>
        board.getPositionOnBoardByRowAndCol(row, col), ctx, true
    );

    window.requestAnimationFrame(main)
}
start();


let lastUpdateTime = 0;

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondSinceLastUpdate = (currentTime - lastUpdateTime) / 1000

    if (secondSinceLastUpdate >= 1 / gameParams.updatesPerSecond) {
        fixedUpdate()
        lastUpdateTime = currentTime;
    }
}

function fixedUpdate() {
    board.draw();
    scoreBoard.draw(gameState.getScore());

    renderTiles(gameState.getShadowTiles());
    renderTiles(gameState.getTileMap());

    if (gameState.getIsMoving() && !checkIfTilesMoving()) {
        gameState.setIsMoving(false);
        gameState.clearShadowTiles();

        if (gameState.getIsMoved()) {
            createTileAndPutInRandomPlace((row, col) => board.getPositionOnBoardByRowAndCol(row, col), ctx);
            gameState.setIsMoved(false);
            if (checkIfWon()) {
                renderTiles(gameState.getTileMap());
                setTimeout(() => {
                    alert('Уровень пройден')
                    start();
                })
            }
            if (gameState.getTilesCount() >= gameParams.rows * gameParams.cols && checkIfOver()) {
                renderTiles(gameState.getTileMap());
                setTimeout(() => {
                    alert('Нельзя сделать ход»')
                    start();
                })
            }
        }
    }
}

input(canvas, (dir) => {
    if (!gameState.getIsMoving()) {
        moveHandler({
            dir,
            rows: gameParams.rows,
            cols: gameParams.cols,
            tilemap: gameState.getTileMap(),
            setTileInTileMap: (row, col, value) =>
                gameState.setItemInTileMap(row, col, value),
        })
    }
})