const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var engine , world ;
var ground ;
function preload(){
  
}


function setup() {
 var canvas =  createCanvas(480,800);
 // createSprite(400, 200, 50, 50);


engine = Engine.create();
 world = engine.world;
  
 ground = new Ground(100,10,100,10);
 //divider1 = new Division(200,200,300,10)
 //divider2 = new Division(400,200,300,10)
 //divider3 = new Division(100,200,300,10)
}

function draw() {
  Engine.update(engine);

  background("white");  
  //drawSprites();

  ground.display();
  /*divider1.display();
  divider2.display();
  divider3.display();*/
}