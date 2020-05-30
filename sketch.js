const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var dustbin
var trash
var ropeClass
function setup() {
  createCanvas(1200,400);
 engine = Engine.create();
  world = engine.world;
  dustbin =new Dustbin(700,320,70,70)
  trash=new Trash(200,287,40,40)
  ropeClass=new Rope(trash.body,{x:200,y:50})
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  dustbin.display();
  trash.display();
  ropeClass.Show();
}
function mouseDragged(){
  trash.body.position.x=mouseX
 trash.body.position.y=mouseY  
}
function mouseReleased(){
  ropeClass.chain.bodyA=null
}