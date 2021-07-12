var breakout = document.getElementById("breakout");
var ctx = breakout.getContext("2d");

ctx.beginPath();
ctx.rect(20,40,50,50);
ctx.fillStyle = "darkgreen";
ctx.fill();
ctx.closePath();
