//game operation variables
var breakout = document.getElementById("breakout");
var game = breakout.getContext("2d");
var x = breakout.width/2;
var y = breakout.height-30;
var dx = 2;
var dy = -2;
var ballSize = 10;
var padH = 10;
var padW = 75;
var padX = (breakout.width-padW) / 2;
var right = false;
var left = false;

//brick variables
var brickRow = 3;
var brickColumn = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

// moving the pad using directional buttons
document.addEventListener("keydown", downHandle, false);
document.addEventListener("keyup", upHandle, false);

//pressed keys action
function downHandle(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
    right = true;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft") {
    left = true;
  }
}

//released keys action
function upHandle(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
    right = false;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft") {
    left = false;
  }
}

// // darkgreen square
// game.beginPath();
// game.rect(20,40,50,50);
// game.fillStyle = "darkgreen";
// game.fill(); //can be replace for game.stroke();
// game.closePath();

// // green circle
// game.beginPath();
// game.arc(240, 160, 20, 0, Math.PI*2, false);
// game.fillStyle = "green";
// game.fill(); //can be replace for game.stroke();
// game.closePath();

// // empty rectangle for game
// game.beginPath();
// game.rect(160, 10, 100, 40);
// game.strokeStyle = "blue";
// game.stroke();
// game.closePath();

// draws the ball
function ball() {
  game.beginPath();
  game.arc(x, y, ballSize, 0, Math.PI*2);
  game.fillStyle = "turquoise";
  game.fill();
  game.closePath();
}

// draws the pad
function pad() {
  game.beginPath();
  game.rect(padX, breakout.height-padH, padW, padH);
  game.fillStyle = "gold";
  game.fill();
  game.closePath();
}
// drawing code
function draw() {
  // clears the frame
  game.clearRect(0, 0, breakout.width, breakout.height);
  ball();
  //bouncing off 3 walls 4th wall ends game
  if(x + dx > breakout.width-ballSize || x + dx < ballSize) {
    dx = -dx;
  }
  if(y + dy < ballSize) {
    dy = -dy;
  } else if(y + dy > breakout.height-ballSize) {
    if(x > padX && x < padX + padW) {
      dy = -dy;
    }
    else {
    alert("!GAME OVER!");
    document.location.reload();
    clearInterval(interval);
  }
}
  x += dx;
  y += dy;

  pad();
  //paddle movement
  if(right) {
    padX +=7;
    if (padX + padW > breakout.width){
      padX = breakout.width - padW;
    }
  }
  else if(left) {
    padX -= 7;
    if (padX < 0){
      padX = 0;
    }
  }
}

var interval = setInterval(draw, 10);