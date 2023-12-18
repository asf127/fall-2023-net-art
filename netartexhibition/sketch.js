var arr = [];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("container");
}

function draw() {
  clear();
  
  noStroke();
  
  var coor = {x: mouseX, y: mouseY};
  
  arr.push(coor);
  
  if (arr.length > 35){
    arr.splice(0, 1);
  }
  
  for (var i = 0; i < arr.length; i++){
    fill(225-i*5, 200-i, 150);
    ellipse(arr[i].x,arr[i].y,i*0.5,i*0.5);
  }

}

function windowResized() {
  canvas = resizeCanvas(windowWidth, windowHeight);
}
