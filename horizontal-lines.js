function mint(x, y) {
  fill(255,255,255);
for (var i = 5; i <= 400; i = i + 10) {
  
  var startX = 0;
  var startY = i;
  var endX = 400;
  var endY = i;
  line(startX, startY, endX, endY);
}
}

// draw patch at upper-left

mint(width-100, height-100); // draw patch at lower-right
