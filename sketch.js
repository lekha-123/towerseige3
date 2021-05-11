const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var box1,box2,box3,box4,box5,box6,box7,box8, stand,ball1
var polygon,sling;
var backgroundImg;
var bg = "light.jpg";

function preload()
{
polygon=loadImage("polygon.png")
getBackgroundImage()
}

function setup() {
  createCanvas(1600,400);
  engine = Engine.create();
	world = engine.world;
  stand= new ground(1000,300,200,25);
  box1=new box(1050,275,25,25);
  box2=new box(1025,275,25,25);
  box3=new box(1000,275,25,25);
  box4=new box(1075,275,25,25);
  box5=new box(975,275,25,25);
  box6=new box(925,275,25,25);
  box7=new box(950,275,25,25);
  box8=new box(975,250,25,25);
  box9=new box(1000,250,25,25);
  box10=new box(1050,250,25,25);
  box11=new box(950,250,25,25);
  box12=new box(1025,250,25,25);
  box13=new box(975,225,25,25);
  box14=new box(1000,225,25,25);
  box15=new box(1025,225,25,25);
  box16=new box(1000,200,25,25);
  ball1= Bodies.circle(50,200,20)
  World.add(world,ball1)
  sling=new slingshot(this.ball1,{x:200,y:100});
  

Engine.run(engine);
}


function draw() {
 // background(150,215,255); 
 if(backgroundImg)
  {
    background(backgroundImg);
  }
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  stand.display();
  fill ("brown")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill ("red")
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill ("orange")
  box13.display();
  box14.display();
  box15.display();
  fill ("pink")
   box16.display();
   sling.display();

imageMode(CENTER);
image(polygon,ball1.position.x,ball1.position.y,40,40);
drawSprites();
}
function mouseReleased()
{
  sling.fly();
}
function mouseDragged()
{
  Matter.Body.setPosition(this.ball1,{x:mouseX,y:mouseY});
}
function keyPressed()
{
    if(keyCode===32)
        {
            sling.attach(this.ball1);
        }
}
async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
   var hour = datetime.slice(11, 13);
   //console.log(hour);

   if (hour >= 06 && hour <= 18) {
     bg = "light.jpg";
   } else {
     bg = "dark.jpg";
   }

   backgroundImg = loadImage(bg);
   console.log(backgroundImg);
  }