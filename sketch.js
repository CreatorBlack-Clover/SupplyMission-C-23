// variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,bar1,bar2,bar3;
// world rules
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	// loading images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	// canvas
	createCanvas(800, 700);
	rectMode(CENTER);

	// ground
	groundSprite=createSprite(width/2, 685, width,30);
	groundSprite.shapeColor= "brown";

	// red box or the drop zone
	bar1 = createSprite(300,620,20,100);
	bar1.shapeColor = "red";

	bar2 = createSprite(400,660,200,20);
	bar2.shapeColor = "red";

	bar3 = createSprite(500,620,20,100);
	bar3.shapeColor = "red";
	
	// package properties
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	// helicopter properties
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	// macking drop done be a body
	bar1 = Bodies.rectangle(300,620,20,100, {isStatic: false});
	World.add(world,bar1);

	bar2 = Bodies.rectangle(400,660,200,20, {isStatic: false});
	World.add(world,bar2);

	bar3 = Bodies.rectangle(500,620,20,100, {isStatic: false});
	World.add(world,bar3);

	// creating the package
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 685, width, 30 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) 
 {
	 Matter.Body.setStatic(packageBody,false);
    
 }
}



