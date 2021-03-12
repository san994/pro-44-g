const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world
var robot
var platform = [];
var box1 = [];
var rock = [];
var playerX = 50;

function setup() {
  createCanvas(1200,600);
  
  engine = Engine.create()
  world = engine.world

  ground = new Ground(600,590)

  player = new Player(500,550)


 
 
}

function draw() {
  background(0);  
 
 Engine.update(engine);

 ground.display();

 player.display()

 playerX = player.body.position.x
  
 text("palyer x "+playerX,500,500)

 
 if(frameCount%60===0){

  platform.push(new Platform(random(100,1200),random(100,400),50,20));

}

for(var i = 0;i<platform.length;i++){
platform[i].display();

}

if(frameCount%20===0){

  box1.push(new Box(random(100,1200),50,30,30));
  console.log(box1[0])
}

if(box1.length !==0){

for(var j = 0;j<box1.length;j++){

  box1[j].display();

}

}

if(frameCount%60===0){

  rock.push(new Rock(random(100,1200),50,random(5,10)));

}

for(var b = 0;b<rock.length;j++){

  rock[b].display();

}


if(keyCode === 32){

   player.body.position.x  -=1

 // Body.applyForce(player,{x:60,y:60})

}


}