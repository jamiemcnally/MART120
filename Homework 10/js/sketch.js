var headX = 250;
var headY = 100;
var headDirection = 1;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;

var size = 22;
var count = 0;
var sizeDirection = 2;

var movement;
function setup()
{
    createCanvas(500, 600);
}

function draw()
{
  background(34, 139, 34);
  textSize(22)
  text("Hello!", 10, 80);
  // head
  fill(232, 190, 172)
  circle(headX,headY,175);
      headX+=headDirection;
      if(headX >= 418 || headX <= 82)
      {
          headDirection *= -1;
      }
  // body
  fill(255, 105, 180);
  rect(200,bodyY,100,150);
     bodyY += bodyDirection;
     if(bodyY <= 0 || bodyY >= 450 )
     {
         bodyDirection *= -1;
     }
  // eyes
  strokeWeight(10);
  fill(0);
  point(210, 75);
  point(285, 75);
  // nose
  point(250, bodyY)
  bodyY += bodyDirection;
  if(bodyY <= 0 || bodyY >= 450 )
  {
      bodyDirection *= -1;
  }
  // mouth
  circle(headX, 135, 25);
  headX+=headDirection;
  if(headX >= 418 || headX <= 82)
  {
      headDirection *= -1;
  }
  // right arm
  fill(10, 24, 120);
  rect(300, bodyY, 100, 15);
  bodyY += bodyDirection;
  if(bodyY <= 0 || bodyY >= 450 )
  {
      bodyDirection *= -1;
  }
  // left arm
  rect(100, 195, 100, 15);
  // hair
  line(130, 175, 175, 50);
  line(325, 50, 360, 175);
  fill(255);
  // decoration
  triangle(220, 320, 250, 220, 280, 320);
  // left leg
  rect(headX, bodyY, 15, 100);
  headX+=headDirection;
  if(headX >= 418 || headX <= 82)
  {
      headDirection *= -1;
  }
  bodyY += bodyDirection;
  if(bodyY <= 0 || bodyY >= 450 )
  {
      bodyDirection *= -1;
  }
  // right leg
  rect(285, 335, 15, 100);

  fill(255, 105, 180);
  textSize(size);
  size+= sizeDirection;
     count++;
     if(count > 5)
     {
         sizeDirection *=-1;
         count = 0;
     }
  text("Jamie McNally", 270, 500);
}
