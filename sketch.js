var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//create options
	var packageOptions ={
	 isStatic: true,
	 restitution:0.3	
	}

	var groundOptions ={
	 isStatic: true
	}

   // Create package
	packageBody = Bodies.circle(width/2,200,5,packageOptions);
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 700, width, 10,groundOptions);
 	World.add(world, ground);

	Engine.run(engine);
	
	/*special code
	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); Render.run(render);
	*/
}


function draw() {
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  groundSprite.x = ground.position.x
  groundSprite.y = ground.position.y
  drawSprites();

 if (keyDown(DOWN_ARROW)) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	 Matter.Body.setStatic(packageBody,false);
	
  }

}


