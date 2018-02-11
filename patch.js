
function mint(x, y) {
  fill(231, 97, 97);
  stroke(238);
  rect(x, y, 100, 100);
  
  // cross
  fill(255, 247, 226);
  noStroke();
  rect(x+30, y+30, 40, 40);
  rect(x+10, y+45, 80, 10);
  rect(x+45, y+10, 10, 80);
  
  // center
  fill(231, 97, 97);
  noStroke();
  rect(x+42.5, y+42.5, 15, 15);

  // others
  fill(255, 247, 226);
  noStroke();
  rect(x+15, y+15, 15, 15);
  
  fill(255, 247, 226);
  noStroke();
  rect(x+15, y+70, 15, 15);
  
  fill(255, 247, 226);
  noStroke();
  rect(x+70, y+70, 15, 15);

  fill(255, 247, 226);
  noStroke();
  rect(x+70, y+15, 15, 15);
}


background(255);
mint(0,0); // draw patch at upper-left
