

function setup() {
  createCanvas(600,700);
   
}

function draw() {
  background(0);  
  angleMode(DEGREES);
   hr = hour();
   min = minute();
   sec = second();
   console.log(hr + " : "+min+" : "+sec);
  secAngle = map(sec , 0 , 60, 0, 360);
  hrAngle = map(hr , 0 , 60, 123, 360);
  minAngle = map(min , 0 , 60, -320, 360);

  push();
  stroke(255 , 0 , 0);
  strokeWeight(7);
  translate(width / 2, height / 2);
  rotate(secAngle);
  line(0,0,130,0);
  pop();

  push();
  stroke(0 , 255 , 0);
  strokeWeight(7);
  translate(width / 2, height / 2);
  rotate(minAngle-5);
  line(0,0,130,0);
  pop();

  push();
  stroke(0 , 0 , 255);
  strokeWeight(7);
  translate(width / 2, height / 2);
  rotate(hrAngle);
  line(0,0,130,0);
  pop();

  push();
  stroke(255 , 0 , 0);
  strokeWeight(8);
  translate(width / 2, height / 2);
  noFill();
  arc(0, 0, 300, 300, 270, secAngle)
  pop();
  
  push();
  stroke(0 , 255 , 0);
  strokeWeight(8);
  translate(width / 2, height / 2);
  noFill();
  arc(0, 0, 340, 340, 270, minAngle)
  pop();

  push();
  stroke(0 , 0 , 255);
  strokeWeight(8);
  translate(width / 2, height / 2);
  noFill();
  arc(0, 0, 380, 380, 270, hrAngle)
  pop();
  
  stroke("255");
  strokeWeight(1);
  fill("yellow")
  textSize(40);
  textFont("Chiller")
  text("12"  ,width/2-15,130);
  text("3"  ,520,height/2);
  text("6"  ,width/2-15,596);
  text("9"  ,60,height/2);

  drawSprites();

}