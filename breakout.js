var breakout = document.getElementById("breakout");
var game = breakout.getContext("2d");
var x = breakout.width/2;
var y = breakout.height-30;
var dx = 2;
var dy = -2;
var ballSize = 10;
var padHeight = 10;
var padWidth = 75;
var padX = (breakout.width-padWidth) / 2;
var right = false;
var left = false;

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
  game.rect(padX, breakout.height-padHeight, padWidth, padHeight);
  game.fillStyle = "gold";
  game.fill();
  game.closePath();
}
// drawing code
function draw() {
  // clears the frame
  game.clearRect(0, 0, breakout.width, breakout.height);
  ball();
  //bouncing off walls
  if(x + dx > breakout.width-ballSize || x + dx < ballSize) {
    dx = -dx;
  }
  if(y + dy > breakout.height-ballSize || y + dy < ballSize) {
    dy = -dy;
  }
  x += dx;
  y += dy;
  //paddle movement
  if(right) {
    padX +=7;
  }
  else if(left) {
    padX -= 7;
  }
}

// moving the pad using directional buttons
document.addEventListener("keydown", downHandle, false);
document.addEventListener("keyup", upHandle, false);

//pressed keys action
function downHandle(e) {
  if(e.key == "Right" || e.key == "arrowR") {
    right = true;
  }
  else if(e.key == "Left" || e.key == "arrowL") {
    left = true;
  }
}

//released keys action
function upHandle(e) {
  if(e.key == "Right" || e.key == "arrowR") {
    right = false;
  }
  else if(e.key == "Left" || e.key == "arrowL") {
    left = false;
  }
}
setInterval(draw, 10);
