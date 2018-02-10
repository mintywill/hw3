noFill();

for (var i = 0; i <= 400; i++) {
  var startX = i*4;
  var startY = 0;
  var endX = 0;
  var endY = i*4;
  line(startX, startY, endX, endY);
  strokeWeight(0.3)
  rect(0,0,340,340);
}
