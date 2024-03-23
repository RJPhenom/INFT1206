//	Name: Robert Macklem
//  File: index.html
//	Date: 23 March 2024
//	Desc: Bouncing Balls MDN OOJS exercise html file

//CONSTS
//setup canvas
const canvas = document.querySelector("canvas");

//draw context
const ctx = canvas.getContext("2d");

//borders
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

//FUNCS
// function to generate random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

//SCRIPT
//ball obj
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}