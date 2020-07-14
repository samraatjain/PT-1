


function setup() {
  createCanvas(800,400);
  ground = new Ground(600,10,1200,20);
  
 
}

function draw() {
  background(255,255,255);  
 ground.display();
}