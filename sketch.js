var astronaut;
var back;

function preload(){
  bg = loadImage("images/iss.png")
  sleep = loadAnimation("images/sleep.png")
  brush = loadAnimation("images/brush.png")
  gym = loadAnimation("images/gym11.png","images/gym12.png")
  eat = loadAnimation("images/eat1.png","images/eat2.png")
  drink = loadAnimation("images/drink1.png","images/drink2.png")
  move = loadAnimation("images/move.png","images/move1.png")
  bath = loadAnimation("images/bath1.png","images/bath2.png")
}

function setup() {
  createCanvas(800,400);
  
  //back = createSprite(0,0,800,400)
  //back.addImage("background",bg)

  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1
}

function draw() {
  background(255,255,255);
  //background.addImage("background",bg)  
  //textSize(20)
  //fill(255)
  //text("Instructions: Up Arrow = Brushing, Down Arrow = Gymming, Left Arrow = Eating, Right Arrow = Bathing, M Key = Moving",200,200)
  drawSprites();
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("M")){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving")
    astronaut.y = 350
    astronaut.velocityX = 2
    astronaut.velocityY = 2
  }
}


