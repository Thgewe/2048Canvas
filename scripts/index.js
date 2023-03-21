const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

const
    gameBackgroundColor = '#FFFFFF',
    borderColor = '#949494',
    borderWidth = 3,
    borderRadius = 4,
    boardBackgroundColor = '#D0C0AF',
    scoreBackgroundColor = '#DADADA',
    textColor = '#010101',
    canvasPadding = 10,
    boardGap = 10,
    boardPadding = 15,
    scoreMargin = 20,
    scorePadding = 12,
    fontSize = 32,
    font = fontSize + 'px serif',
    textVerticalAdjustment = 3,
    rows = 4,
    cols = 4,

    tileWidth = 80,
    tileHeight = 80,
    tileColor2 = '#EEE4DA',
    tileColor4 = '#EEE0C6',
    tileColor8 = '#F9B377',
    tileColor16 = '#FF9B60',
    tileColor32 = '#CA6A48',
    tileColor64 = '#EC6233',
    tileColor128 = '#E8C462',
    tileColor256 = '#E0BA55',
    tileColor512 = '#F3C54B',
    tileColor1024 = '#F2C138',
    tileColor2048 = '#F3BD29',

    boardWidth = cols * tileWidth + (cols - 1) * boardGap + boardPadding * 2,
    boardHeight = rows * tileWidth + (rows - 1) * boardGap + boardPadding * 2,
    scoreWidth = 270,
    scoreHeight = fontSize + 2 * borderWidth + 2 * scorePadding,
    scoreInnerStartX = canvasPadding + borderWidth + (boardWidth - scoreWidth) / 2,
    scoreInnerStartY = canvasPadding + borderWidth,
    boardInnerStartX = canvasPadding + borderWidth,
    boardInnerStartY = canvasPadding + borderWidth + scoreHeight + scoreMargin;


canvas.width = boardWidth + borderWidth * 2 + canvasPadding * 2;
canvas.height = boardHeight + borderWidth * 2 + canvasPadding * 2 + scoreHeight + scoreMargin;
ctx.fillStyle = gameBackgroundColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// board
ctx.strokeStyle = borderColor;
ctx.beginPath();
ctx.roundRect(
    boardInnerStartX,
    boardInnerStartY,
    boardWidth,
    boardHeight,
    borderRadius
);
ctx.fillStyle = boardBackgroundColor;
ctx.fill();
ctx.lineWidth = borderWidth;
ctx.stroke();
ctx.closePath();

function placeTile(col, row, color, value) {
    ctx.fillStyle = color;
    ctx.beginPath();
    const posX = boardInnerStartX + boardPadding + (col - 1) * (tileWidth + boardGap);
    const posY = boardInnerStartY + boardPadding + (row - 1) * (tileHeight + boardGap);
    ctx.roundRect(
        posX,
        posY,
        tileWidth,
        tileHeight,
        borderRadius
    )
    ctx.fill();
    ctx.font = font;
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = textColor;
    ctx.fillText(value, posX + tileWidth / 2, posY +  + tileHeight / 2 + textVerticalAdjustment)
}
placeTile(1, 1, tileColor32, 32)
placeTile(4, 1, tileColor2, 2)
placeTile(1, 3, tileColor2048, 2048)
placeTile(2, 4, tileColor128, 128)
placeTile(3, 2, tileColor16, 16)
placeTile(2, 2, tileColor16, 16)

// score
ctx.strokeStyle = borderColor;
ctx.beginPath();
ctx.roundRect(
    scoreInnerStartX,
    scoreInnerStartY,
    scoreWidth,
    scoreHeight,
    '50',
);
ctx.fillStyle = scoreBackgroundColor;
ctx.fill();
ctx.lineWidth = borderWidth;
ctx.stroke();
ctx.font = font;
ctx.textAlign = 'center'
ctx.textBaseline = 'middle'
ctx.fillStyle = textColor;
ctx.fillText('СЧЁТ: ' + 2048, scoreInnerStartX + scoreWidth / 2, scoreInnerStartY + scoreHeight / 2 + textVerticalAdjustment)
