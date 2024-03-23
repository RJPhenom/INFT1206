//	Name: Robert Macklem
//  File: main.js
//	Date: 23 March 2024
//	Desc: Bouncing Balls MDN OOJS assesment (interactive portion) JavaScript file

//CONSTS
//setup canvas
const canvas = document.querySelector("canvas");

//draw context
const ctx = canvas.getContext("2d");

//borders
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

//score counter
const scoreText = document.querySelector("p");

//VARS
let score = 0;

//FUNCS
//Main loop
function loop() {
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  const evilCircle = new EvilCircle(
    random(20, width - size),
    random(20, height - size)
  )

  evilCircle.draw();
  evilCircle.checkBounds();
  evilCircle.collisionDetect();

  for (const ball of balls) {
    if (ball.exists) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
  }

  requestAnimationFrame(loop);
}

// function to generate random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

//OBJS
//Shape (base class)
class Shape {
  //Constructor
  constructor(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
}

//ball obj
class Ball extends Shape {
  //Constructor
  constructor(x, y, velX, velY, color, size) {
    super(x, y, velX, velY);
    this.color = color;
    this.size = size;
    this.exists = true;
    score++;
    scoreText.textContent = "Ball count: " + score;
  }

  //Draw method
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  //Update method (handles velocity changes/mvmt)
  update() {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
  
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
  
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
  
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
  
    this.x += this.velX;
    this.y += this.velY;
  }

  //Collision handling
  collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball) && ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

class EvilCircle extends Shape {
  //Constructor
  constructor (x, y) {
    super(x, y, 20, 20);
    this.color = "white";
    this.size = 10;

    //Setup movement listener on construct call
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "a":
          this.x -= this.velX;
          break;
        case "d":
          this.x += this.velX;
          break;
        case "w":
          this.y -= this.velY;
          break;
        case "s":
          this.y += this.velY;
          break;
      }
    });
  }

  //Draw method
  draw() {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
  }

  //Rewrite the update method from ball to check bound son player movement
  checkBounds() {
    if ((this.x + this.size) >= width) {
      this.x -= this.size;
    }
  
    if ((this.x - this.size) <= 0) {
      this.x += this.size;
    }
  
    if ((this.y + this.size) >= height) {
      this.y -= this.size;
    }
  
    if ((this.y - this.size) <= 0) {
      this.y += this.size;
    }
  }

  //Collision handling
  collisionDetect() {
    for (const ball of balls) {
      if (ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + ball.size) {
          ball.exists = false;
          score--; //decrements score, menaing one less ball onsc
          scoreText.textContent = "Ball count: " + score; //Updates screen
        }
      }
    }
  }
}

//SCRIPT
//Balls array
const balls = [];

//While loop to populate canvas with 25 balls
while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size,
  );

  balls.push(ball);
}

//Call main loop
loop();