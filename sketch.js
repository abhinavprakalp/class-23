const engine = Matter.Engine;
const world = Matter.World;
const bodies = Matter.Bodies;

var ae,aw,box1,box2,ground;

function setup() {
  createCanvas(800,800);
  
  ae=engine.create();
  aw=ae.world;

  box1=new Box (300,200,50,50);

  box2=new Box (330,100,50,150);

  ground=new Ground (400,780,800,10);

  
}

function draw() {
  background("blue");  

  engine.update(ae);
  ground.display();
  box1.display();
  box2.display();
}
