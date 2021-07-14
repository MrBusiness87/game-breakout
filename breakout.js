var breakout = document.getElementById("breakout");
var ctx = breakout.getContext("2d");
var x = breakout.width/2;
var y = breakout.height-30;
var dx = 2;
var dy = -2;

// darkgreen square
ctx.beginPath();
ctx.rect(20,40,50,50);
ctx.fillStyle = "darkgreen";
ctx.fill(); //can be replace for ctx.stroke();
ctx.closePath();

// green circle
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill(); //can be replace for ctx.stroke();
ctx.closePath();

// empty rectangle for game
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "blue";
ctx.stroke();
ctx.closePath();

function draw() {
  // drawing code
  ctx.clearRect(0, 0, breakout.width, breakout.height)
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = "turquoise";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}
setInterval(draw, 10);