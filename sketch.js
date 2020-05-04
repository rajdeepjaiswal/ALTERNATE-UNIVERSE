var sun,mercury,venus,mars,earth,jupiter,saturn,uranus,neptune,pluto;
var sunImg, mercuryImg, venusImg, earthImg, marsImg, jupeterImg, saturnImg, uranusImg, neptuneImg,plutoImg;
var background,backgroundImg;
function preload(){
  backgroundImg= loadImage("solarImages/galaxy.png");
  sunImg=loadImage("solarImages/sun.png");
  mercuryImg=loadImage("solarImages/mercury.png");
  venusImg=loadImage("solarImages/venus.png");
  earthImg=loadImage("solarImages/earth.png");
  marsImg=loadImage("solarImages/mars.png");
  jupeterImg=loadImage("solarImages/jupiter.png");
  saturnImg=loadImage("solarImages/saturn.png");
  uranusImg=loadImage("solarImages/uranus.png");
  neptuneImg=loadImage("solarImages/neptune.png");
  plutoImg=loadImage("solarImages/pluto.png");
  
}
function setup() {
  createCanvas(1200,800);

  sun = createSprite(10,10, 200, 200);
  sun.addImage(sunImg);
  sun.scale= 0.1;
  console.log(sun.x);
  sun.setCollider("circle",0,0,200);
  sun.debug=true;
  mercury = createSprite(200,100,40,40);
  mercury.addImage(mercuryImg);
  mercury.scale= 0.15;
  venus = createSprite(250,200,30,30);
  venus.addImage(venusImg);
  venus.scale= 0.15;
  earth = createSprite(350,250,40,40);
  earth.addImage(earthImg);
  earth.scale= 0.15;
  mars = createSprite(450,350,40,40);
  mars.addImage(marsImg);
  mars.scale= 0.11;
  jupiter = createSprite(550,420,30,30);
  jupiter.addImage(jupeterImg);
  jupiter.scale= 0.15;
  saturn = createSprite(670,520,40,40);
  saturn.addImage(saturnImg);
  saturn.scale= 0.15;
  uranus = createSprite(850,600,30,30);
  uranus.addImage(uranusImg);
  uranus.scale= 0.15;
  neptune = createSprite(970,650,40,40);
  neptune.addImage(neptuneImg);
  neptune.scale= 0.1;
  pluto = createSprite(1100,700,30,30);
  pluto.addImage(plutoImg);
  pluto.scale= 0.1;
}

function draw() {
  background(backgroundImg);  
  drawSprites();
  text(mouseX + ',' + mouseY, 10, 15);
  if(frameCount%50===0){
    sun.scale= sun.scale+0.1;
  }
  if(sun.collide(mercury)){
    mercury.destroy();
  }
  if(sun.collide(venus)){
    venus.destroy();
  }
  if(sun.collide(earth)){
    earth.destroy();
  }
  if(sun.collide(mars)){
    mars.destroy();
  }
  if(sun.collide(jupiter)){
    jupiter.destroy();
  }
  if(sun.collide(saturn)){
    saturn.destroy();
  }
  if(sun.collide(uranus)){
    uranus.destroy();
  }
  if(sun.collide(neptune)){
    neptune.destroy();
  }
  if(sun.collide(pluto)){
    pluto.destroy();
  }
}