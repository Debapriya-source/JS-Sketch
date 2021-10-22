let b = [];
let g = 0.15;
let color;
let friction = 0.99;
let alfa,beta,gamma;

function setup() {
  let cnv = createCanvas(windowWidth-25, windowHeight-20);
  colors= [
    "red",
    "cyan",
    "magenta",
    "blue",
    "green",
    "yellow"
  ];
  cnv.parent("canvas-container");
}
window.addEventListener('deviceorientation',function(e){
  // alfa = e.alfa;
  beta = e.beta;
  gamma = e.gamma;
  e.absolute = true;
});
function mouseDragged() {
  let r = random(10, 30);
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
    noStroke();
    // push();
    // translate(0,0);
    fill(colors[this.randColor]);
    ellipse(this.x, this.y, this.radius, this.radius);
    // pop();
  }
  bounce() {
    
    if (this.x +this.radius + this.dx-gamma/10  >= width|| this.x+this.radius + this.dx-gamma/10  <= 25 ) {
    this.dx = -(this.dx+(gamma/10)) * friction+this.radius/100;
    // print("Hit the wall");
    }
    this.x += this.dx+gamma/10;
    if (this.y+this.radius+this.dy-beta/10 >= height || this.y+this.radius+this.dy-beta/10 <= 25 ) {
    this.dy = -(this.dy+(beta/10)) * friction+this.radius/100;
    // print("Hit the ground");
    }
    else this.dy +=g+beta/25;
    this.y += this.dy+beta/10;
    // print(this.x,this.y, "height: "+ height,this.dx,this.dy);

    // to prevent drowning
    if(this.y>height){
      if(this.y ==height){
      this.y = height;
      beta = 0;
      }
      this.y--;
    }
    if(this.y<0){
      if(this.y ==0){
      this.y =0;
      beta=0;
      }
      this.y++;
    }
  }
}