var stand1, stand2;
var polygon, slingshot;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var slingshot, polygon, polyImage;
function preload(){
  polyImage=loadImage("polygon.png");
}
function setup() {
  createCanvas(800, 600);
engine =Engine.create();
world= engine.world;
  stand1 = new Ground(420,450,250,20);
  block1 = new Block(380,440,30,40);
  block2 = new Block(400,440,30,40);
  block3 = new Block(420,440,30,40);
  block4 = new Block(440,440,30,40);
  block5 = new Block(460,440,30,40);
  block6 = new Block(480,440,30,40);
  
  stand2 = new Ground(600,150,200,20);
 
  polygon = Bodies.polygon(100,400,6,10);
  World.add(world, polygon);
  slingshot = new SlingShot(this.polygon,{x:100,y:400});
}

function draw() {
  background("brown");  
Engine.update(engine);
  stand1.display();
  stand2.display();
 // polygon.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
 
  imageMode(CENTER);
  image(polyImage,polygon.position.x,polygon.position.y,40,40)
  slingshot.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(this.polygon,{x: 100, y: 400});
     slingshot.attach(this.polygon);
  }
}