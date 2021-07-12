var breakout = document.getElementById("breakout");
var ctx = breakout.getContext("2d");

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
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();