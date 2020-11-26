
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var food,obstacles;
var FoodGroup, obstacleGroup
var score
var ground;
var survivalTime=0;
var monkey;
function preload(){
  
monkey_running= loadImage("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
 
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
   
}



function setup() {
  //creatingCanvas(600,600);
  
  var survivalTime=0;
  //creating monkey
  monkey=createSprite(80,315,200,20);
  monkey.addAnimation("moving",monkey_running);
  //monkey.addImage(bananaImage)
  monkey.scale=0.1;
  
 
  
  ground=createSprite(800,350,900,10);
   ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
   FoodGroup=new Group();
  obstacleGroup=new Group();
  
  score=0;
  
  
  
}


function draw() {
background(225);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
 if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  spawnFood();
  spawnObstacles();

 
  
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:",+score+500,50);
  //monkey is touching obstaclesGroup
  obstaclesGroup=createGroup();
 if(obstaclesGroup.isTouching(monkey)){
   ground.velocityX=0;
   monkey.velocityY=0;
   obstaclesGroup.setVelocityXEach(0);
   FoodGroup.setVelocityXEach(0);
   obstaclesGroup.setLifetimeEach(-1);
   FoodGroup.setLifetimeEach(-1);
 }
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount%80===0);
  text("Survival Time:",survivalTime,100,400);
  
 
}

function spawnFood(){
  //writecode here to spawn the Food
  if(frameCount%80===0){
     banana=createSprite(600,250,40,10);
    banana.y=random(120,200);
    banana.velocityX=-5;
    //assign lifetime to the variable
    banana.lifeime=300;
    monkey.depth=banana.depth+1;
    
    //add image of banana
    banana.addImage(bananaImage);
    banana.scale=0.1;
    //add each banana to the group
    FoodGroup.add(banana);
                    
                   
  }
}
function spawnObstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(800,320,10,40);
    obstacle.velocityX=-6;
    
    //add image to the obstacle
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.15;
    
    //lifetime to the obstacle
    obstacle.lifetime=300;
    
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}






