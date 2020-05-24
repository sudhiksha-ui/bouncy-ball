const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var box;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
var opt={restitution:1.0}
    
ball=Bodies.circle(200,200,30,opt);
World.add(world,ball);

box=Bodies.rectangle(200,360,50,50)
World.add(world,box);

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    circle(ball.position.x,ball.position.y,30)
    rect(box.position.x,box.position.y,50,50)
}