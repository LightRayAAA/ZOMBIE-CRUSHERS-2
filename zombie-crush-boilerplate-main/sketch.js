const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var leftwall, rightwall
var bridge
var link
var stones = []
var jointPoint, jointPoint2
var jointLink, jointLink2
var zombie, zombie1,zombie2,zombie3,zombie4
var BGImg
var ground

function preload()
{

zombie1 = loadImage("assets/zombie.png")
zombie2 = loadImage("assets/zombie.png")
zombie3 = loadImage("assets/zombie.png")
zombie4 = loadImage("assets/zombie.png")
BGImg = loadImage("assets/background.png")

}

function setup() {
createCanvas(windowWidth, windowHeight);
engine = Engine.create();
world = engine.world;
frameRate(80);
leftwall = new Base(100,height-300,200,height/2+100,"#8d6d63",true)
rightwall = new Base(width-100,height-300,200,height/2+100,"#8d6d63",true)
bridge = new Bridge(40,{x: 50, y: height/2-140})
jointPoint = new Base(width-300,height/2-25,40,20,"#8d6d63",true)
jointPoint2 = new Base(2500,height/2-25,40,20,"#8d6d63",true)
Matter.Composite.add(bridge.body,jointPoint)
Matter.Composite.add(bridge.body,jointPoint2)
jointLink = new Link(bridge,jointPoint)
jointLink2 = new Link(bridge,jointPoint2)
ground = new Base(0,height-10,width*2,20)

for(var i = 0; i <= 8; i++){
var x = random(width/2 - 200, width / 2 + 300)
var y = random(-100, 100)
var stone = new Stone(x, y, 80, 80)
stones.push(stone)
}

zombie = createSprite(width/2, height-110)
zombie.addAnimation("lefttoright", zombie1, zombie2, zombie1)
zombie.addAnimation("righttoleft", zombie3, zombie4, zombie3)
zombie.scale = 0.1
zombie.velocityX = 10
}

function draw() {
  background(BGImg);
  Engine.update(engine);
  for(var stone of stones){
  stone.display();
  //jointPoint.display();
  }
  leftwall.display();
  rightwall.display();
  bridge.show();
  ground.display();

  if(zombie.position.x >= width - 300){
  zombie.velocityX = -10
  zombie.changeAnimation("righttoleft")
  }
  if(zombie.position.x <= 300){
  zombie.velocityX = 10
  zombie.changeAnimation("lefttoright")
  }
  drawSprites();
}
