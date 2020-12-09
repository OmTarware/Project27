
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	bob1 = new Bob (250,400,40)
	bob2 = new Bob (320,400,40)
	bob3 = new Bob (390,400,40)
	bob4 = new Bob (460,400,40)
	bob5 = new Bob (530,400,40)

	roof1 = new Roof(390,150,350,40)
  
	rope1=new Rope(bob1.body,roof1.body,-35*4,0)
	rope2=new Rope(bob2.body,roof1.body,-35*2,0)
	rope3=new Rope(bob3.body,roof1.body,-35*0,0)
	rope4=new Rope(bob4.body,roof1.body,-35*-2,0)
	rope5=new Rope(bob5.body,roof1.body,-35*-4,0)
}


function draw() {
  rectMode(CENTER);
  background("green");

  bob1.display()
  roof1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-300,y:300});
	}

}

