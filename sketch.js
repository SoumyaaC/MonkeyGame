
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var survivalTime=0;

function preload(){
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  foodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {

  background(255);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,100,50);
  
  if(ground.x<0){
    ground.x=ground.x/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  food();
  obstacles();
  
  drawSprites();      
}

function food(){
 if(World.frameCount%80===0){
   banana = createSprite(300,200,20,20);
   banana.y=Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.velocityX=-7;
   banana.setLifetime=100;
   foodGroup.add(banana);
  }
}

function obstacles(){
 if(World.frameCount%300===0) {
   obstacle = createSprite(390,327,20,20);
   obstacle.collide(ground);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX=-6
   obstacle.scale = 0.1;
   obstacle.setLifetime=100;
   obstacleGroup.add(obstacle)
 }
}
