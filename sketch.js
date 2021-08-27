var astronaut,sleep,bath,brush,drink,eat,gym,move;
var iss, issImg;

function preload(){
  sleep = loadImage("sleep.png")
  bath = loadAnimation("bath1.png", "bath2.png")
  brush = loadImage("brush.png")
  drink = loadAnimation("drink1.png", "drink2.png")
  eat = loadAnimation("eat1.png", "eat2.png")
  gym = loadAnimation("gym11.png", "gym12.png")
  move = loadAnimation("move1.png", "move2.png")
  issImg = loadImage("iss.png")
}

function setup() {

  createCanvas(800,600);

  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg)
  iss.scale = 0.16
  
  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addImage("sleeping", sleep)
  astronaut.scale = 0.08
  astronaut.setCollider("circle", 0, 0, 1100)

  leftWall = createSprite(90, 220, 10, 500)
  leftWall.visible = false
  rightWall = createSprite(750, 220, 10, 500)
  rightWall.visible = false
  downWall  = createSprite(400, 22, 800, 10)
  downWall.visible = false
  upWall  = createSprite(400, 430, 800, 10)
  upWall.visible = false

}
//createEdgeSprite();

function draw() {
  background(200); 
  
  astronaut.bounceOff(leftWall)
  astronaut.bounceOff(rightWall)
  astronaut.bounceOff(downWall)
  astronaut.bounceOff(upWall)

  text("HOW TO USE", 50,500);
  text("Up arrow = Brushing", 50, 510)
  text("Down arrow = Gymming", 50, 520)
  text("Left arrow = Bathing", 50, 530)
  text("Right arrow = Eating", 50, 540)
  text("Spacebar = Drinking", 50, 550)
  text("M key = Drifting Around", 50, 560)
  text("S key = Sleep", 50, 570)
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.x = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("space")){
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("S")){
    astronaut.changeAnimation("sleeping", sleep);
    astronaut.x = 400;
    astronaut.y = 200
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("M")){
    astronaut.addAnimation("moving", move)
    astronaut.changeAnimation("moving");
    astronaut.velocityX = -2;
    astronaut.velocityY = -1;
  }
  drawSprites();
}