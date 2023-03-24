export class GameState {
    constructor(rows, cols) {
        this._score = 0;
        this._tilesCount = 0;
        this._tilemap = [];
        this._isMoved = false;
        this._max = 2;
        for (let i = 0; i < rows; i++) {
            this._tilemap.push([]);
            for (let j = 0; j < cols; j++) {
                this._tilemap[i].push(null);
            }
        }

        this._shadowTiles = [];
        this._isMoving = false;
    }

    getScore() {
        return this._score;
    }
    setScore(value) {
        this._score = value;
    }
    getTilesCount() {
        return this._tilesCount;
    }
    setTilesCount(value) {
        this._tilesCount = value;
    }
    incTilesCount() {
        this._tilesCount += 1;
    }
    getIsMoving() {
        return this._isMoving;
    }
    setIsMoving(value) {
        this._isMoving = value;
    }
    getShadowTiles() {
        return this._shadowTiles;
    }
    pushToShadowTiles(item) {
        this._shadowTiles.push(item);
    }
    clearShadowTiles() {
        this._shadowTiles = [];
    }
    getTileMap() {
        return this._tilemap;
    }
    setItemInTileMap(row, col, value) {
        this._tilemap[row][col] = value;
    }
    getIsMoved() {
        return this._isMoved;
    }
    setIsMoved(value) {
        this._isMoved = value;
    }
    getMax() {
        return this._max;
    }
    setMaxIfGreater(value) {
        if (this._max < value) this._max = value;
    }
}