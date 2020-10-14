const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var p,p2,p3,p4,p5,ground,par,line;
var score=0;
var gameState=end;
function setup() {
  createCanvas(800,800);

  var p=new Plinko(400,100,10);
  var p2=new Plinko(400,200,10);
  var p3=new Plinko(400,300,10);
  var p4=new Plinko(400,400,10);
  var p5=new Plinko(400,500,10);
  
  var ground=new ground(200,700,20,200);
}

function draw() {
  background(255,0,255);  
  drawSprites();
}
function mousePressed(){
  if(gameState !=="end"){
    score++;
    var par=new Particle(mouseX,10,10,10);
  }
}