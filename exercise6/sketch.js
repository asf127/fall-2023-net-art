var num = 5;

var color1R = 113;
var color1G = 178;
var color1B = 227;

var color2R = 178;
var color2G = 113;
var color2B = 227;
  
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(57, 58, 66);
  
  if (keyIsPressed){
    if (keyCode == RIGHT_ARROW)
        num++;
    else if (keyCode == LEFT_ARROW)
      if (num-1 > 0)
        num--;
  }
  
  var count = 0;
  
  for (var x = 0; x <= width; x += width/num){
    for (var y = 0; y <= height; y += height/num){
      if (count % 2 == 0)
        stroke(color1R, color1G, color1B);
      else
        stroke(color2R, color2G, color2B);
      
      line(x, y, width, height);
      line(0, 0, x, y);
      
      count++;
    }
  }
  
}

function mousePressed(){
  color1R = (int)(Math.random()*256);
  color1G = (int)(Math.random()*256);
  color1B = (int)(Math.random()*256);
  
  color2R = (int)(Math.random()*256);
  color2G = (int)(Math.random()*256);
  color2B = (int)(Math.random()*256);
}