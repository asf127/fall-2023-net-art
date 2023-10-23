function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(57, 58, 66);
  
  var num = 5;
  var count = 0;
  
  for (var x = 0; x <= width; x += width/num){
    for (var y = 0; y <= height; y += height/num){
      if (count % 2 == 0)
        stroke(113, 178, 227);
      else
        stroke(170, 113, 227);
      
      line(x, y, width, height);
      line(0, 0, x, y);
      
      count++;
    }
  }
  
}