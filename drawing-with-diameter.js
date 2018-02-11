
function setup() { 
  createCanvas(400, 400);
} 

var diameter = 15;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  } else if (key == '1') {
    ellipse(mouseX, mouseY, diameter+30, diameter+10); 
  } else if (key == '2') {
    ellipse(mouseX, mouseY, diameter+60, diameter+20); 
  } if (key == '3') {
    ellipse(mouseX, mouseY, diameter+90, diameter+30); 
  }
}
