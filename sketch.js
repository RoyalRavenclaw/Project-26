
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world, NImg, EImg, WImg, TImg, OImg, SImg, CImg, RImg, AImg, DImg, LImg;
var side, side1, side2;

function preload(){
	NImg = loadImage("./assets/N.png");
	EImg = loadImage("./assets/E.png");
	TImg = loadImage("./assets/T.png");
	OImg = loadImage("./assets/O.png");
	SImg = loadImage("./assets/S.png");
	WImg = loadImage("./assets/W.png");
	CImg = loadImage("./assets/C.png");
	RImg = loadImage("./assets/R.png");
	DImg = loadImage("./assets/D.png");
	LImg = loadImage("./assets/L.png");
	AImg = loadImage("./assets/A.png");
}


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,300,500,20);

	bob1 = new bob(320,500,40)
	bob2 = new bob(360,500,40)
	bob3 = new bob(400,500,40)
	bob4 = new bob(440,500,40)
	bob5 = new bob(480,500,40)
	
	rope1=new rope(bob1.body,roofObject.body,-80)
	rope2=new rope(bob2.body,roofObject.body,-40)
	rope3=new rope(bob3.body,roofObject.body,0)
	rope4=new rope(bob4.body,roofObject.body,40)
	rope5=new rope(bob5.body,roofObject.body,80)
	
	side=new rooves(200,420,350,20);
	side1=new rooves(600,420,350,20);
	side2=new rooves(400,590,20,500);

	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  background("skyBlue");
  roofObject.display();

  side.display();
  side1.display();
  side2.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  
  bob3.display();
  bob4.display();
  bob5.display();

	image(NImg,100,30,60,90);
	image(EImg,200,30,60,90);
	image(WImg,300,30,60,90);
	image(TImg,400,30,60,90);
	image(OImg,500,30,60,90);
	image(NImg,600,30,60,90);
	image(SImg,700,30,60,90);
	image(CImg,40,110,60,90);
	image(RImg,180,110,60,90);
	image(AImg,320,110,60,90);
	image(DImg,460,110,60,90);
	image(LImg,600,110,60,90);
	image(EImg,740,110,60,90);


	drawSprites();

	strokeWeight(4);
	fill("pink");
	stroke("black");
	textSize(20);
	textFont("Times New Roman");
	text("Press 'up' to see the magic!",300, 240);
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
//WRITE A CORRECT CODE TO APPLY A KEYPRESSED TO CHANGE THE POSITION OF BALL OBJECT TO THE LEFT WHEN UP ARROW KEY IS PRESSED
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-15,y:-40});
	}
}


