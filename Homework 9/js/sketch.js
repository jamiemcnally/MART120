function setup()
{
  createCanvas(500, 600);
}

function draw()
{
  background(34, 139, 34);
  // head
  fill(232, 190, 172)
  circle(250, 100, 175);
  // body
  fill(255, 105, 180);
  rect(200, 185, 100, 150);
  // eyes
  strokeWeight(10);
  fill(0);
  point(210, 75);
  point(285, 75);
  // nose
  point(245, 100)
  // mouth
  circle(250, 135, 25);
  // right arm
  fill(10, 24, 120);
  rect(300, 195, 100, 15);
  // left arm
  rect(100, 195, 100, 15);
  // hair
  line(130, 175, 175, 50);
  line(325, 50, 360, 175);
  fill(255);
  triangle(220, 320, 250, 220, 280, 320);
  // left leg
  rect(200, 335, 15, 100);
  // right leg
  rect(285, 335, 15, 100);

  fill(255, 105, 180);
  textSize(24);
  text("Jamie McNally", 270, 500);
}
