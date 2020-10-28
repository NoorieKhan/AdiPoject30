var stand1, stand2;
var polygon, slingshot;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;
const World = Matter.World;
const Bodies = Matter.Bodies;
function setup() {
  createCanvas(800, 400);
  stand1 = new Ground(400,250,200,20);
  block1 = new Block(380,240,30,40,"blue");
  block2 = new Block(400,240,30,40,"blue");
  block3 = new Block(420,240,30,40,"blue");
  block4 = new Block(440,240,30,40,"blue");
  block5 = new Block(460,240,30,40,"blue");
  block6 = new Block(480,240,30,40,"blue");
  block7 = new Block(500,240,30,40,"blue");
  block8 = new Block(420,220,30,40,"green");
  block9 = new Block(440,220,30,40,"green");
  block10 = new Block(460,220,30,40,"green");
  block11 = new Block(480,220,30,40,"green");
  block12 = new Block(500,220,30,40,"green");
  block13 = new Block(440,200,30,40,"orange");
  block14 = new Block(460,200,30,40,"orange");
  block15 = new Block(480,200,30,40,"orange");
  block16 = new Block(460,180,30,40,"red");
  stand2 = new Ground(600,150,200,20);
  block17 = new Block(580,140,30,40,"blue");
  block18 = new Block(600,140,30,40,"blue");
  block19 = new Block(620,140,30,40,"blue");
  block20 = new Block(640,140,30,40,"blue");
  block21 = new Block(660,140,30,40,"blue");
  block22 = new Block(600,120,30,40,"green");
  block23 = new Block(620,120,30,40,"green");
  block24 = new Block(640,120,30,40,"green");
  block25 = new Block(620,100,30,40,"red");
  polygon = Bodies.polygon(100,400,6,10);
  World.add(world, polygon);
  slingshot = new SlingShot(polygon.body,{x:100,y:400});
}

function draw() {
  background("brown");  
  stand1.display();
  stand2.display();
  polygon.display();
  slingshot.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(polygon.body,{x: 100, y: 400});
     slingshot.attach(polygon.body);
  }
}