const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine , world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;

function preload() {
   
   
}

function setup(){
    createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    //create Ground
    ground = new Ground(1500,790,3000,20);

    //creating boxes
    box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    box6 = new Box(900,100,70,70);

    box7 = new Box(800,100,70,70);
    box8 = new Box(800,100,70,70);
    box9 = new Box(800,100,70,70);
    box10= new Box(800,100,70,70);
    box11= new Box(800,100,70,70);
    box12= new Box(800,100,70,70);

    box13= new Box(700,100,70,70);
    box14= new Box(700,100,70,70);
    box15= new Box(700,100,70,70);
    box16= new Box(700,100,70,70);
    box17= new Box(700,100,70,70);
    box18= new Box(700,100,70,70);
    box19= new Box(700,100,70,70);
    box20= new Box(700,100,70,70);
    box21= new Box(700,100,70,70);
    box22= new Box(700,100,70,70);
    box23= new Box(700,100,70,70);
    box24= new Box(700,100,70,70);
    box25= new Box(700,100,70,70);
    box26= new Box(700,100,70,70);
    box27= new Box(700,100,70,70);
    box28= new Box(700,100,70,70);
    
    //creating ball
    ball = new Ball(200,200,70);

    //creating rope & attaching the ball
    rope = new Rope(ball.body,{x:550,y:50});

    // var render = Render.create({
    //     element:document.body,
    //     engine: engine,
    //     options: {
    //       width: 3000,
    //       height: 800,
    //       wireframes:false,
    //       showAngleIndicator: true,
    //     },
    //   });
    //   Render.run(render);

 
}

function draw() {
background("blue");
Engine.update(engine);

    //displaying ground
    ground.display();

    //displaying boxes
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();

    ball.display();

    rope.display();

}


function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})

}

// const Engine = Matter.Engine;
// const World= Matter.World;
// const Bodies = Matter.Bodies;
// const Constraint = Matter.Constraint;

// var engine, world;
 
// function preload() {
      
// }

// function setup(){
//     var canvas = createCanvas(3000,800);
//     engine = Engine.create();
//     world = engine.world;

//     ground = new Ground(1500,790,3000,20)
//     box1 = new Box(900,100,70,70)

//     box2 = new Box(900,100,70,70)
//     box3 = new Box(900,100,70,70)
//     box4 = new Box(900,100,70,70)
//     box5 = new Box(900,100,70,70)
//     box6 = new Box(900,100,70,70)





    
// }

// function draw(){
//   background("blue");
    

//     ground.display();
//      box1.display();
//      box2.display();
//      box3.display();
//      box4.display();
//      box5.display();
//      box6.display();
     
// }

// function mouseDragged(){
     
// }
 