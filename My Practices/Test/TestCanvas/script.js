const canvas = document.querySelector("#myCanvas"); 
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);

 
ctx.fillStyle = "rgb(255 0 0)";
ctx.fillRect(50, 50, 100, 150);

ctx.fillStyle = "rgb(0 255 0)";
ctx.fillRect(75, 75, 100, 100);

ctx.fillStyle = "rgb(255 0 255 / 60%)";
ctx.fillRect(25, 100, 175, 50);

ctx.strokeStyle = "rgb(255 255 255)";
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);
 
 
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(50, 240);
ctx.lineTo(50, 400);
ctx.stroke();


ctx.fillStyle = "rgb(255 0 0)";
ctx.beginPath();
ctx.moveTo(150, 250);

ctx.lineTo(150, 250);
const triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(250, 250 + triHeight);
ctx.lineTo(80, 340);
ctx.fill();

function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}
