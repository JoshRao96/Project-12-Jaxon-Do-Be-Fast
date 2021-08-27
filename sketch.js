var boy, boy_running;
var path, pathImg;
var invisibleWall1, invisibleWall2;

function preload(){
  //pre-load images
  boy_running=loadAnimation("Runner-1.png","Runner-2.png");
  
  pathImg=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  
  //create sprites here
  path = createSprite(200,200,400,400);
  path.addImage(pathImg);
  path.scale=1.2;

  boy = createSprite(200,350,50,50);
  boy.addAnimation("running",boy_running);
  boy.scale=0.05;

  invisibleWall1 = createSprite (380,200,50,400);
  invisibleWall1.visible=false;
  invisibleWall2 = createSprite (20,200,50,400);
  invisibleWall2.visible=false;
}

function draw() {
  background(0);


  path.velocityY=4;

  if (path.y > 400) {

  path.y = height/2;

  }
 
  boy.x=World.mouseX;
  
  boy.collide(invisibleWall1);
  boy.collide(invisibleWall2);

drawSprites();
}
