var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  
  vX = 2;
  vY = 2;

  x = width/2;
  y = height/2;
  
  pos = x;
  
  diameter = 50;
  
}

function draw() {
  background(50);
  
  fill(66, 183, 255);
  circle(x, y, diameter);
  //circle(abs(x-600), abs(y-600), diameter);
  
  fill(176, 79, 255);
  circle(pos, y, diameter);
  
  fill(255, 240, 71);
  circle(x, pos, diameter);
  
  fill(255, 150, 64);
  circle(pos, pos, diameter);
  
  x += vX;
  y += vY;
  
  pos -= vX;
  

  if (x + diameter > width)
    vX = -vX;
  else if (x - diameter < 0)
    vX = -vX;
  
  if (y + diameter > height)
    vY = -vY;
  else if (y - diameter < 0)
    vY = -vY;
  
  diameter = abs(x - 300) * 0.2;
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}