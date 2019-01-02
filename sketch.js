let x , y;
let tX , tY;
let thick = 0;
let hu = 0;
let mX;
let mY;
let input;
let canvas;
function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	background(250);
	colorMode(HSB);
	noFill();
	tX = width / 2;
	tY = height / 2;
	input = document.createElement('acc-pose-input');
  	input.initialize();
  	input.contentElement = canvas.elt;
  	input.part = 'nose';
}

function draw() {
	if (input.isReady){
		mX = input.targetPosition[0];
		mY = input.targetPosition[1];
		hu = hu % 255;
		stroke(hu , 255, 255);
		if((abs(mX  - x) + abs(mY - y)) > 2){
			strokeWeight(1);
			thick = 100; 
	    	hu += 1;
		} else {
			strokeWeight(0);
			thick= 0;
		}
		push();
		tX += (mX - tX)/30 ;
		tY += (mY - tY)/30 ;
		translate(tX, tY - 200);
		fill(hu, 255, 255);
		stroke(255 - hu, 255, 255);
		ellipse(0, 0, thick, thick);
		pop();
		x = mX;
	    y = mY;
	}
	
}