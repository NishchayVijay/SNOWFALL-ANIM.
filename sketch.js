var bg;
var boy;

function preload(){
bgImage  = loadImage("snow1.jpg")
boyImage = loadImage("BOY.png")
}

function setup() {
  //createCanvas(1600,800);
  bg = createSprite(400,50);
  bg.addImage(bgImage)
  boy = createSprite(300,150)
  boy.addImage(boyImage)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}