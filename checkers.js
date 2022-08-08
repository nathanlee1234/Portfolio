const layout = [
    null, 0, null, 1, null, 2, null, 3, 
    4, null, 5, null, 6, null, 7, null,
    null, 8, null, 9, null, 10, null, 11,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    12, null, 13, null, 14, null, 15, null,
    null, 16, null, 17, null, 18, null, 19,
    20, null, 21, null, 22, null, 23, null
];

const tiles = document.querySelectorAll("td");
let redPieces = document.getElementsByClassName("red-piece");
let blackPieces = document.getElementsByClassName("black-piece");
let redTurn = true;
let redScore = 12;
let blackScore = 12;
let playerPieces;

let selectedPiece = {
    pieceId: -1,
    pieceTile: -1,
    king: false,
    topLeft: false,
    jumpTopLeft: false,
    topRight: false,
    jumpTopRight: false,
    bottomLeft: false,
    jumpBottomLeft: false,
    bottomRight: false,
    jumpBottomRight: false
};

function startTurn() {
    if (redTurn) {
        playerPieces = redPieces;
        
    } else {
        playerPieces = blackPieces;
    };
    for (let piece of playerPieces) {
        piece.addEventListener("click", getPiece);
    };
    checkForTie();
};
function getPiece() {
    reset();
    updateSelectedPiece();
    getAvailableMoves();
    if (selectedPiece.topLeft || selectedPiece.topRight || selectedPiece.bottomLeft || selectedPiece.bottomRight || selectedPiece.jumpTopLeft || selectedPiece.jumpTopRight || selectedPiece.jumpBottomLeft || selectedPiece.jumpBottomRight) {
        document.getElementById(selectedPiece.pieceId).style.border = "3px solid green";
    }
};
function reset() {
    for (let tile of tiles) {
        tile.removeAttribute("onclick");
    }
    for (let piece of playerPieces) {
        if (piece.classList.contains("king")) {
            piece.style.border = "3px solid gold";
        } else {
            piece.style.border = "3px solid white";
        }
    }
    selectedPiece.king = false;
    selectedPiece.topLeft = false;
    selectedPiece.jumpTopLeft = false;
    selectedPiece.topRight = false;
    selectedPiece.jumpTopRight = false;
    selectedPiece.bottomLeft = false;
    selectedPiece.jumpBottomLeft = false;
    selectedPiece.bottomRight = false;
    selectedPiece.jumpBottomRight = false;
};
function updateSelectedPiece() {
    selectedPiece.pieceId = parseInt(event.target.id);
    selectedPiece.pieceTile = layout.indexOf(parseInt(event.target.id));
    if (document.getElementById(selectedPiece.pieceId).classList.contains("king")) {
        selectedPiece.king = true;
    };
};
function getAvailableMoves() {
    if (!redTurn) {
        if (layout[selectedPiece.pieceTile - 9] === null && !tiles[selectedPiece.pieceTile - 9].classList.contains("empty") && selectedPiece.king) {
            selectedPiece.topLeft = true;
            tiles[selectedPiece.pieceTile - 9].setAttribute("onclick", "movePiece(-9)");
        };
        if (layout[selectedPiece.pieceTile - 7] === null && !tiles[selectedPiece.pieceTile - 7].classList.contains("empty") && selectedPiece.king) {
            selectedPiece.topRight = true;
            tiles[selectedPiece.pieceTile - 7].setAttribute("onclick", "movePiece(-7)");
        };
        if (layout[selectedPiece.pieceTile + 7] === null && !tiles[selectedPiece.pieceTile + 7].classList.contains("empty")) {
            selectedPiece.bottomLeft = true;
            tiles[selectedPiece.pieceTile + 7].setAttribute("onclick", "movePiece(7)");
        };
        if (layout[selectedPiece.pieceTile + 9] === null && !tiles[selectedPiece.pieceTile + 9].classList.contains("empty")) {
            selectedPiece.bottomRight = true;
            tiles[selectedPiece.pieceTile + 9].setAttribute("onclick", "movePiece(9)");
        };
        if (layout[selectedPiece.pieceTile - 18] === null && !tiles[selectedPiece.pieceTile - 18].classList.contains("empty") && layout[selectedPiece.pieceTile - 9] >= 12 && selectedPiece.king) {
            selectedPiece.jumpTopLeft = true;
            tiles[selectedPiece.pieceTile - 18].setAttribute("onclick", "movePiece(-18)");
        };
        if (layout[selectedPiece.pieceTile - 14] === null && !tiles[selectedPiece.pieceTile - 14].classList.contains("empty") && layout[selectedPiece.pieceTile - 7] >= 12 && selectedPiece.king) {
            selectedPiece.jumpTopRight = true;
            tiles[selectedPiece.pieceTile - 14].setAttribute("onclick", "movePiece(-14)");
        };
        if (layout[selectedPiece.pieceTile + 14] === null && !tiles[selectedPiece.pieceTile + 14].classList.contains("empty") && layout[selectedPiece.pieceTile + 7] >= 12) {
            selectedPiece.jumpBottomLeft = true;
            tiles[selectedPiece.pieceTile + 14].setAttribute("onclick", "movePiece(14)");
        };
        if (layout[selectedPiece.pieceTile + 18] === null && !tiles[selectedPiece.pieceTile + 18].classList.contains("empty") && layout[selectedPiece.pieceTile + 9] >= 12) {
            selectedPiece.jumpBottomRight = true;
            tiles[selectedPiece.pieceTile + 18].setAttribute("onclick", "movePiece(18)");
        };
    } else {
        if (layout[selectedPiece.pieceTile - 9] === null && !tiles[selectedPiece.pieceTile - 9].classList.contains("empty")) {
            selectedPiece.topLeft = true;
            tiles[selectedPiece.pieceTile - 9].setAttribute("onclick", "movePiece(-9)");
        };
        if (layout[selectedPiece.pieceTile - 7] === null && !tiles[selectedPiece.pieceTile - 7].classList.contains("empty")) {
            selectedPiece.topRight = true;
            tiles[selectedPiece.pieceTile - 7].setAttribute("onclick", "movePiece(-7)");
        };
        if (layout[selectedPiece.pieceTile + 7] === null && !tiles[selectedPiece.pieceTile + 7].classList.contains("empty") && selectedPiece.king) {
            selectedPiece.bottomLeft = true;
            tiles[selectedPiece.pieceTile + 7].setAttribute("onclick", "movePiece(7)");
        };
        if (layout[selectedPiece.pieceTile + 9] === null && !tiles[selectedPiece.pieceTile + 9].classList.contains("empty") && selectedPiece.king) {
            selectedPiece.bottomRight = true;
            tiles[selectedPiece.pieceTile + 9].setAttribute("onclick", "movePiece(9)");
        };
        if (layout[selectedPiece.pieceTile - 18] === null && !tiles[selectedPiece.pieceTile - 18].classList.contains("empty") && layout[selectedPiece.pieceTile - 9] < 12) {
            selectedPiece.jumpTopLeft = true;
            tiles[selectedPiece.pieceTile - 18].setAttribute("onclick", "movePiece(-18)");
        };
        if (layout[selectedPiece.pieceTile - 14] === null && !tiles[selectedPiece.pieceTile - 14].classList.contains("empty") && layout[selectedPiece.pieceTile - 7] < 12) {
            selectedPiece.jumpTopRight = true;
            tiles[selectedPiece.pieceTile - 14].setAttribute("onclick", "movePiece(-14)");
        };
        if (layout[selectedPiece.pieceTile + 14] === null && !tiles[selectedPiece.pieceTile + 14].classList.contains("empty") && layout[selectedPiece.pieceTile + 7] < 12 && selectedPiece.king) {
            selectedPiece.jumpBottomLeft = true;
            tiles[selectedPiece.pieceTile + 14].setAttribute("onclick", "movePiece(14)");
        };
        if (layout[selectedPiece.pieceTile + 18] === null && !tiles[selectedPiece.pieceTile + 18].classList.contains("empty") && layout[selectedPiece.pieceTile + 9] < 12 && selectedPiece.king) {
            selectedPiece.jumpBottomRight = true;
            tiles[selectedPiece.pieceTile + 18].setAttribute("onclick", "movePiece(18)");
        };
    }
};
function movePiece(number) {
    document.getElementById(selectedPiece.pieceId).remove();
    tiles[selectedPiece.pieceTile].innerHTML = "";
    layout[selectedPiece.pieceTile] = null;
    layout[selectedPiece.pieceTile + number] = parseInt(selectedPiece.pieceId);
    if (redTurn) {
        if (selectedPiece.king) {
            tiles[selectedPiece.pieceTile + number].innerHTML = `<div class='red-piece king' id="${selectedPiece.pieceId}"</div>`;
            redPieces = document.getElementsByClassName("red-piece");
        } else {
            tiles[selectedPiece.pieceTile + number].innerHTML = `<div class='red-piece' id="${selectedPiece.pieceId}"</div>`;
            redPieces = document.getElementsByClassName("red-piece");
        };
        if (selectedPiece.pieceTile + number <= 7) {
            document.getElementById(selectedPiece.pieceId).classList.add("king");
        };
    } else {
        if (selectedPiece.king) {
            tiles[selectedPiece.pieceTile + number].innerHTML = `<div class='black-piece king' id="${selectedPiece.pieceId}"</div>`;
            blackPieces = document.getElementsByClassName("black-piece");
        } else {
            tiles[selectedPiece.pieceTile + number].innerHTML = `<div class='black-piece' id="${selectedPiece.pieceId}"</div>`;
            blackPieces = document.getElementsByClassName("black-piece");
        }
        if (selectedPiece.pieceTile + number >= 57) {
            document.getElementById(selectedPiece.pieceId).classList.add("king");
        };
    };
    if (number === 14 || number === -14 || number === 18 || number === -18) {
        layout[selectedPiece.pieceTile + number / 2] = null;
        tiles[selectedPiece.pieceTile + number / 2].innerHTML = "";
        if (redTurn) {
            blackScore--;
        } else {
            redScore--;
        };
    };
    checkForWin();
    for (let piece of playerPieces) {
        piece.removeAttribute("onclick");
        piece.removeEventListener("click", getPiece);
    };
    selectedPiece.pieceId = -1;
    selectedPiece.pieceTile = -1;
    changePlayer();
};
function checkForTie() {
    for (let piece of playerPieces) {
        
    };
};
function checkForWin() {
    if (blackScore === 0) {
        document.getElementById("end-text").style.display = "value";
        document.getElementById("red-wins").style.display = "value";
    } else if (redScore === 0) {
        document.getElementById("end-text").style.display = "value";
        document.getElementById("black-wins").style.display = "value";
    }
};
function changePlayer() {
    redTurn = !redTurn;
    startTurn();
};

startTurn();
