export class Score {
    constructor({
        scoreBackgroundColor,
        scoreInnerStartX,
        scoreInnerStartY,
        scoreWidth,
        scoreHeight,
        borderColor,
        borderWidth,
        font,
        textColor,
        textVerticalAdjustment,
        ctx,
    }) {
        this._scoreBackgroundColor = scoreBackgroundColor;
        this._scoreInnerStartX = scoreInnerStartX;
        this._scoreInnerStartY = scoreInnerStartY;
        this._scoreWidth = scoreWidth;
        this._scoreHeight = scoreHeight;
        this._borderColor = borderColor;
        this._borderWidth = borderWidth;
        this._font = font;
        this._textColor = textColor;
        this._textVerticalAdjustment = textVerticalAdjustment;
        this._ctx = ctx;
    }

    draw(score) {
        this._ctx.strokeStyle = this._borderColor;
        this._ctx.beginPath();
        this._ctx.roundRect(
            this._scoreInnerStartX,
            this._scoreInnerStartY,
            this._scoreWidth,
            this._scoreHeight,
            '50',
        );
        this._ctx.fillStyle = this._scoreBackgroundColor;
        this._ctx.fill();
        this._ctx.lineWidth = this._borderWidth;
        this._ctx.stroke();
        this._ctx.font = this._font;
        this._ctx.textAlign = 'center'
        this._ctx.textBaseline = 'middle'
        this._ctx.fillStyle = this._textColor;
        this._ctx.fillText('СЧЁТ: ' + score,
            this._scoreInnerStartX + this._scoreWidth / 2,
            this._scoreInnerStartY + this._scoreHeight / 2 + this._textVerticalAdjustment
        )
    }
}