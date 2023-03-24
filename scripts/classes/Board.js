export class Board {
    constructor({
        boardBackgroundColor,
        boardInnerStartX,
        boardInnerStartY,
        boardWidth,
        boardHeight,
        borderRadius,
        borderColor,
        borderWidth,
        boardPadding,
        boardGap,
        tileWidth,
        tileHeight,
        ctx,
    }) {
        this._boardBackgroundColor = boardBackgroundColor;
        this._boardInnerStartX = boardInnerStartX;
        this._boardInnerStartY = boardInnerStartY;
        this._boardWidth = boardWidth;
        this._boardHeight = boardHeight;
        this._borderRadius = borderRadius;
        this._borderColor = borderColor;
        this._borderWidth = borderWidth;
        this._boardPadding = boardPadding;
        this._boardGap = boardGap;
        this._tileWidth = tileWidth;
        this._tileHeight = tileHeight;
        this._ctx = ctx;
    }

    draw() {
        this._ctx.strokeStyle = this._borderColor;
        this._ctx.beginPath();
        this._ctx.roundRect(
            this._boardInnerStartX,
            this._boardInnerStartY,
            this._boardWidth,
            this._boardHeight,
            this._borderRadius
        );
        this._ctx.fillStyle = this._boardBackgroundColor;
        this._ctx.fill();
        this._ctx.lineWidth = this._borderWidth;
        this._ctx.stroke();
        this._ctx.closePath();
    }
    getPositionOnBoardByRowAndCol(row, col) {
        return {
            x: this._boardInnerStartX + this._boardPadding + col * (this._tileWidth + this._boardGap),
            y: this._boardInnerStartY + this._boardPadding + row * (this._tileHeight + this._boardGap),
        }
    }
}