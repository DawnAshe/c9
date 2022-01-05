var chicken;


function setup() {
  createCanvas(600,200);
chicken=createSprite(100,100,10,10)


}

function draw() 
{
  background(30);
if(keyDown("right")){
chicken.x=chicken.x+5
}
if(keyDown("left")){
  chicken.x=chicken.x-5
}


  drawSprites()




}




