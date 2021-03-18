var s;
var m ;
var h;
var sAngle , hAngle, mAngle

function setup() {
  createCanvas(400,400);
  
  angleMode(DEGREES)
}

function draw() {
  background("blue");  

  translate(200,200)
  rotate(-90)

  s = second();
  m = minute();
  h = hour();
  
  sAngle = map(s , 0,60, 0,360)
  mAngle = map(m, 0,60,  0,360);
  hAngle = map(h % 12, 0,12, 0,360);

  //drawing seconds hand
  push()
  rotate(sAngle)
  stroke("cyan")
  strokeWeight(6)
  line(0,0,100,0)
  pop()

  //minute hand
  push();
  rotate(mAngle);
  stroke("green");
  strokeWeight(6);
  line(0,0,70,0);
  pop();

  //hour hand
  push();
  rotate(hAngle);
  stroke("red");
  strokeWeight(6);
  line(0,0,35,0);
  pop();

  strokeWeight(10)
  noFill()
  //seconds
  stroke("cyan")
  arc(0,0,300,300,0,sAngle)

  // minutes
  stroke("green");
  arc(0,0,280,280,0, mAngle);

  //hours
  stroke("red");
  arc(0,0,260,260,0, hAngle);
}