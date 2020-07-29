var car,wall;
var speed,wieght;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  wieght=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,hieght/2);
  wall.shapeColor="Green";
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car.velocityX=speed;
}