export function input(canvas, onInput) {

    const minLength = 100;

    let isMouseDown = false;

    let start = {x: 0, y: 0};
    let end = {x: 0, y: 0};
    let vector = {x: 0, y: 0};

    canvas.addEventListener("touchstart", (e) => {
        setStart(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
    })
    canvas.addEventListener("touchend", (e) => {
        setEndAndVector(e.changedTouches[0].clientX, e.changedTouches[0].clientY);

        directionHandler(vector, minLength, onInput)
    })
    canvas.addEventListener("mousedown", (e) => {
        setStart(e.clientX, e.clientY);
        isMouseDown = true;
    })
    canvas.addEventListener('mouseup', (e) => {
        if (!isMouseDown) return
        setEndAndVector(e.clientX, e.clientY);

        directionHandler(vector, minLength, onInput)
        isMouseDown = false;
    })
    canvas.addEventListener('mouseout', (e) => {
        if (!isMouseDown) return
        setEndAndVector(e.clientX, e.clientY);

        directionHandler(vector, minLength, onInput);
        isMouseDown = false;
    })

    function setStart(x, y) {
        start.x = x;
        start.y = y;
    }
    function setEndAndVector(x, y) {
        end.x = x;
        end.y = y;
        vector.x = end.x - start.x;
        vector.y = end.y - start.y;
    }
}
function directionHandler(vector, minLength, callback) {
    const moveDir = Math.atan2(vector.y, vector.x) < 0
        ? Math.abs(Math.atan2(vector.y, vector.x))
        : 2 * Math.PI - Math.atan2(vector.y, vector.x)
    const length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);

    if (length > minLength) {
        switch (true) {
            case moveDir <= Math.PI / 4 || moveDir > 7 * Math.PI / 4:
                callback('right');
                break;
            case moveDir <= 3 * Math.PI / 4:
                callback('up');
                break;
            case moveDir <= 5 * Math.PI / 4:
                callback('left');
                break;
            case moveDir <= 7 * Math.PI / 4:
                callback('down');
                break;
        }
    }
}