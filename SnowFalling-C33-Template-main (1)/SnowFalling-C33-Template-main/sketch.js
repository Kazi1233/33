
var snow,snow2,snow3,snowimg



function preload(){

snowimg=loadImage("snow1.jpg")
snow2img=loadImage("snow2.jpg")
snow3img=loadImage("snow3.jpg")



}
  





function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(snowimg);
  if(frameCount%30===0){
snow=createSprite(random(10,780),-5,20,20)
snow.addImage(snow2img)
snow.velocityY=2
snow.scale=0.05
  }

  if(frameCount%70===0){
    snow2=createSprite(random(30,700),-5,20,20)
    snow2.addImage(snow3img)
    snow2.velocityY=2
    snow2.scale=0.05
      }
    
  drawSprites();
}