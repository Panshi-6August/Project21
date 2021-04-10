var bullet , wall
var speed , weight
function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  bullet=createSprite(50,200,50,50);
  bullet.velocityX = speed;
  wall=createSprite(1500,200,60,height/2);
  wall.ShapeColor=color(80,80,80)
  
}

var wall, thickness;
var bullet,speed,weight;
thickness=random(22,83)

wall=createSprite(1200,200,thickness,height/2);
speed=random(223,321)
function draw() {
  background(255,255,255);
  
  function hasCollided(Lbullet,Lwall)
  {
    bulletRightEdge=lbullet.x+lbullet.width;
    wallleftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false;

  }

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight*spped*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.ShapeColor=color(255,0,0);

    }
    if(damage<10)
    {
      wall.ShapeColor=color(0,255,0);
    }

  }
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocity=0;
    var deformation=0.5 * weight *speed* speed/22500;
    if(deformation>180)
    {
      car.ShapeColor=color(255,0,0)
    }
    if(deformation<180 && deformation>100)
    {
      car.ShapeColor=color(230,230,0)
    }
    if(deformation<100)
    {
      car.ShapeColor=clor(0,255,0)
    }
  } 
  drawSprites();
}