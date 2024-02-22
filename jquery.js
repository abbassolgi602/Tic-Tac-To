const canvas = document.querySelector('#canvas');
const gameOverPattern = document.querySelector('.gameover');
const playerOne = document.querySelector('.player-one span');
const playerTwo = document.querySelector('.player-two span');
const ctx = canvas.getContext('2d');
const size = 200;

var playerOnePoints = 0;
var playerTwoPoints = 0;

var arry = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        ctx.beginPath();
        ctx.rect(i * size, j * size, size, size);
        ctx.strokeStyle = "#262407";
        ctx.lineWidth = 2;
        ctx.shadowBlur = 0;
        ctx.stroke();
    }
}

var userTurn = 'Player_one';
canvas.addEventListener('click', (e) => {
    var PositionHoriz = Math.floor(e.offsetX / size);
    var Positionver = Math.floor(e.offsetY / size);
    if (arry[Positionver][PositionHoriz] == 0) {
        if (userTurn == 'Player_one') {
            arry[Positionver][PositionHoriz] = 'Player_one';
            chackGame(userTurn);
            userTurn = 'Player_two';
        } else {
            arry[Positionver][PositionHoriz] = 'Player_two';
            chackGame(userTurn);
            userTurn = 'Player_one';
        }
    }
    draw();
    console.log(arry);
});

var drawgame = 0;
function chackGame(userTurn) {
    if (
        (arry[0][0] == arry[0][1] && arry[0][1] == arry[0][2] && arry[0][0] != 0)
        || (arry[1][0] == arry[1][1] && arry[1][1] == arry[1][2] && arry[1][0] != 0)
        || (arry[2][0] == arry[2][1] && arry[2][1] == arry[2][2] && arry[2][0] != 0)

        || (arry[0][0] == arry[1][0] && arry[1][0] == arry[2][0] && arry[0][0] != 0)
        || (arry[0][1] == arry[1][1] && arry[1][1] == arry[2][1] && arry[0][1] != 0)
        || (arry[0][2] == arry[1][2] && arry[1][2] == arry[2][2] && arry[0][2] != 0)

        || (arry[0][0] == arry[1][1] && arry[1][1] == arry[2][2] && arry[0][0] != 0)
        || (arry[0][2] == arry[1][1] && arry[1][1] == arry[2][0] && arry[1][1] != 0)
    ) {
        if (userTurn == 'Player_one') {
            playerOnePoints++;
            playerOne.innerHTML = playerOnePoints;
        } else {
            playerTwoPoints++;
            playerTwo.innerHTML = playerTwoPoints;
        }
        gameOverPattern.classList.add('active');
    }
}

function restartGame() {
    arry = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    ctx.clearRect(0, 0, 600, 600);
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            ctx.beginPath();
            ctx.rect(i * size, j * size, size, size);
            ctx.strokeStyle = "#262407";
            ctx.lineWidth = 2;
            ctx.shadowBlur = 0;
            ctx.stroke();
        }
    }
    gameOverPattern.classList.remove('active');
}

function draw() {
    ctx.clearRect(0, 0, 600, 600);
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            ctx.beginPath();
            ctx.rect(i * size, j * size, size, size);
            ctx.strokeStyle = "#262407";
            ctx.lineWidth = 2;
            ctx.shadowBlur = 0;
            ctx.stroke();
            if (arry[j][i] == 'Player_one') {
                ctx.beginPath();
                ctx.arc(i * size + size / 2, j * size + size / 2, 60, 0, 360);
                ctx.strokeStyle = "#be820a";
                ctx.lineWidth = 10;
                ctx.shadowColor = "#be820a";
                ctx.shadowBlur = 15;
                ctx.stroke();
                ctx.closePath();
            } else if (arry[j][i] == 'Player_two') {
                ctx.beginPath();
                ctx.rect(i * size + size / 2 - 50, j * size + size / 2 - 50, 100, 100);
                ctx.strokeStyle = "#fff";
                ctx.lineWidth = 10;
                ctx.shadowColor = "#fff";
                ctx.shadowBlur = 15;
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
}
