export class GameParams {
    constructor({
        updatesPerSecond,
        gameBackgroundColor,
        borderColor,
        borderWidth,
        borderRadius,
        boardBackgroundColor,
        scoreBackgroundColor,
        textColor,
        canvasPadding,
        boardGap,
        boardPadding,
        scoreMargin,
        scorePadding,
        fontSize,
        textVerticalAdjustment,
        rows,
        cols,
        tileWidth,
        tileHeight,
        scoreWidth,
    }) {
        this._updatesPerSecond = updatesPerSecond;
        this._gameBackgroundColor = gameBackgroundColor;
        this._borderColor = borderColor;
        this._borderWidth = borderWidth;
        this._borderRadius = borderRadius;
        this._boardBackgroundColor = boardBackgroundColor;
        this._scoreBackgroundColor = scoreBackgroundColor;
        this._textColor = textColor;
        this._canvasPadding = canvasPadding;
        this._boardGap = boardGap;
        this._boardPadding = boardPadding;
        this._scoreMargin = scoreMargin;
        this._scorePadding = scorePadding;
        this._fontSize = fontSize;
        this._textVerticalAdjustment = textVerticalAdjustment;
        this._rows = rows;
        this._cols = cols;
        this._tileWidth = tileWidth;
        this._tileHeight = tileHeight;
        this._scoreWidth = scoreWidth;

        this._font = this._fontSize + 'px serif';
        this._boardWidth = this._cols * this._tileWidth + (this._cols - 1) * this._boardGap + this._boardPadding * 2;
        this._boardHeight = this._rows * this._tileWidth + (this._rows - 1) * this._boardGap + this._boardPadding * 2;
        this._scoreHeight = this._fontSize + 2 * this._borderWidth + 2 * this._scorePadding;
        this._scoreInnerStartX = this._canvasPadding + this._borderWidth + (this._boardWidth - this._scoreWidth) / 2;
        this._scoreInnerStartY = this._canvasPadding + this._borderWidth;
        this._boardInnerStartX = this._canvasPadding + this._borderWidth;
        this._boardInnerStartY = this._canvasPadding + this._borderWidth + this._scoreHeight + this._scoreMargin;
    }

    get updatesPerSecond() {
        return this._updatesPerSecond;
    }
    get gameBackgroundColor() {
        return this._gameBackgroundColor;
    }
    get borderColor() {
        return this._borderColor;
    }
    get borderWidth() {
        return this._borderWidth;
    }
    get borderRadius() {
        return this._borderRadius;
    }
    get boardBackgroundColor() {
        return this._boardBackgroundColor;
    }
    get scoreBackgroundColor() {
        return this._scoreBackgroundColor;
    }
    get textColor() {
        return this._textColor;
    }
    get canvasPadding() {
        return this._canvasPadding;
    }
    get boardGap() {
        return this._boardGap;
    }
    get boardPadding() {
        return this._boardPadding;
    }
    get scoreMargin() {
        return this._scoreMargin;
    }
    get font() {
        return this._font;
    }
    get textVerticalAdjustment() {
        return this._textVerticalAdjustment;
    }
    get rows() {
        return this._rows;
    }
    get cols() {
        return this._cols;
    }
    get tileWidth() {
        return this._tileWidth;
    }
    get tileHeight() {
        return this._tileHeight;
    }
    get boardWidth() {
        return this._boardWidth;
    }
    get boardHeight() {
        return this._boardHeight;
    }
    get scoreWidth() {
        return this._scoreWidth;
    }
    get scoreHeight() {
        return this._scoreHeight;
    }
    get scoreInnerStartX() {
        return this._scoreInnerStartX;
    }
    get scoreInnerStartY() {
        return this._scoreInnerStartY;
    }
    get boardInnerStartX() {
        return this._boardInnerStartX;
    }
    get boardInnerStartY() {
        return this._boardInnerStartY;
    }
}