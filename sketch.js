var fixRect , moveRect;
var rect1 , rect2 ;
var fixRect2 , fixRect3;


function setup() {

  createCanvas(800,400);
  fixRect= createSprite(200,200,50,100);
  fixRect.shapeColor = "red";
  moveRect = createSprite(155,200,50,100);
  moveRect.shapeColor = "green";
  fixRect.debug = true;
  moveRect.debug = true;
  rect1 = createSprite(50,200,50,100);
  rect1.shapeColor = "red";
  rect2 = createSprite(750,200,50,100);
  rect2.shapeColor = "green";
  rect1.debug=  true;
  rect2.debug = true;
  rect1.velocityX= 5;
  rect2.velocityX = -5 ; 
  fixRect2= createSprite(400,200,50,100);
  fixRect2.shapeColor = "purple";
  fixRect3= createSprite(100,200,50,100);
  fixRect3.shapeColor = "orange";
  fixRect2.debug = true;
  fixRect3.debug = true;

}

function draw() {
  background(0);  
  moveRect.x = World.mouseX;
  moveRect.y = World.mouseY;
  
 if (isTouching(fixRect2 , moveRect )){
  fixRect2.shapeColor = "blue";
  moveRect.shapeColor = "yellow";
 }
else{
  fixRect2.shapeColor = "purple";
  moveRect.shapeColor = "green";

}
bounceOff(rect1,rect2);

  drawSprites();
}




