
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, pig1;
var constraintLog
var backgroundImg,platform;

var gameState =  "onSling";
function preload() {
    getBackgroundImage();

}

function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;
    //1200,400
    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(800, 320,70,70);
    box2 = new Box(1030,320,70,70);
    pig1 = new Pig(910, 350);
    log1 = new Log(910,260,300, PI/2);

    box3 = new Box(800,240,70,70);
    box4 = new Box(1020,240,70,70);
    pig3 = new Pig(910, 220);

    log3 =  new Log(910,180,300, PI/2);

    box5 = new Box(910,160,70,70);
    log4 = new Log(860,120,150, PI/7);
    log5 = new Log(970,120,150, -PI/7);

   
    constraintLog = new Log(230, 180, 80, PI/2);

    bird = new Bird(200,50);
    slingShot = new SlingShot(bird.body,{x:200, y:50} )

    
}

function draw(){
    if(backgroundImg){
         background(backgroundImg);
    }
    Engine.update(engine);
 //   console.log(box2.body.position.x);
  //  console.log(box2.body.position.y);
  //  console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();

   // constraintLog.display();
    slingShot.display();
   
}

function mouseDragged() {
   //   if(gameState !== "launched"){
          Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY})
  //     }
}

function mouseReleased() {
 //   gameState = "launched"
     slingShot.fly();
}
function keyPressed() {
    if(keyCode === 32) {
        bird.trajectory=[];
        Matter.Body.setPosition(bird.body, {x:200, y:50});
        slingShot.attach(bird.body);
        
    }
}

function getBackgroundImage() {
//    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
 //   var responseJSON = await response.json();
  //  var datetime = responseJSON.datetime
   // var hour = datetime.slice(11,13)
    /*console.log(hour)
    console.log(responseJSON)
    console.log(responseJSON.datetime)*/
    //hour = 21;

   // if(hour >=06 && hour < 19){
     //   console.log("if")
     backgroundImg = loadImage("sprites/bg.png");
    //}
    // else{
      //  console.log("else")
     //backgroundImg = loadImage("sprites/bg2.jpg");
   // }
}