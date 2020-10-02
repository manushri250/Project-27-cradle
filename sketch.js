
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Constraint = Matter.Constraint;

var bob1 , rope1 , roof1;
var bob2 , rope2 , roof2;
var bob3 , rope3 , roof3;
var bob4 , rope4 , roof4;
var bob5 , rope5 , roof5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new Bob1(170,200,50);
    roof1 = new Roof1(360,200 , 50 , PI/2);
    rope1 = new Rope1(roof1.body,bob1.body);

    bob2 = new Bob2(460,500,50);
    roof2 = new Roof2(460,200 , 50 , PI/2);
    rope2 = new Rope2(roof2.body,bob2.body);

    bob3 = new Bob3(560,500,50);
    roof3 = new Roof3(560,200 , 50 , PI/2);
    rope3 = new Rope3(roof3.body,bob3.body);

    bob4 = new Bob4(660,500,50);
    roof4 = new Roof4(660,200 , 50 , PI/2);
    rope4 = new Rope4(roof4.body,bob4.body);

    bob5 = new Bob5(760,500,50);
    roof5 = new Roof5(760,200 , 50 , PI/2);
    rope5 = new Rope5(roof5.body,bob5.body);

    roof = new Roof(580,200,500,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  bob1.display();
  roof1.display();
  rope1.display();

  bob2.display();
  roof2.display();
  rope2.display();

  bob3.display();
  roof3.display();
  rope3.display();
  
  bob4.display();
  roof4.display();
  rope4.display();

  bob5.display();
  roof5.display();
  rope5.display();

  roof.display();
  
  drawSprites();
 
}



