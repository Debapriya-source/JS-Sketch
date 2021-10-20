let b = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function mouseDragged() {
  let r = random(10, 70);
  let newBubble = new Bubble(mouseX, mouseY, r);
  b.push(newBubble);
}
function draw() {
  background(0);
  for (let i = 0; i < b.length; i++) {
    b[i].move();
    b[i].show();
  }
}

class Bubble {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  show() {
    // stroke(255, 200);
    // strokeWeight(3);
    // noFill();
    noStroke();
    fill(255,50);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-7, 5);
  }
}