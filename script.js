let board;
let score = 0;

const rows = 4;
const columns = 4;

window.onload = function () {
    setGame();

    document
        .getElementById("restart")
        .addEventListener("click", restartGame);
};


function setGame() {
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");

            tile.id = r + "-" + c;

            updateTile(tile, 0);

            document.getElementById("board").append(tile);
        }
    }

    setTwo();
    setTwo();
}


function restartGame() {
    score = 0;

    document.getElementById("score").innerText = score;
    document.getElementById("message").innerText = "";

    document.getElementById("board").innerHTML = "";

    setGame();
}


function updateTile(tile, num) {
    tile.innerText = "";
    tile.className = "";

    tile.classList.add("tile");

    if (num > 0) {
        tile.innerText = num;

        if (num <= 4096) {
            tile.classList.add("x" + num);
        } else {
            tile.classList.add("x8192");
        }

        if (num == 2048) {
            document.getElementById("message").innerText = 
                "YOU WIN!";
        }
    }
}


document.addEventListener("keyup", (e) => {

    if(e.code === "ArrowLeft") {
        slideLeft();
        setTwo();
    }

    else if (e.code === "ArrowRight") {
        slideRight();
        setTwo();
    }

    else if (e.code === "ArrowDown") {
        slideDown();
        setTwo();
    }

    else if (e.code === "ArrowUp") {
        slideUp();
        setTwo();
    }

    document.getElementById("score").innerText = score;

    if (checkGameOver()) {
        document.getElementById("message").innerText =
            "GAME OVER!";
    }
});


function filterZero(row) {
    return row.filter(num => num !== 0);
}


function slide(row) {
    row = filterZero(row);

    for (let i = 0; i < row.length - 1; i++) {
        if (row[i] === row[i + 1]) {
            row[i] *= 2;
            row[i + 1] = 0;
            score += row[i];
        }
    }

    row = filterZero(row);

    while (row.length < columns) {
        row.push(0);
    }

    return row;
}


function slideLeft() {
    for(let r = 0; r < rows; r++) {

        let row = board[r];
        row = slide(row);

        board[r] = row;

        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r + "-" + c);
            updateTile(tile, board[r][c]);
        }
    }
}


function slideRight() {
    for (let r = 0; r < rows; r++) {

        let row = board[r];
        row.reverse();

        row = slide(row);

        row.reverse();

        board[r] = row;

        for(let c = 0; c < columns; c++) {
            let tile = document.getElementById(r + "-" + c);
            updateTile(tile, board[r][c]);
        }
    }
}


function slideUp() {
    for (let c = 0; c < columns; c++) {

        let row = [];

        for (let r = 0; r < rows; r++) {
            row.push(board[r][c]);
        }

        row = slide(row);

        for (let r = 0; r < rows; r++) {
            board[r][c] = row[r];

            let tile = document.getElementById(r + "-" + c);
            updateTile(tile, board[r][c]);
        }
    }
}


function slideDown() {
    for (let c = 0; c < columns; c++) {
        let row = [];

        for (let r = 0; r < rows; r++) {
            row.push(board[r][c]);
        }

        row.reverse();

        row = slide(row);

        row.reverse();

        for (let r = 0; r < rows; r++) {
            board[r][c] = row[r];

            let tile = document.getElementById(r + "-" + c);
            updateTile(tile, board[r][c]);
        }
    }
}


function setTwo() {
    if(!hasEmptyTile()) {
        return;
    }

    let found = false;

    while(!found) {
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);

        if (board[r][c] === 0) {
            board[r][c] = 2;

            let tile = document.getElementById(r + "-" + c);

            updateTile(tile, 2);

            found = true;
        }
    }
}


function hasEmptyTile() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] === 0) {
                return true;
            }
        }
    }
    return false;
}


function checkGameOver() {
    if (hasEmptyTile()) {
        return false;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 1; c++) {
            if (board[r][c] === board[r][c + 1]) {
                return false;
            }
        }
    }

    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 1; r++) {
            if (board[r][c] === board[r + 1][c]) {
                return false;
            }
        }
    }

    return true;
}