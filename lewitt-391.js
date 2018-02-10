for (var i = 0; i <= 170; i = i + 42.5) {
  noFill();
  var startX = 170;
  var startY = i;
  var endX = 400;
  var endY = i;
  strokeWeight(15);
  stroke(0);
  line(startX, startY, endX, endY);
}

for (var i = 2.5; i <= 170; i = i + 42.5) {
  noFill();
  var startX = i;
  var startY = 0;
  var endX = i;
  var endY = 170;
  line(startX, startY, endX, endY);
}

for (var i = 0; i <= 170; i = i + 60) {
  
  var startX = i;
  var startY = 170;
  var endX = 0;
  var endY = 170+i;
  line(startX, startY, endX, endY);
}



/* x-fixed lines for Q3 */
for (var i = 175; i <= 340; i = i + 60) {
  
  var startX = 170;
  var startY = i;
  var endX = i-170;
  var endY = 340;
  line(startX, startY, endX, endY);
}

/* x-fixed lines for Q4 */
for (var i = 165; i <= 340; i = i + 60) {
  
  var startX = 170;
  var startY = i;
  var endX = 510-i;
  var endY = 340;
  line(startX, startY, endX, endY);
}



line(0,170,340,170);
line(170,0,170,340);

noFill();
rect(7,7,325,325);

for (var i = 175; i <= 340; i = i + 60) {
  
  var startX = i;
  var startY = 170;
  var endX = 170+i;
  var endY = 340;
  line(startX, startY, endX, endY);
}
