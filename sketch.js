var car,wall;
var speed,weight,def;

function setup() {
  speed=random(55,90)
  weight=random(400,1500)
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  car=createSprite(50,200,50,50);
  wall=createSprite(500,200,10,height);
  car.velocityX=speed/10;
  wall.shapeColor=color(80,80,80)  ;
  car.shapeColor=color(40,20,80)
}

function draw() {
  background(255,255,255);
  if(wall.x-car.x < (car.width+wall.width)/2){
    def = 0.5*weight*speed*speed;
  if(def<100){car.shapeColor="green"} 
  
  if(def>100 && def<180 ||def==100 ){car.shapeColor="blue"} 
  
  if(def>179){car.shapeColor="red"} 
   
  
}

  drawSprites();
}
