var ground, lander, lander_image, bg_image, vx=0
var g=0.05
var vy=0
function preload(){
  lander_image=loadImage("normal.png")
  bg_image=loadImage("bg.png")
}
function setup(){
createCanvas(1000, 700)
frameRate(80)
lander=createSprite(100, 50)
lander.addImage(lander_image)
lander.scale=0.1
rectMode(CENTER)
textSize(15)
}
function draw(){
  background(51)
  image(bg_image, 0, 0)
  push()
  fill(255)
  text("vertical velocity: "+round(vy), 800, 75)
  pop()
  vy+=g
  lander.position.y+=vy
  drawSprites()
}
function keyPressed(){
if(keyCode==UP_ARROW){
  upward_thrust(

  )
  lander.changeAnimation("thrusting")
  thrust.nextFrame()
}
}
function upward_thrust(){
  vy=-1
}