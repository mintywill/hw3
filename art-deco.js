
for (var x=0; x<=2; x++){
	box(x);
}

function box(z){
	noFill();
	for (var i = 10; i <= 80; i = i+10) {
  	var a = i+100*z;
  	var b = i;
  	var c = 100-2*i;
  	var d = 100-2*i;
		rect(a,b,c,d);
	}
}
