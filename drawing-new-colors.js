
function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'Y') {
    fill(255, 247, 226);
  } else if (key == 'M') {
    fill(143, 239, 210);
  } else if (key == 'S') {
    fill(239, 143, 143); 
  } else if (key == 'C') {
    fill(244, 140, 66); 
	}
}
