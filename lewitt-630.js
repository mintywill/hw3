
for (var i = 5; i <= 170; i = i + 50) {
  
  var startX = 0;
  var startY = i;
  var endX = 400;
  var endY = i;
  strokeWeight(20);
  stroke(0);
  line(startX, startY, endX, endY);
}

for (var i = 5; i <= 400; i = i + 50) {
  
  var startX = i;
  var startY = 155;
  var endX = i;
  var endY = 340;
  line(startX, startY, endX, endY);
}
