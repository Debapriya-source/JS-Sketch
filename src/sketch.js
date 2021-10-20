let x=0;

function setup() {
    createCanvas(750, 400);
    background(0);
  }

  function draw() {
    noStroke();
    fill(500,500);
    circle(x, 60*sin(x)+height/2, 5, 5);
    x+=0.25;

    if(x>width-10) x=0;
  }