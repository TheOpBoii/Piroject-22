var car, wall;
var speed, weight,ultspults = 0;

function setup() {
  createCanvas(1600,400);  
  speed=random(55,90)
  weight = random(400,1500);
  car  = createSprite(50,200,50,50);
  car.velocityX = speed
  car.shapeColor = "white"
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);
  if (wall.x-car.x<wall.width/2+car.width/2)  {
    car.velocityX = 0
    ultspults = (0.5*weight*speed*speed)/22500
  }

  if(ultspults>180) {
    car.shapeColor = "red"
  }
  
    if(ultspults<180 && ultspults>80) {
      car.shapeColor = "yellow"
    }
    if(ultspults<80 && ultspults>0) {
      car.shapeColor = "green"
    }




  drawSprites();
}
