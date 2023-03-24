export class Tile {
    constructor({
        color,
        value,
        ctx,
        row,
        col,
        width,
        height,
        radius,
        position,
        font,
    }) {
        this._color = color;
        this._value = value;
        this._ctx = ctx;
        this._row = row;
        this._col = col;
        this._width = width;
        this._height = height;
        this._isMerged = false;
        this._isMoving = false;
        this._radius = radius;
        this._position = {
            x: position.x,
            y: position.y,
        };
        this._font = {
            font: font.font,
            textColor: font.textColor,
            textVerticalAdjustment: font.textVerticalAdjustment,
        };
        this._prevPosition = {
            x: position.x,
            y: position.y,
        }
    }
    getIsMoving() {
        return this._isMoving;
    }
    getColumn() {
        return this._col;
    }
    getRow() {
        return this._row;
    }
    getValue() {
        return this._value;
    }
    setValue(value) {
        this._value = value;
    }
    getIsMerged() {
        return this._isMerged;
    }
    setIsMerged(isMerged) {
        this._isMerged = isMerged;
    }
    setColor(color) {
        this._color = color;
    }
    setRowAndCol(row, col) {
        this._row = row;
        this._col = col;
    }

    draw() {
        this._ctx.fillStyle = this._color;
        this._ctx.beginPath();
        this._ctx.roundRect(
            this._position.x,
            this._position.y,
            this._width,
            this._height,
            this._radius,
        )
        this._ctx.fill();
        this._ctx.font = this._font.font;
        this._ctx.textAlign = 'center'
        this._ctx.textBaseline = 'middle'
        this._ctx.fillStyle = this._font.textColor;
        this._ctx.fillText(
            this._value,
            this._position.x + this._width / 2,
            this._position.y +  + this._height / 2 + this._font.textVerticalAdjustment
        )
        this._ctx.closePath();
    }
    move(posX, posY) {
        if (
            Math.abs(this._prevPosition.x - this._position.x) >= Math.abs(posX - this._prevPosition.x) &&
            Math.abs(this._prevPosition.y - this._position.y) >= Math.abs(posY - this._prevPosition.y)
        ) {
            this._prevPosition.x = posX;
            this._prevPosition.y = posY;
            this._position.x = posX;
            this._position.y = posY;
            this.draw();
            if (this._isMoving) {
                this._isMoving = false
            }

            return
        }

        this._isMoving = true
        this._position.x += (posX - this._prevPosition.x) / 5;
        this._position.y += (posY - this._prevPosition.y) / 5;

        this.draw();
    }
}