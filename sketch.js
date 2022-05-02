
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world, NImg, EImg, WImg, TImg, OImg, SImg, CImg, RImg, AImg, DImg, LImg;
var N, E, W, T, O, Ns, S, C, R, A, D, L, Es;

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

	roofObject=new roof(400,200,300,20);

	bob1 = new bob(320,450,40)
	bob2 = new bob(360,450,40)
	bob3 = new bob(400,450,40)
	bob4 = new bob(440,450,40)
	bob5 = new bob(480,450,40)
	
	rope1=new rope(bob1.body,roofObject.body,-80)
	rope2=new rope(bob2.body,roofObject.body,-40)
	rope3=new rope(bob3.body,roofObject.body,0)
	rope4=new rope(bob4.body,roofObject.body,40)
	rope5=new rope(bob5.body,roofObject.body,80)
	
	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  background("skyBlue");
  roofObject.display();

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

  keyPressed();

	N = createSprite(100,30);
	E = createSprite(200,30);
	W = createSprite(300,30);
	T = createSprite(400,30);
	O = createSprite(500,30);
	Ns = createSprite(600,30);
	S = createSprite(700,70);
	C = createSprite(40,70);
	R = createSprite(190,70);
	A = createSprite(350,70);
	D = createSprite(500,70);
	L = createSprite(650,70);
	Es = createSprite(700,70);

	N.addImage(NImg);
	E.addImage(EImg);
	W.addImage(WImg);
	T.addImage(TImg);
	O.addImage(OImg);
	Ns.addImage(NImg);
	S.addImage(SImg);
	C.addImage(CImg);
	R.addImage(RImg);
	A.addImage(AImg);
	D.addImage(DImg);
	L.addImage(LImg);
	Es.addImage(EImg);


	drawSprites();
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
//WRITE A CORRECT CODE TO APPLY A KEYPRESSED TO CHANGE THE POSITION OF BALL OBJECT TO THE LEFT WHEN UP ARROW KEY IS PRESSED
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-40});
	}
}


