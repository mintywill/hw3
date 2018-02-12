
for (var i = 5; i <= 400; i = i + 10) {
  
  var startX = i;
  var startY = 0;
  var endX = i;
  var endY = 400;
  line(startX, startY, endX, endY);
}

// draw patch at upper-left

mint(width-100, height-100); // draw patch at lower-right
