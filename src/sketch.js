
function setup() {
    createCanvas(750, 400);
  }

  function draw() {
    background(0);
    strokeWeight(2);
    stroke(255);
    for(let x= 25;x<=mouseX;x+=50) {
      for (let y = 25; y < mouseY; y+=50) {    
      fill(random(255),0,random(255));
      ellipse(x, y, 15, 15);
      }
    }
  }