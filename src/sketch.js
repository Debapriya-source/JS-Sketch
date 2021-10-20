let b = [];
let g = 2;
let color;
let friction = 0.99;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colors= [
    "red",
    "cyan",
    "magenta",
    "blue",
    "green",
    "yellow"
  ];
}
function mouseDragged() {
  let r = random(10, 70);
  let dx = random(-5, 5);
  let dy = 7;
  let randColor = floor(random(colors.length));
  let newBall = new Ball(mouseX, mouseY, dx, dy, r,randColor);
  b.push(newBall);
}
function draw() {
  background(255);
  for (let i = 0; i < b.length; i++) {
    b[i].bounce();
    b[i].show();
  }
}

class Ball {
  constructor(x, y, dx, dy, radius,randColor) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.randColor = randColor;
    this.radius = radius;
  }
  show() {
    // strokeWeight(1)
    // stroke(255,0,0);
    noStroke();
    fill(colors[this.randColor]);
    // fill(255, 0, 0,150);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
  bounce() {
    if (this.x >= width - this.radius || this.x < 0 ) this.dx = -this.dx * friction;
    this.x += this.dx;
    if (this.y >= height - this.radius || this.y < 0) this.dy = -this.dy * friction;
    else this.dy +=g;
    this.y += this.dy;
  }
}