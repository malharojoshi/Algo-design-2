var rect1;
var rect2;
var edges;
function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 50, 50);
  rect1.shapeColor="green";
  rect2=createSprite(600, 200, 50, 50);
  rect2.shapeColor="green";
  rect1.debug=true;
  rect2.debug=true;
  rect1.velocityX=3
  rect1.velocityY=4
  rect2.velocityX=-3
  rect2.velocityY=-4
  edges=createEdgeSprites()
}

function draw() {
  background(255,255,255);
  //rect1.x=mouseX
  //rect1.y=mouseY
  if(isTouching(rect1,rect2)) {
    rect1.shapeColor="red"
    rect2.shapeColor="red"
  } else{
    rect1.shapeColor="green"
    rect2.shapeColor="green"
  }
  bounceOff(rect1,rect2)
  rect1.bounceOff(edges)
  rect2.bounceOff(edges)
  drawSprites();
}
